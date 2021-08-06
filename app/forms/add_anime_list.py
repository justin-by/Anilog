from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class AddAnimeForm(FlaskForm):
    status = StringField("Status", validators=[DataRequired(message='Status is required')])
    rating = IntegerField("Rating", validators=[])
