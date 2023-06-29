-- Active: 1682342351805@@127.0.0.1@3306@chackahuete_db
-- creation of users and roles tables --
CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO roles (role) VALUES ("user"), ("admin");

CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(254) NOT NULL,
  lastname VARCHAR(254) NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  hpassword VARCHAR(254) NOT NULL,
  role_id int NOT NULL, FOREIGN KEY (role_id) REFERENCES roles(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hpassword, role_id) VALUES
("place", "holder", "place@holder.com", "$argon2id$v=19$m=65536,t=5,p=1$a+1yTad7yZYtGj8EB8GnjA$IoAbgHvfYqs8gwRj1lsK1x+usSvLfISlbDyiujt5gBA", 2),
("john", "doe", "johny@holder.com", " $argon2id$v=19$m=65536,t=5,p=1$ceq4G57NrfQHLSjpz7YBMA$T+Y3xLZ65+Oo+iHnpXhSKLKaJGMWM7Q/tK9C+J5Le4E", 1),
("jane", "doe", "jane@holder.com", "$argon2id$v=19$m=65536,t=5,p=1$+ZxkXZrUaXNk5yX2B+e6mg$1gnc8GAK+SN7F6ku+4UoAPHEv87NzL5SGwuF7iYUoUg", 1);

-- creation of ref products info tables --
CREATE TABLE os (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO os (name) VALUES ("Android"), ("iOs");

CREATE TABLE brands (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  brand VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO brands (brand) VALUES ("Samsung"), ("Apple"), ("Xiaomi"), ("Huawei");

CREATE TABLE models (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(254) NOT NULL,
  screen_size FLOAT NOT NULL,
  network VARCHAR(254) NOT NULL,
  calculator_value INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO models (name, screen_size, network, calculator_value) VALUES 
("Galaxy S9", 5.8, "5G",110), 
("Galaxy S10", 5.8, "5G",120), 
("Galaxy S20", 6.5, "5G",130), 
("Galaxy S21", 6.2, "5G",140), 
("Galaxy A40", 5.9, "5G",90), 
("Galaxy A12", 6.5, "5G",100), 
("Galaxy A70", 6.7, "5G",110),  
("Galaxy Note8", 6.3, "5G",140), 
("Galaxy Note9", 6.4, "5G",150), 
("Galaxy Note10", 6.3, "5G",160), 
("iPhone 13", 6.1, "5G",150);

CREATE TABLE RAMs (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  value INT NOT NULL,
  calculator_value INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO RAMs (value, calculator_value) VALUES (1,20), (2,30), (3,40), (4,50), (8,70), (12,90), (16,110);  

CREATE TABLE storages (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  value INT NOT NULL,
  calculator_value INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO storages (value, calculator_value) VALUES (16,20), (32,30), (64,40), (128,60), (256,80), (512,100), (1024, 120);  

CREATE TABLE states (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  state VARCHAR(254) NOT NULL,
  ponderation FLOAT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO states (state, ponderation) VALUES ("Bon état", 0.5 ), ("Très bon état", 0.75 ), ("Parfait état", 0.90 );

CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category VARCHAR(254) NOT NULL,
  min_value INT NOT NULL,
  max_value INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO categories (category, min_value, max_value) VALUES ("HC", 0, 89), ("C", 90, 164), ("B", 165, 254), ("A", 255, 375), ("Premium",375, 1000);

CREATE TABLE locations (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  location VARCHAR(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO locations (location) VALUES ("Paris"), ("Essone"), ("Créteil"), ("Saint Denis"), ("Toulouse"),
("Lille"), ("Roubaix"), ("Pas de Calais"), ("Aisne"), ("Strasbourg"), ("Lyon"), ("Grenoble"), ("Indre"),
("Loiret"), ("Bordeaux"), ("Marseille"), ("Hautes Alpes");

CREATE TABLE ref_products (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  brand_id int NOT NULL, FOREIGN KEY (brand_id) REFERENCES brands(id),
  model_id int NOT NULL, FOREIGN KEY (model_id) REFERENCES models(id),
  os_id int NOT NULL, FOREIGN KEY (os_id) REFERENCES os(id),
  RAM_id int NOT NULL, FOREIGN KEY (RAM_id) REFERENCES RAMs(id),
  storage_id int NOT NULL, FOREIGN KEY (storage_id) REFERENCES storages(id),
  image VARCHAR(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO ref_products (brand_id, model_id, os_id, RAM_id, storage_id, image) 
VALUES  
(1, 1, 1, 3, 3, "/assets/galaxys9.jpg"), 
(1, 2, 1, 4, 4, "/assets/galaxys20.jpg"), 
(1, 4, 1, 4, 4, "/assets/galaxys21.jpg"), 
(1, 5, 1, 3, 3,"/assets/galaxyA40.jpg"),   
(1, 10, 1, 3, 4, "/assets/galaxyNote10.jpg"),
(2, 11, 2, 3, 3, "/assets/iphone13.jpg");

-- creation of stock products info tables --
CREATE TABLE stock_products (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id),
  creation_date DATE NOT NULL,
  color VARCHAR(254) NOT NULL,
  brand_id int NOT NULL, FOREIGN KEY (brand_id) REFERENCES brands(id),
  model_id int NOT NULL, FOREIGN KEY (model_id) REFERENCES models(id),
  os_id int NOT NULL, FOREIGN KEY (os_id) REFERENCES os(id),
  RAM_id int NOT NULL, FOREIGN KEY (RAM_id) REFERENCES RAMs(id),
  storage_id int NOT NULL, FOREIGN KEY (storage_id) REFERENCES storages(id),
  state_id int NOT NULL, FOREIGN KEY (state_id) REFERENCES states(id),
  category_id int NOT NULL, FOREIGN KEY (category_id) REFERENCES categories(id),
  accessories TINYINT(1) NOT NULL,
  photo VARCHAR(254) DEFAULT NULL,
  price FLOAT NOT NULL,
  location_id int NOT NULL, FOREIGN KEY (location_id) REFERENCES locations(id),
  description varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO stock_products (user_id, creation_date, color, brand_id, model_id, os_id, RAM_id, storage_id,
state_id, category_id, accessories, photo, price, location_id, description) 
VALUES  
(1, '2023-06-28T13:59:00', "bleu", 1, 1, 1, 4, 5, 1, 4, 0, "/assets/galaxys9.jpg", 27.00, 1, "description ..."), 
(1, '2023-06-28T14:09:00', "rose", 1, 2, 1, 4, 5, 2, 4, 1, "/assets/galaxys20.jpg", 25.00, 2, "description ..."), 
(1, '2023-06-28T14:14:00', "Violet fantôme", 1, 4, 1, 4, 5, 3, 4, 1, "/assets/galaxys21.jpg", 48.00, 5,"description ..."), 
(1, '2023-06-28T14:18:00', "orange", 1, 5, 1, 4, 5, 1, 4, 1, "/assets/galaxyA40.jpg", 25.00, 8, "description ..."),   
(1, '2023-06-28T14:39:00', "Argent stellaire", 1, 10, 1, 4, 5, 2, 4, 1, "/assets/galaxyNote10.jpg", 37.00, 1, "description ..."), 
(1, '2023-06-28T14:45:00', "Bleu", 2, 11, 2, 3, 4, 3, 4, 1, "/assets/iphone13.jpg", 50.00, 5, "description ...");