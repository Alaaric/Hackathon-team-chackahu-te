CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO roles (role) VALUES ("admin"), ("user");

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
INSERT INTO brands (brand) VALUES ("Samsung"), ("Apple"), ("Xiaomi"), ("Google"), ("Huawei"); -- add brands if needed

CREATE TABLE models (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(254) NOT NULL,
  screen_size FLOAT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO models (name, screen_size) VALUES 
("Galaxy S9", 5.8), 
("Galaxy S10", 5.8), 
("Galaxy S20", 6.5), 
("Galaxy S21", 6.2), 
("Galaxy A40", 5.9), 
("Galaxy A12", 6.5), 
("Galaxy A70", 6.7),  
("Galaxy Note8", 6.3), 
("Galaxy Note9", 6.4), 
("Galaxy Note10", 6.3), 
("iPhone 13", 6.1); -- add models & screen sizes

CREATE TABLE RAMs (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  value VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO RAMs (value) VALUES (1), (2), (4), (8), (12), (16);  

CREATE TABLE storages (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  value VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO storages (value) VALUES (16), (32), (64), (128), (256), (512);  

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


INSERT INTO products (creation_date, color, brand_id, model_id, os_id, RAM_id, storage_id,
state_id, category_id, network_id, accessories, photo, price, description) 
VALUES  
('2023-06-28 13:59:00.000000', "bleu", 1, 1, 1, 4, 5, 4, 4, 5, 0, "./assets/images/galaxys9.jpg", "139.00", "description ..."), 
('2023-06-28 14:09:00.000000', "rose", 1, 2, 1, 4, 5, 4, 4, 5, 1, "./assets/images/galaxys20.jpg", "251.00", "description ..."), 
('2023-06-28 14:14:00.000000', "Violet fantôme", 1, 4, 1, 4, 5, 4, 4, 5, 1, "./assets/images/galaxys21.jpg", "309.00", "description ..."), 
('2023-06-28 14:18:00.000000', "orange", 1, 5, 1, 4, 5, 4, 4, 5, 1,"./assets/images/galaxysA40.jpg", "149.00", "description ..."),   
('2023-06-28 14:39:00.000000', "Argent stellaire", 1, 10, 1, 4, 5, 4, 4, 5, 1, "./assets/images/galaxyNote10.jpg", "268", "description ..."), 
('2023-06-28 14:45:00.000000', "Bleu", 2, 11, 2, 3, 4, 4, 4, 5, 1, "./assets/images/iphone13.jpg", "599.00", "description ...");

