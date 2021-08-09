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
        ## Checking default which is just year
        if 'year' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year']])

        ## Checking all possible (2) combinations with year
        if 'year' in request.json and 'title' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if anime.title.startswith(request.json['title'])])
        if 'year' in request.json and 'genre' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if request.json['genre'] in anime.genres])
        if 'year' in request.json and 'season' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if anime.season == request.json['season']])

        ## Checking all possible (3) combinations with year
        if 'year' in request.json and 'title' in request.json and 'genre' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if anime.title.startswith(request.json['title']) if request.json['genre'] in anime.genres])
        if 'year' in request.json and 'title' in request.json and 'season' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if anime.title.startswith(request.json['title']) if anime.season == request.json['season']])
        if 'year' in request.json and 'genre' in request.json and 'season' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if request.json['genre'] in anime.genres if anime.season == request.json['season']])

        ## Checking all marked (4) combinations with yea

        if 'year' in request.json and 'title' in request.json and 'genre' in request.json and 'season' in request.json:
            resultAnime = ([anime.to_dict() for anime in allAnime if anime.year == request.json['year'] if anime.title.startswith(request.json['title']) if request.json['genre'] in anime.genres if anime.season == request.json['season']])
            
    return {'animes': resultAnime}



