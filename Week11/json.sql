-- CREATE TABLE orders (
--     ID serial NOT NULL PRIMARY KEY,
--     info json NOT NULL
-- )
-- INSERT INTO orders (info)
-- VALUES
--     (
--         '{ "customer": "Raju Kumar", "items": {"product": "coffee", "qty": 6}}'
--     )
-- SELECT * FROM orders
-- SELECT info ->> 'customer' AS customer_name
-- FROM orders
SELECT
	INFO
FROM
	ORDERS
WHERE
	INFO -> 'items' ->> 'product' = 'Diaper'