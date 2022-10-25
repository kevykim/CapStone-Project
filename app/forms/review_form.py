from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, NumberRange
from app.models import Review





class ReviewForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired()])
    stars = IntegerField('stars', validators=[DataRequired(), NumberRange(min = 1, max = 5)])
    reviewImg = StringField('reviewImg')