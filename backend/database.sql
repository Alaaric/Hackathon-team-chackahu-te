CREATE TABLE products (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  color varchar(255) NOT NULL,
  description varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO products (title, type, color, description) 
VALUES 
("monitor", "monitors", "black", "27 pouces"), 
("computer", "electronics","grey", "hp-md-523654");
