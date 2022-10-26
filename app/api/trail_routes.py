from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Trail, db
from app.forms import TrailForm
from app.api.auth_routes import validation_errors_to_error_messages

trail_routes = Blueprint('trails', __name__)


# CREATE

# READ

# GET ALL TRAILS
@trail_routes.route('/')
def get_all_trails():
    trails = Trail.query.all()
    if trails is None:
        return {'errors': 'Trail not found'}, 404

    return {'trail': [trail.to_dict() for trail in trails]}

# GET CURRENT USER'S TRAILS
@trail_routes.route('/current')
@login_required
def get_currentuser_trail():
    trails = Trail.query.filter(Trail.userId == current_user.id)
    if trails is None:
        return {'errors': 'Trail not found'}, 404
    return {'trail': [trail.to_dict() for trail in trails]}
    
# GET A TRAIL BY ID
@trail_routes.route('/<int:id>')    
def get_trail_by_id(id):
    trails = Trail.query.get(id)
    if trails is None:
        return {'errors': 'Trail not found'}, 404
    return trails.to_dict()
# UPDATE

# DELETE