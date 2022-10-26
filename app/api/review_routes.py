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

#DELETE