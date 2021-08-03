from flask import Blueprint, request, jsonify
from app.models import db, Anime

anime_list_routes = Blueprint('anime_list', __name__)

# Find all anime by status (ex: WATCHED/WATCHING/PLAN TO WATCH)
@anime_list_routes.route('/status=<string:status>')
def anime_by_status(status):
    statusAnimes = Anime.query.filter_by(status=status.upper()).all()
    return {'anime': [statusAnime.to_dict() for statusAnime in statusAnimes]}

