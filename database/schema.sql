DROP TABLE IF EXISTS reactions;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reaction_types;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  account_created DATE
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  pet_id INT,
  user_id INT,
  review VARCHAR,
  reaction_count INT,
  review_created DATE,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE reaction_types (
  reaction_type_id SERIAL PRIMARY KEY,
  reaction_type_name VARCHAR(31)
);

CREATE TABLE reactions (
  reaction_id SERIAL PRIMARY KEY,
  reaction_type_id INT NOT NULL,
  review_id INT NOT NULL,
  user_id INT,
  reaction_date DATE,
  FOREIGN KEY (review_id) REFERENCES reviews (review_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (reaction_type_id) REFERENCES reaction_types (reaction_type_id)
);



