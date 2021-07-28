from flask import Blueprint, request, jsonify
from app.models import Anime, db

anime_routes = Blueprint('anime', __name__)
url = 'https://graphql.anilist.co'

# Find all anime by season (ex: WINTER/SPRING)
@anime_routes.route('/season=<string:season>')
def anime_by_season(season):
    seasonAnimes = Anime.query.filter_by(season=season.upper()).all()
    return {'anime': [seasonAnime.to_dict() for seasonAnime in seasonAnimes]}

