from flask import Blueprint, request, jsonify
from app.models import Anime, db

anime_routes = Blueprint('anime', __name__)

# Find all anime by season (ex: WINTER/SPRING)
@anime_routes.route('/season=<string:season>')
def anime_by_season(season):
    seasonAnimes = Anime.query.filter_by(season=season.upper()).all()
    return {'anime': [seasonAnime.to_dict() for seasonAnime in seasonAnimes]}

@anime_routes.route('/<int:animeId>')
def anime_by_id(animeId):
    anime = Anime.query.filter_by(id=animeId).first();
    return {'anime': anime.to_dict()}


