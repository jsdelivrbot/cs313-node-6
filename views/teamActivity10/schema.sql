CREATE TABLE person
(
    id SERIAL,
    first_name VARCHAR(30),
    last_name VARCHAR(60),
    date_of_birth DATE
);

CREATE TABLE parent_child
(
    id SERIAL,
    parent_id NUMBER FOREIGN KEY REFERENCES person(id),
    child_id NUMBER FOREIGN KEY REFERENCES person(id)
);