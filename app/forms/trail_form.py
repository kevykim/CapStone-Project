from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Trail



def namechecker(form, field):
    name = field.data
    if len(name) < 7:
        raise ValidationError('Please enter a trail name longer than 7 characters.')

def descriptionchecker(form, field):
    description = field.data
    if len(description) < 20:
        raise ValidationError('Please enter a description longer than 20 characters.')

# def elevationchecker(form, field):
#     elevation = field.data
#     if '.' in elevation:
#         raise ValidationError('Only whole numbers are allowed.')

def imagechecker(form, field):
    image = field.data
    if 'https' not in image or ('.jpg' not in image) and ('.jpeg' not in image) and ('.gif' not in image) and ('.svg' not in image):
        raise ValidationError('Please enter a valid URL.')

# CHOICES

country_choices = ["United States of America"]

state_choices = ["California"]

resort_choices = ["Boreal Mountain Resort", "Heavenly Lake Tahoe"]

difficulty_choices = ["Beginner", "Intermediate", "Black Diamond", "Double Black Diamond"]

routeType_choices = ["All-mountain", "Park", "Powder", "Freeride"]

class TrailForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    country = SelectField('country', choices = country_choices, validators=[DataRequired(message='Please select a country.')])
    state = SelectField('state', choices = state_choices, validators=[DataRequired(message='Please select a state.')])
    resort = SelectField('resort', choices = resort_choices, validators=[DataRequired('Please select a resort.')])
    difficulty = SelectField('difficulty', choices = difficulty_choices, validators=[DataRequired('Please select a difficulty.')])
    description = TextAreaField('description', validators=[DataRequired(), descriptionchecker])
    length = DecimalField('length', validators=[DataRequired()], places=1)
    elevation = IntegerField('elevation', validators=[DataRequired()])
    routeType = SelectField('routeType', choices = routeType_choices, validators=[DataRequired('Please select a route type.')])
    previewImg = StringField('previewImg', validators=[DataRequired(), imagechecker])
