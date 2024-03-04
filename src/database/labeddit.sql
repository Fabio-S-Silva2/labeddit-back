-- Active: 1703082404928@@127.0.0.1@3306
CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT(DATETIME('now', 'localtime')) NOT NULL
    );


CREATE TABLE
    posts (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        users_id TEXT NOT NULL,
        post TEXT NOT NULL,
        comments TEXT,
        created_at TEXT DEFAULT(DATETIME('now', 'localtime')) NOT NULL,
        FOREIGN KEY (users_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );
    

CREATE TABLE
    likes (
        user_id TEXT NOT NULL,
        post_id TEXT NOT NULL,
        estado REAL NOT NULL,
        liked_comment TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE
    )

   DROP TABLE likes;