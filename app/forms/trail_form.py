from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Trail


country_choices = ["United States of America"]

state_choices = ["California"]


resort_choices = ["Mammoth, Big Bear later tonight"]

difficulty_choices = ["Beginner", "Intermediate", "Black Diamond", "Double Black Diamond"]

routeType_choices = ["All-mountain", "Park", "Powder", "Freeride"]

class TrailForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    country = SelectField('country', choices = country_choices, validators=[DataRequired()])
    state = SelectField('state', choices = state_choices, validators=[DataRequired()])
    resort = SelectField('resort', choices = resort_choices, validators=[DataRequired()])
    difficulty = SelectField('difficulty', choices = difficulty_choices, validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    length = DecimalField('length', validators=[DataRequired()])
    elevation = IntegerField('elevation', validators=[DataRequired()])
    routeType = SelectField('routeType', choices = routeType_choices, validators=[DataRequired()])
    previewImg = StringField('previewImg', validators=[DataRequired()])
