from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, Optional, URL
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def len_username(form, field):
    # Checking length of username
    username = field.data
    if len(username) < 4:
        raise ValidationError('Username must be longer than 4 characters.')

def passwordchecker(form, field):
    # Checking password if less than 7 characters and includes a number
    password = field.data
    if "0" not in password and "1" not in password and "2" not in password and "3" not in password and "4" not in password and "5" not in password and "6" not in password and "7" not in password and "8" not in password and "9" not in password:
        raise ValidationError("Password must include at least one number")
    elif len(password) < 7:
        raise ValidationError('Password must be longer than 7 characters.')

def emailchecker(form, field):
    # Checking for email 
    email = field.data
    if '@' not in email or  ('.com' not in email) and ('.net' not in email) and ('.io' not in email):
        raise ValidationError("Invalid email address")

def imagechecker(form, field):
    image = field.data
    if 'https' not in image or ('.jpg' not in image) and ('.jpeg' not in image) and ('.gif' not in image) and ('.svg' not in image):
        raise ValidationError('Please enter a valid URL.')




class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message='Please enter a username'), username_exists, len_username])
    firstName = StringField('firstName', validators=[DataRequired(message='Please enter a first name.')])
    lastName = StringField('lastName', validators=[DataRequired(message='Please enter a last name')])
    email = StringField('email', validators=[DataRequired(message='Please enter a email'), user_exists, emailchecker])
    password = StringField('password', validators=[DataRequired(message='Please enter a password'), passwordchecker])
    # profileImg = StringField('profileImg', validators=[Optional(), URL(require_tld=True, message='Please enter a valid URL.'), imagechecker])