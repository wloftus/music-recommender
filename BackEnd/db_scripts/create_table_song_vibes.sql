CREATE TABLE song_vibes (
    id       SERIAL PRIMARY KEY,
    song_id  INT NOT NULL,
    vibe_id  INT NOT NULL,
    user_id  INT NOT NULL,
    CONSTRAINT fk_song
        FOREIGN KEY(song_id)
            REFERENCES songs(id),
    CONSTRAINT fk_vibe
        FOREIGN KEY(vibe_id)
            REFERENCES vibes(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id),
);