from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('User not found')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message='Please enter an email'), user_exists])
    password = StringField('password', validators=[
                           DataRequired(message='Please enter password')])
