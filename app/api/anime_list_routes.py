from flask import Blueprint, request, jsonify
from app.models import db, User, AnimeList
from flask_login import current_user
from app.forms import UpdateStatusForm, AddAnimeForm, UpdateAnimeForm

anime_list_routes = Blueprint('anime_list', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(error)
    return errorMessages

# Find all anime by status (ex: WATCHED/WATCHING/PLAN TO WATCH)
@anime_list_routes.route('/status=<string:status>')
def anime_by_status(status):
    return {'anime': [anime.to_dict() for anime in current_user.animeList if anime.status == status]}

# Find status of an anime 
@anime_list_routes.route('/<int:animeId>/status')
def anime_status(animeId):
    anime = AnimeList.query.filter_by(animeId=animeId).first();
    return {'status': anime.to_dict()["status"]}

# Update list status of an anime
@anime_list_routes.route('/<int:animeId>/status/<string:status>', methods=['PATCH'])
def update_anime_status(animeId, status):

    form = UpdateStatusForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        anime = AnimeList.query.filter_by(animeId=animeId).first();

        anime.status = form.data["status"]

        db.session.commit()

        return {'status': anime.to_dict()["status"]}

# Add anime to list
@anime_list_routes.route('/<int:animeId>', methods=['POST'])
def add_anime_to_list(animeId):
    form = AddAnimeForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        anime = AnimeList(userId=current_user.id, animeId=animeId, status=form.data["status"], rating=form.data["rating"])
        db.session.add(anime)
        db.session.commit()
        return {"anime": anime.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# Update an anime in list
@anime_list_routes.route('/<int:animeListId>', methods=["PATCH"])
def update_anime(animeListId):
    form = UpdateAnimeForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        anime = AnimeList.query.filter_by(id=animeListId, userId=current_user.id).first();

        anime.status = form.data["status"]
        anime.rating = form.data["rating"]

        db.session.commit()

        return {'anime': anime.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# Delete an anime from list
@anime_list_routes.route('<int:animeListId>', methods=["DELETE"])
def anime_review(animeListId):
    anime = AnimeList.query.filter_by(id=animeListId, userId=current_user.id).first();
    db.session.delete(anime);
    db.session.commit();
    return {}

