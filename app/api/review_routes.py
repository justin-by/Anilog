from flask import Blueprint, request, jsonify
from app.models import Anime, Review, db
from app.forms import ReviewForm, UpdateReviewForm
from flask_login import login_required, current_user

review_routes = Blueprint('review', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(error)
    return errorMessages

# Find all reviews of an anime based on animeId
@review_routes.route('/anime/<int:animeId>')
def anime_reviews(animeId):
    reviews = Review.query.filter_by(animeId=animeId).all();
    return {'reviews': [review.to_dict() for review in reviews]}



# Delete review based on review's ID
@review_routes.route('<int:reviewId>/anime/<int:animeId>', methods=["DELETE"])
def anime_review(reviewId, animeId):
    review = Review.query.filter_by(id=reviewId).first();
    db.session.delete(review);
    db.session.commit();
    return {}


# Create a review    
@review_routes.route('/anime/<int:animeId>', methods=["POST"])
@login_required
def create_review(animeId):
    print('Hello 222222')
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        review = Review(userId=current_user.id, animeId=animeId, content=form.data["content"], rating=form.data["rating"])
        db.session.add(review)
        db.session.commit()
        return {"review": review.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# Update a review
@review_routes.route('<int:reviewId>/anime/<int:animeId>', methods=["PATCH"])
def update_review(reviewId, animeId):
    form = UpdateReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        review = Review.query.filter_by(id=reviewId).first()

        review.content = form.data["content"]
        review.rating = form.data["rating"]

        db.session.commit()

        return {'review': review.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# @review_routes.route('<int:reviewId>/anime/<int:animeId>/', methods=["PUT"])
# def anime_review(reviewId, animeId):
#     review = Review.query.filter_by(id=reviewId).first();



