from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, Optional, URL
from app.models import User


def len_firstname(form, field):
    #Checking length of firstname
    firstname = field.data
    if len(firstname) >= 16:
        raise ValidationError('First name must be less than 15 characters')

def len_lastname(form, field):
    #Checking length of firstname
    lastname = field.data
    if len(lastname) >= 16:
        raise ValidationError('Last name must be less than 15 characters')  

class ProfileForm(FlaskForm):
    firstName = StringField('firstName', validators=[DataRequired(message='Please enter a first name.'), len_firstname])
    lastName = StringField('lastName', validators=[DataRequired(message='Please enter a last name'), len_lastname])
    profileImg = StringField('profileImg', validators=[Optional()])
