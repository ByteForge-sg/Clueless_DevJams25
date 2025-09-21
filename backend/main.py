from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import random
import os
import uuid

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Expanded wardrobe categories
wardrobe = {
    "tops": [],
    "tshirts": [],
    "shirts": [],
    "bottoms": [],
    "shoes": [],
    "dresses": [],
    "coats": [],
    "accessories": []
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
        return jsonify({"error": f"Invalid category '{category}'"}), 400

    return jsonify({"message": "Item uploaded", "path": save_path})

# Generate random outfit
@app.route("/generate", methods=["GET"])
def generate_outfit():
    # Must always have shoes
    if not wardrobe["shoes"]:
        return jsonify({"error": "You need at least shoes uploaded"}), 400

    outfit = {}

    # Option 1: Use a dress
    if wardrobe["dresses"] and random.choice([True, False]):
        outfit["dress"] = random.choice(wardrobe["dresses"])
    else:
        # Option 2: Use top OR tshirt OR shirt
        possible_tops = []
        if wardrobe["tops"]:
            possible_tops.extend(wardrobe["tops"])
        if wardrobe["tshirts"]:
            possible_tops.extend(wardrobe["tshirts"])
        if wardrobe["shirts"]:
            possible_tops.extend(wardrobe["shirts"])

        if not (possible_tops and wardrobe["bottoms"]):
            return jsonify({"error": "Need at least one (top/tshirt/shirt) + bottom"}), 400

        outfit["top"] = random.choice(possible_tops)
        outfit["bottom"] = random.choice(wardrobe["bottoms"])

    # Shoes are always included
    outfit["shoes"] = random.choice(wardrobe["shoes"])

    # Optional add-ons
    if wardrobe["coats"] and random.choice([True, False]):
        outfit["coat"] = random.choice(wardrobe["coats"])

    if wardrobe["accessories"] and random.choice([True, False]):
        outfit["accessory"] = random.choice(wardrobe["accessories"])

    return jsonify(outfit)

# Serve uploaded files
@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory("uploads", filename)

# Future: DeepFashion integration
@app.route("/deepfashion", methods=["POST"])
def analyze_outfit():
    return jsonify({"message": "DeepFashion model not yet integrated"})

if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")