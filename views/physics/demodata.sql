INSERT INTO trajectories
( shot_angle
, shot_velocity
, duration
, final_distance
)
VALUES
( 30
, 100
, 12
, 300
);

INSERT INTO highscores
( trajectory_id
, player_initials
)
VALUES
((SELECT currval('trajectories_id_seq'))
, 'DMC');

INSERT INTO trajectories
( shot_angle
, shot_velocity
, duration
, final_distance
)
VALUES
( 31
, 120
, 12
, 310
);

INSERT INTO highscores
( trajectory_id
, player_initials
)
VALUES
((SELECT currval('trajectories_id_seq'))
, 'ABC');

INSERT INTO trajectories
( shot_angle
, shot_velocity
, duration
, final_distance
)
VALUES
( 32
, 100
, 12
, 330
);

INSERT INTO highscores
( trajectory_id
, player_initials
)
VALUES
((SELECT currval('trajectories_id_seq'))
, 'KMH');

INSERT INTO trajectories
( shot_angle
, shot_velocity
, duration
, final_distance
)
VALUES
( 34
, 120
, 12
, 320
);

INSERT INTO highscores
( trajectory_id
, player_initials
)
VALUES
((SELECT currval('trajectories_id_seq'))
, 'GMF');