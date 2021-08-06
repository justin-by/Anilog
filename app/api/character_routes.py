from flask import Blueprint, request, jsonify
from app.models import Character
from flask_login import login_required, current_user

character_routes = Blueprint('character', __name__)


# Find all characters of an anime based on animeId
@character_routes.route('/anime/<int:animeId>')
def anime_reviews(animeId):
    characters = Character.query.filter_by(animeId=animeId).all();
    return {'characters': [character.to_dict() for character in characters]}




