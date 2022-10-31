from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, NumberRange, Optional, URL
from app.models import Review


def reviewchecker(form, field):
    review = field.data
    if len(review) < 10:
        raise ValidationError('Reviews must be 10 characters long')

def imagechecker(form, field):
    image = field.data
    if 'https' not in image or ('.jpg' not in image) and ('.jpeg' not in image) and ('.gif' not in image) and ('.svg' not in image):
        raise ValidationError('Please enter a valid URL.')


class ReviewForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired(), reviewchecker])
    stars = IntegerField('stars', validators=[DataRequired(), NumberRange(min = 1, max = 5, message='Please select a star from 1 to 5.')])
    reviewImg = StringField('reviewImg', validators=[ Optional(), URL(require_tld=True, message='Please enter a valid URL.'), imagechecker])