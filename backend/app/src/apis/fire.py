"""
Description: Firebase routes to initalize firebase items

NOTE: Database calls should not be made in this file.

Authors: Imran
"""

# External imports

# Flask packages
from flask import Blueprint, request
from flask_cors import CORS

# Internal imports
from ..models.fire import Fire  # Fire model

# Define the user_api blueprint route for all firebase-related api calls
fire_api = Blueprint("fire_api", __name__)
CORS(fire_api, supports_credentials=True)


@fire_api.route("/create", methods=["POST"])
def initalize():
    """
    Create trophies, workouts, and body parts tables in Firebase.

    Expected data:
        None

    Expected response:
        None
    """
    # Delegate to fire model
    return Fire.create()
