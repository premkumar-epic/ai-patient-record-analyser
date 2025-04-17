from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

diagnosis_bp = Blueprint('diagnosis', __name__)

# Simple mock AI diagnosis (replace with real ML model later)
def suggest_diagnosis(symptoms):
    if 'fever' in symptoms and 'cough' in symptoms:
        return 'Possible Influenza'
    return 'No specific diagnosis'

@diagnosis_bp.route('/suggest', methods=['POST'])
@jwt_required()
def get_diagnosis():
    data = request.get_json()
    symptoms = data.get('symptoms', [])
    diagnosis = suggest_diagnosis(symptoms)
    return jsonify({'diagnosis': diagnosis}), 200