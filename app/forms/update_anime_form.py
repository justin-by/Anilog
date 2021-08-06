from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

def rating_limit(form, field):
    # Checking if content is less than or equal to 80 characters.
    rating = field.data
    if rating < 0 or rating > 10:
        raise ValidationError('Rating must be between 0 and 10')

class UpdateAnimeForm(FlaskForm):
    status = StringField("Status", validators=[DataRequired()])
    rating = IntegerField("Rating", validators=[DataRequired(), rating_limit])