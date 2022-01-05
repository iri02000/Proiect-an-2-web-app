from flask import Flask, request
from flask_cors import CORS

from repository import create_user, get_connection

app = Flask("b2bapp")
CORS(app)

dbfile = "C:\\Users\\ARin\\OneDrive - Romanian-American University (STUD)\\Programarea aplicatiilor Web\\Proiect-an-2-web-app\\Proiect\\b2b.db"


@app.route('/users', methods=["POST"])
def users():
    user_details = request.json
    try:
        conn = get_connection(dbfile)
        details = [
            user_details.get("name", None),
            user_details.get("email", None),
            user_details.get("username", None),
            user_details.get("password", None)
        ]
        create_user(conn, details)
        conn.close()
        return '', 200
    except Exception as e:
        error = {'error': {e}}
        return error, 500


if __name__ == "__main__":
    app.run(port=3002, debug=True)
