from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

users = {
    'admin@example.com': {'password': 'admin123', 'role': 'admin'},
    'doctor@example.com': {'password': 'doc123', 'role': 'doctor'},
    'patient@example.com': {'password': 'pat123', 'role': 'patient'}
}

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password or email not in users or users[email]['password'] != password:
        return jsonify({'message': 'Invalid credentials'}), 401
    
    access_token = create_access_token(identity={'email': email, 'role': users[email]['role']})
    return jsonify({'token': access_token, 'role': users[email]['role']}), 200