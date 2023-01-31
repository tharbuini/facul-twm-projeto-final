from flask import Flask, json
from routes import urls_blueprint

app = Flask(__name__)
# register routes from urls
app.register_blueprint(urls_blueprint)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)