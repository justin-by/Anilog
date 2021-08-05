from flask import Blueprint, request, jsonify
from app.models import db, User, AnimeList
from flask_login import current_user
from app.forms import UpdateStatusForm

anime_list_routes = Blueprint('anime_list', __name__)

# Find all anime by status (ex: WATCHED/WATCHING/PLAN TO WATCH)
@anime_list_routes.route('/status=<string:status>')
def anime_by_status(status):
    return {'anime': [anime.to_dict() for anime in current_user.animeList if anime.status == status]}

# Find status of an anime 
@anime_list_routes.route('/<int:animeId>/status')
def anime_status(animeId):
    anime = AnimeList.query.filter_by(animeId=animeId).first();
    print(f'AAAAAAAAAAAAAAAAAAAAA- {anime}')
    return {'status': anime.to_dict()["status"]}

@anime_list_routes.route('/<int:animeId>/status/<string:status>', methods=['PATCH'])
def update_anime_status(animeId, status):

    form = UpdateStatusForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        anime = AnimeList.query.filter_by(animeId=animeId).first();

        anime.status = form.data["status"]

        db.session.commit()

        return {'status': anime.to_dict()["status"]}

