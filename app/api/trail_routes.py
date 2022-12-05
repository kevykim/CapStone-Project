from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Trail, db
from app.forms import TrailForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import date
from app.sw3_upload import (upload_file_to_s3, allowed_file, get_unique_filename)

trail_routes = Blueprint('trails', __name__)


# CREATE

# CREATE A TRAIL
@trail_routes.route('/', methods=["POST"])
@login_required
def create_trail():
    if "previewImg" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["previewImg"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    trailform = TrailForm()
    trailform['csrf_token'].data = request.cookies['csrf_token']
    if trailform.validate_on_submit():
        created_trail = Trail(
            name = trailform.data['name'],
            city = trailform.data['city'],
            country = trailform.data['country'],
            state = trailform.data['state'],
            resort = trailform.data['resort'],
            difficulty = trailform.data['difficulty'],
            description = trailform.data['description'],
            length = trailform.data['length'],
            elevation = trailform.data['elevation'],
            routeType = trailform.data['routeType'],
            previewImg = url,
            createdAt = date.today(),
            updatedAt = date.today(),
            userId = current_user.id
        )

        db.session.add(created_trail)
        db.session.commit()
        return created_trail.to_dict()
    return {'errors': validation_errors_to_error_messages(trailform.errors)}, 400
# READ

# GET ALL TRAILS
@trail_routes.route('/')
def get_all_trails():
    trails = Trail.query.all()
    if trails is None:
        return {'errors': 'Trail not found'}, 404

    return {'trails': [trail.to_dict() for trail in trails]}

# GET CURRENT USER'S TRAILS
@trail_routes.route('/current')
@login_required
def get_currentuser_trail():
    trails = Trail.query.filter(Trail.userId == current_user.id)
    if trails is None:
        return {'errors': 'Trail not found'}, 404
    return {'trails': [trail.to_dict() for trail in trails]}
    
# GET A TRAIL BY ID
@trail_routes.route('/<int:id>')    
def get_trail_by_id(id):
    trails = Trail.query.get(id)
    if trails is None:
        return {'errors': 'Trail not found'}, 404
    return trails.to_dict()
# UPDATE

# UPDATE A TRAIL
@trail_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_trail(id):
    trailform = TrailForm()
    trailform['csrf_token'].data = request.cookies['csrf_token']

    if "previewImg" not in request.files:
        url = trailform.data['previewImg']
    else:
        image = request.files["previewImg"]

        if not allowed_file(image.filename):
            return {"errors": "file type not permitted"}, 400
    
        image.filename = get_unique_filename(image.filename)

        upload = upload_file_to_s3(image)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            return upload, 400

        url = upload["url"]
    updated_trail = Trail.query.get(id)
    if updated_trail is None:
        return {'errors': 'Trail not found'}, 404
    if trailform.validate_on_submit():
        updated_trail.name = trailform.data['name']
        updated_trail.city = trailform.data['city']
        updated_trail.country = trailform.data['country']
        updated_trail.state = trailform.data['state']
        updated_trail.resort = trailform.data['resort']
        updated_trail.difficulty = trailform.data['difficulty']
        updated_trail.description = trailform.data['description']
        updated_trail.length = trailform.data['length']
        updated_trail.elevation = trailform.data['elevation']
        updated_trail.routeType = trailform.data['routeType']
        updated_trail.previewImg = url
        updated_trail.updatedAt = date.today()
        db.session.commit()
        return updated_trail.to_dict()
    return {'errors': validation_errors_to_error_messages(trailform.errors)}, 400


# DELETE

# DELETE A TRAIL
@trail_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_trail(id):
    deleted_trail = Trail.query.get(id)
    if deleted_trail is None:
        return {'errors': 'Trail not found'}, 404
    db.session.delete(deleted_trail)
    db.session.commit()
    return {'message': f'Trail {id} has been deleted successfully.'}