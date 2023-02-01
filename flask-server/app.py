from flask import Flask, json
from routes import urls_blueprint
from flask_cors import CORS

app = Flask(__name__)
# register routes from urls
app.register_blueprint(urls_blueprint)
CORS(app, resources={r"/*": {"origins": "*"}})


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)