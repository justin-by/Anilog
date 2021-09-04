from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import User, db
from app.forms import UpdateUserForm

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(error)
    return errorMessages



@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:userId>', methods=["PATCH"])
@login_required
def user_settings(userId):
    form = UpdateUserForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        user = User.query.get(userId)

        user.username = form.data["username"]
        user.email = form.data["email"]
        user.password = form.data["password"]

        db.session.commit()

        return {'user': user.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
