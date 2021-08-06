from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
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

def password_match(form, field):
    # Checking if passwords match
    password = field.data
    repeatPassword = field.data
    if password != repeatPassword:
        raise ValidationError('Passwords do not match')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message='Username is required'), username_exists])
    email = StringField('email', validators=[DataRequired(message='Email is required'), user_exists])
    password = StringField('password', validators=[DataRequired(message='Password is required'), password_match])
    repeatPassword = StringField('repeatpassword', validators=[DataRequired(message='Please confirm password')])
