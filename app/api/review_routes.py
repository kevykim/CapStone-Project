from flask import Blueprint, request
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


#CREATE

# CREATE A REVIEW
@review_routes.route('/trails/<int:id>', methods=["POST"])
@login_required
def create_review(id):
    reviewform = ReviewForm()
    reviewform['csrf_token'].data = request.cookies['csrf_token']
    if reviewform.validate_on_submit():
        created_review = Review(
            trailId = id,
            userId = current_user.id,
            review = reviewform.data['review'],
            stars = reviewform.data['stars'],
            reviewImg = reviewform.data['reviewImg']
        )
        db.session.add(created_review)
        db.session.commit()
        return created_review.to_dict()
    return {'errors': validation_errors_to_error_messages(reviewform.errors)}, 400

#READ

# GET ALL TRAILS
@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    if reviews is None:
        return {'errors': 'Review not found'}, 404

    return {'reviews': [review.to_dict() for review in reviews]}

# GET ALL REVIEWS FROM TRAIL
@review_routes.route('/trails/<int:id>')
def get_trail_reviews(id):
    reviews = Review.query.filter(Review.trailId == id)
    if reviews is None:
        return {'errors': 'Review not found'}, 404
    return {'review': [review.to_dict() for review in reviews]}

# GET CURRENT USER'S REVIEWS
@review_routes.route('/current')
@login_required
def get_currentuser_review():
    reviews = Review.query.filter(Review.userId == current_user.id)
    if reviews is None:
        return {'errors': 'Review not found'}, 404
    return {'review': [review.to_dict() for review in reviews]}

#UPDATE

# UPDATE A REVIEW
@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_review(id):
    reviewform = ReviewForm()
    reviewform['csrf_token'].data = request.cookies['csrf_token']
    updated_review = Review.query.get(id)
    if updated_review is None:
        return {'errors': f'Review {id} not found'}, 404
    if reviewform.validate_on_submit():
        updated_review.review = reviewform.data['review']
        updated_review.stars = reviewform.data['stars']
        updated_review.reviewImg = reviewform.data['reviewImg']
        db.session.commit()
        return updated_review.to_dict()
    return {'errors': validation_errors_to_error_messages(reviewform.errors)}, 400


#DELETE

# DELETE A REVIEW
@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    deleted_review = Review.query.get(id)
    if deleted_review is None:
        return {'errors': f'Review {id} not found'}, 404
    db.session.delete(deleted_review)
    db.session.commit()
    return {'message': f'Review {id} has been deleted successfully.'}