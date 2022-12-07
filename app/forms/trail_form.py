from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, NumberRange
from app.models import Trail



def namechecker(form, field):
    name = field.data
    if len(name) < 5 or len(name) >= 41:
        raise ValidationError('Trail name must be between 5 to 40 characters')

def descriptionchecker(form, field):
    description = field.data
    if len(description) < 20 or len(description) >= 501 :
        raise ValidationError('Trail description must be between 20 to 500 characters')

def citychecker(form, field):
    city = field.data
    if (len(city) <= 0 or len(city) >= 76):
        raise ValidationError("Please enter a city less than 75 characters")

# def elevationchecker(form, field):
#     elevation = field.data
#     if float(elevation) % 1 != 0:
#         raise ValidationError("Please enter a whole number")

# def imagechecker(form, field):
#     image = field.data
#     if ('https://' not in image and 'http://' not in image) or ('.jpg' not in image) and ('.jpeg' not in image) and ('.gif' not in image) and ('.svg' not in image) and ('.png' not in image):
#         raise ValidationError('Please enter a valid URL.')

# CHOICES

country_choices = ["United States of America"]

state_choices = ["California", "Oregon", "New York", "Washington"]

resort_choices = ["Boreal Mountain Resort", "Heavenly Lake Tahoe", "Mammoth Mountain", "Bear Mountain", "Mountain High", 'Mount Hood Meadows', 'Timberline Summit Pass', "Mount Bachelor", "Gore Mountain", "Windham Mountain", "Hunter Mountain", "Crystal Mountain", "Stevens Pass", "Mount Baker"]

difficulty_choices = ["Beginner", "Intermediate", "Black Diamond", "Double Black Diamond"]

routeType_choices = ["All-mountain", "Park", "Powder", "Free-ride"]

class TrailForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired(message="Please enter a city"), citychecker])
    country = SelectField('country', choices = country_choices, validators=[DataRequired(message='Please select a country.')])
    state = SelectField('state', choices = state_choices, validators=[DataRequired(message='Please select a state.')])
    resort = SelectField('resort', choices = resort_choices, validators=[DataRequired('Please select a resort.')])
    difficulty = SelectField('difficulty', choices = difficulty_choices, validators=[DataRequired('Please select a difficulty.')])
    description = TextAreaField('description', validators=[DataRequired(), descriptionchecker])
    length = DecimalField('length', validators=[DataRequired(), NumberRange(min=0.3, max=5.0)], places=1)
    elevation = IntegerField('elevation', validators=[DataRequired('Please enter a elevation'), NumberRange(min=3000, max=12000)])
    routeType = SelectField('routeType', choices = routeType_choices, validators=[DataRequired('Please select a route type.')])
    previewImg = StringField('previewImg', validators=[DataRequired()])
