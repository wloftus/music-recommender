CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    TEXT NOT NULL,
    type        TEXT NOT NULL,
    profile_img TEXT NOT NULL
);