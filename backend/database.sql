
CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(254) NOT NULL,
  lastname VARCHAR(254) NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  hpassword VARCHAR(254) NOT NULL
);

CREATE TABLE products (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  color varchar(255) NOT NULL,
  description varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hpassword) VALUES
("place", "holder", "place@holder.com", "placeholder"),
("lore", "M", "lorem@ipsum.com", "loremipsum"),
("john", "doe", "john@doe.com", "jhondoe" );

INSERT INTO products (title, type, color, description) 
VALUES 
("monitor", "monitors", "black", "27 pouces"), 
("computer", "electronics","grey", "hp-md-523654");

