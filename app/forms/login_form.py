from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')

def emailchecker(form, field):
    # Checking for email 
    email = field.data
    if '@' not in email or  ('.com' not in email) and ('.net' not in email) and ('.io' not in email):
        raise ValidationError("Invalid email address")


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message='Please enter your email'), user_exists, emailchecker])
    password = StringField('password', validators=[
                           DataRequired(message='Please enter your password'), password_matches])
