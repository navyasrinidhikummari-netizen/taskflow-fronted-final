from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []
task_id_counter = 0

@app.route("/tasks", methods=["POST"])
def create_task():
    global task_id_counter
    data = request.get_json()
    task_name = data.get("name")

    task = {
        "id": task_id_counter,
        "name": task_name,
        "status": "waiting"
    }
    task_id_counter += 1
    tasks.append(task)

    return jsonify({"task": task})

@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify({"tasks": tasks})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)