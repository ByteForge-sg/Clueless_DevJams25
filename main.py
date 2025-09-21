from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import os
import uuid

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Example wardrobe storage (later replace with DB)
wardrobe = {
    "tops": [],   
    "bottoms": [],
    "shoes": []
}

# Home route
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Outfit Generator Backend is running!"})

# Upload clothing item
@app.route("/upload", methods=["POST"])
def upload_item():
    category = request.form.get("category")
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files["file"]
    os.makedirs("uploads", exist_ok=True)
    filename = f"{uuid.uuid4().hex}_{file.filename}"
    save_path = os.path.join("uploads", filename)
    file.save(save_path)

    # Store metadata in wardrobe
    if category in wardrobe:
        wardrobe[category].append(save_path)
    else:
        wardrobe[category] = [save_path]

    return jsonify({"message": "Item uploaded", "path": save_path})

# Generate random outfit
@app.route("/generate", methods=["GET"])
def generate_outfit():
    if not (wardrobe["tops"] and wardrobe["bottoms"] and wardrobe["shoes"]):
        return jsonify({"error": "Not enough items to generate outfit"}), 400
    
    outfit = {
        "top": random.choice(wardrobe["tops"]),
        "bottom": random.choice(wardrobe["bottoms"]),
        "shoes": random.choice(wardrobe["shoes"])
    }
    return jsonify(outfit)

# Future: DeepFashion integration
@app.route("/deepfashion", methods=["POST"])
def analyze_outfit():
    # Placeholder: Later load a pretrained model
    # Example: use TorchVision with DeepFashion dataset
    return jsonify({"message": "DeepFashion model not yet integrated"})

if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")