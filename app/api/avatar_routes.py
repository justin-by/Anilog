from flask import Blueprint, request, jsonify
from app.models import Avatar, db

avatar_routes = Blueprint('avatar', __name__)

# Find avatar by userID
@avatar_routes.route('/<int:userId>')
def avatar_by_userid(userId):
    avatar = Avatar.query.filter_by(userId=userId).first()
    return {'avatar': avatar.to_dict()}