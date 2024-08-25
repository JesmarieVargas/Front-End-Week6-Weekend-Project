CREATE DATABASE ReactECommWebApp;

CREATE TABLE customers (
id INT AUTO_INCREMENT PRIMARY KEY,
customer_name VARCHAR(75) NOT NULL,
email VARCHAR(250) NOT NULL UNIQUE,
phone VARCHAR(14) NOT NULL
);

CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
price FLOAT NOT NULL,
product_description VARCHAR(300) NULL
);

CREATE TABLE orders (
id INT AUTO_INCREMENT PRIMARY KEY,
date_ordered DATE NOT NULL,
customer_id INT,
FOREIGN KEY (customer_id) REFERENCES customers(id)
);

INSERT INTO customers (customer_name, email, phone)
VALUES 
	('Kasey Hess', 'k.hess@icloud.com', '876-861-1794'),
    ('Steve Morrison', 'msteve@gmail.com', '781-743-8939'),
    ('Joanna Gallagher', 'JoannaG13@yahoo.com', '858-107-1553'),
    ('Elmer Dalton', 'elmerdalton56@outlook.com', '786-763-7852');

INSERT INTO products (product_name, price, product_description)
VALUES 
    ('Flipper', '169.00', 'Flipper Zero is a portable multi-tool for pentesters and geeks in a toy-like body. It loves hacking digital stuff, such as radio protocols, access control systems, hardware, and more.'),
	('JBL Quantum 910', '209.95', 'Most powerful gaming headset.'),
    ('GTRacing', '129.99', 'GTRACING gaming chairs are designed to provide an immersive gaming experience and reduce pressure and pain.');

DROP TABLE products;