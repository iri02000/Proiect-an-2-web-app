import sqlite3


def get_connection(dbfile):
    try:
        conn = sqlite3.connect(dbfile)
        return conn
    except Exception as e:
        raise Exception(f"Failed to connect to {dbfile}. Error: {e}")


def create_user(conn, user_details):
    query = """insert into users (name, email, username, password)
        values (?, ?, ?, ?);"""
    try:
        cursor = conn.cursor()
        cursor.execute(query, user_details)
        conn.commit()
    except Exception as e:
        raise Exception(
            f"Failed to create user with details= {user_details}. Error: {e}.")


conn = get_connection(
    "C:\\Users\\ARin\\OneDrive - Romanian-American University (STUD)\\Programarea aplicatiilor Web\\Proiect-an-2-web-app\\Proiect\\b2b.db")
print(conn)

# new_user = ("name", "email", "username", "password")
# create_user(conn, new_user)
