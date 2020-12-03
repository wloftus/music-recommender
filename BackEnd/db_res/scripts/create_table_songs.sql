CREATE TABLE songs (
    id         SERIAL PRIMARY KEY,
    name       TEXT NOT NULL,
    song_link  TEXT,
    img        TEXT,
    album_name TEXT,
    user_id    INT NOT NULL,
    UNIQUE(name),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
);