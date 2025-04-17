from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from auth import auth_bp
from diagnosis import diagnosis_bp
import os
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
load_dotenv()
CORS(app, resources={r"/auth/*": {"origins": "https://patient-lf4h0fgap-worldinsidethepcmirrorbot-gmailcoms-projects.vercel.app"}})

app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'password')
jwt = JWTManager(app)

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(diagnosis_bp, url_prefix='/diagnosis')

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.getenv('PORT', 5000)))