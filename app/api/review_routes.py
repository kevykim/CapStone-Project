from distutils import log
from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


#CREATE

#READ

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