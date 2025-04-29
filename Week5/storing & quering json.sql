-- CREATE TABLE products (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255),
--     details JSON
-- );

-- INSERT INTO products (name, details) VALUES (
--     'Laptop',
--     '{ "model": "ProBook", "price": 1200, "specs": { "ram": "16GB", "storage": "512GB" } }'
-- );
-- INSERT INTO products (name, details) VALUES(
--     'Mobile',
--     '{ "model": "Y12G", "price": 12000, "specs": { "ram": "4GB", "storage": "128GB" } }'
-- );
-- INSERT INTO products (name, details) VALUES(
--     'Iphone',
--     '{ "model": "16Pro", "price": 80000, "specs": { "ram": "8GB", "storage": "512GB" } }'
-- ), 
-- (
--     'PC',
--     '{ "model": "i3", "price": 24000, "specs": { "ram": "8GB", "storage": "512GB" } }'
-- );


-- delete from products where id=4;
-- delete from products where id>4;

SELECT
    id,
    name,
    JSON_EXTRACT(details, '$.model') AS model,
    JSON_EXTRACT(details, '$.price') AS price,
    JSON_EXTRACT(details, '$.specs.ram') AS ram,
    JSON_EXTRACT(details, '$.specs.storage') AS storage
FROM
    products;
