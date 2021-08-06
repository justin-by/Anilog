from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def rating_limit(form, field):
    # Checking if content is less than or equal to 80 characters.
    rating = field.data
    if rating < 0 or rating > 10:
        raise ValidationError('Rating must be between 0 and 10')

class AddAnimeForm(FlaskForm):
    status = StringField("Status", validators=[DataRequired(message='Status is required')])
    rating = IntegerField("Rating", validators=[rating_limit])
