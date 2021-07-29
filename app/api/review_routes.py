from flask import Blueprint, request, jsonify
from app.models import Anime, Review, db

review_routes = Blueprint('review', __name__)

# Find all reviews of an anime based on animeId
@review_routes.route('/anime/<int:animeId>')
def anime_reviews(animeId):
    reviews = Review.query.filter_by(animeId=animeId).all()
    return {'reviews': [review.to_dict() for review in reviews]}
