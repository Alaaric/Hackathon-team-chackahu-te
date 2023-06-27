
CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(254) NOT NULL,
  lastname VARCHAR(254) NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  hpassword VARCHAR(254) NOT NULL
);

INSERT INTO users (firstname, lastname, email, hpassword) VALUES
("place", "holder", "place@holder.com", "placeholder"),
("lore", "M", "lorem@ipsum.com", "loremipsum"),
("john", "doe", "john@doe.com", "jhondoe" );