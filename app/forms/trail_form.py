from tkinter.tix import Select
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Trail


country_choices = ["United States of America"]

state_choices = ["California"]

mountain_choices = ["Come back to this again later tonight"]

resort_choices = ["Mammoth, Big Bear later tonight"]

skill_choices = ["COME BACK TO THIS AGAIN later tonight"]

routeType_choices = ["Park", "Mountain later tonight"]

class TrailForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    country = SelectField('country', choices = country_choices, validators=[DataRequired()])
    state = SelectField('state', choices = state_choices, validators=[DataRequired()])
    mountain = SelectField('mountain', choices = mountain_choices, validators=[DataRequired()])
    resort = SelectField('resort', choices = resort_choices, validators=[DataRequired()])
    skill = SelectField('skill', choices = skill_choices, validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    length = DecimalField('length', validators=[DataRequired()])
    elevation = IntegerField('elevation', validators=[DataRequired()])
    routeType = SelectField('routeType', choices = routeType_choices, validators=[DataRequired()])
    previewImg = StringField('previewImg', validators=[DataRequired()])
