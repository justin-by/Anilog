from flask import Blueprint, request, jsonify
from app.models import db, User
from flask_login import current_user

anime_list_routes = Blueprint('anime_list', __name__)

# Find all anime by status (ex: WATCHED/WATCHING/PLAN TO WATCH)
@anime_list_routes.route('/status=<string:status>')
def anime_by_status(status):
    return {'anime': [anime.to_dict() for anime in current_user.animeList if anime.status == status]}

