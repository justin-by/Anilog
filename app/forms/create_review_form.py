from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def content_limit(form, field):
    # Checking if content is less than or equal to 80 characters.
    content = field.data
    if len(content) > 80:
        raise ValidationError('Content must be 80 characters or less')

def rating_limit(form, field):
    # Checking if content is less than or equal to 80 characters.
    rating = field.data
    if rating < 0 or rating > 10:
        raise ValidationError('Rating must be between 0 and 10')

class ReviewForm(FlaskForm):
    content = StringField("Content", validators=[DataRequired(), content_limit])
    rating = IntegerField("Rating", validators=[DataRequired(), rating_limit])