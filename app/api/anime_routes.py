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

@anime_routes.route('', methods=['PATCH'])
def filter_anime():

    allAnime = Anime.query.all();

    resultAnime = []
    if allAnime:
        if 'title' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.title.startswith(request.json['title'])])
        if 'title' in request.json and 'year' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.title.startswith(request.json['title']) if anime.year == request.json['year']])

        # if 'year' in request.json:
        #     resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year']])

        # if 'genre' in request.json:
        #     allAnime = allAnime + [anime.to_dict() for anime in allAnime if anime.title == request.json['title']]

        # if 'status' in request.json:
        #     resultAnime = ([anime.to_dict() for anime in allAnime if anime.status == request.json['year']])

    return {'animes': resultAnime}



