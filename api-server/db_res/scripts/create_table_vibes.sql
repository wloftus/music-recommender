CREATE TABLE vibes (
    id      SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    score   INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
);