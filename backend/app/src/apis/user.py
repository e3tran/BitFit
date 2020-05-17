from flask import Blueprint, request, jsonify
from flask_cors import CORS

from ..models.user import User

user_api = Blueprint('user_api', __name__)
CORS(user_api, supports_credentials=True)


@user_api.route('/get_user', methods=['GET'])
def get_user():
    username = request.json['username']

    u = User.get_user(username)

    if not u:
        return jsonify({'reason': 'User does not exist'}), 400
    else:
        return jsonify({'reason': 'User exists', 'result': u.to_json()}), 200


@user_api.route('/create_user', methods=['POST'])
def create_user():
    username = request.json['username']
    name = request.json['name']
    email = request.json['email']
    photo = request.json['photo']

    u = User.create_user(username, name, email, photo)

    if not u:
        return jsonify({'reason': 'Username is not available'}), 400
    else:
        return jsonify({'reason': 'User created', 'result': u.to_json()}), 200


@user_api.route('/edit_user', methods=['PUT'])
def edit_user():
    username = request.json['username']
    name = request.json['name'] if 'name' in request.json else None
    email = request.json['email'] if 'email' in request.json else None
    photo = request.json['photo'] if 'photo' in request.json else None

    u = User.get_user(username)

    if not u:
        return jsonify({'reason': 'User does not exist'}), 400
    else:
        u = u.edit_user(name, email, photo)
        return jsonify({'reason': 'User edited', 'result': u.to_json()}), 200