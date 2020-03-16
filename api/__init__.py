from flask import Flask 
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .views import main
    app.register_blueprint(main)

    return app

if __name__ == "main":
    app = create_app()
    app.run(host= '0.0.0.0')