CREATE TABLE highscores
( id SERIAL
, trajectory_id NUMBER FOREIGN KEY REFERENCES trajectories(id)
, player_initials VARCHAR(3)
, score NUMBER
);

CREATE TABLE quotes
( id SERIAL
, quote_text TEXT
, quote_author TEXT
);

CREATE TABLE trajectories
( id SERIAL
, shot_angle NUMBER
, shot_velocity NUMBER
, duration NUMBER
, final_distance NUMBER
);
