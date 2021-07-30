from flask import Blueprint, request, jsonify
from app.models import Anime, Review, db

review_routes = Blueprint('review', __name__)

# Find all reviews of an anime based on animeId
@review_routes.route('/anime/<int:animeId>')
def anime_reviews(animeId):
    reviews = Review.query.filter_by(animeId=animeId).all();
    return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route('<int:reviewId>/anime/<int:animeId>', methods=["DELETE"])
def anime_review(reviewId, animeId):
    review = Review.query.filter_by(id=reviewId).first();
    db.session.delete(review);
    db.session.commit();
    return {'reviews': review.to_dict()}
    
# @review_routes.route('<int:reviewId>/anime/<int:animeId>/', methods=["PUT"])
# def anime_review(reviewId, animeId):
#     review = Review.query.filter_by(id=reviewId).first();



