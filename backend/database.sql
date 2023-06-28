CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO roles (role) VALUES ("admin"), ("users");

CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(254) NOT NULL,
  lastname VARCHAR(254) NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  hpassword VARCHAR(254) NOT NULL,
  role_id int NOT NULL, FOREIGN KEY (role_id) REFERENCES roles(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hpassword, role_id) VALUES
("place", "holder", "place@holder.com", "placeholder", 1),
("lore", "M", "lorem@ipsum.com", "loremipsum", 2),
("john", "doe", "john@doe.com", "jhondoe", 2);

CREATE TABLE os (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO os (name) VALUES ("Android"), ("iOs");

CREATE TABLE brands (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  brand VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO brands (brand) VALUES ("Samsung"), ("Apple"), ("Xiaomi"), ("Google"), ("Huawei"), ("Nokia"); -- add brands if needed

CREATE TABLE models (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(254) NOT NULL,
  screen_size FLOAT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO models (name, screen_size) VALUES ("model1",4.5), ("model2",5.1); -- add models & screen sizes

CREATE TABLE RAMs (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  value VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO RAMs (value) VALUES (1), (2), (4), (8), (12), (16);  

CREATE TABLE storages (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  value VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO storages (value) VALUES (16), (32), (64), (128), (256);  

CREATE TABLE states (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  state VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO states (state) VALUES ("DEEE"), ("reperable"), ("bloque"), ("reconditionable"), ("reconditionné");

CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO categories (category) VALUES ("1-HC"), ("2-C"), ("3-B"), ("4-A"), ("5-Premium");

CREATE TABLE networks (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  type VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO networks (type) VALUES ("3G"), ("LTE"), ("4G"), ("4G+"), ("5G"), ("6G");

CREATE TABLE products (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  creation_date DATE NOT NULL,
  color VARCHAR(254) NOT NULL,
  brand_id int NOT NULL, FOREIGN KEY (brand_id) REFERENCES brands(id),
  model_id int NOT NULL, FOREIGN KEY (model_id) REFERENCES models(id),
  os_id int NOT NULL, FOREIGN KEY (os_id) REFERENCES os(id),
  RAM_id int NOT NULL, FOREIGN KEY (RAM_id) REFERENCES RAMs(id),
  storage_id int NOT NULL, FOREIGN KEY (storage_id) REFERENCES storages(id),
  state_id int NOT NULL, FOREIGN KEY (state_id) REFERENCES states(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id),
  network_id int NOT NULL, FOREIGN KEY (network_id) REFERENCES networks(id),
  accessories TINYINT(1) NOT NULL,
  photo VARCHAR(254) DEFAULT NULL,
  price VARCHAR(254) NOT NULL,
  description varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- INSERT INTO products (title, type, color, description) 
-- VALUES 
-- ("monitor", "monitors", "black", "27 pouces"), 
-- ("computer", "electronics","grey", "hp-md-523654");

