DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ("stroller", "baby", "200", 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("RipStik", "toys", "50", 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("vase", "household", "20", 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("laptop", "electronics", "2400", 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Lucky Charms", "grocery", "4", 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("iPhone 7", "electronics", "800", 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("lego set", "toys", "80", 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("dress", "clothing", "40", 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("hammer", "home improvement", "20", 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("wrapping paper", "household", "8", 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("ceiling fan", "household", "180", 6);
