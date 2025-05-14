-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     categories TEXT[],
--     units_sold INTEGER[][]
-- );

-- INSERT INTO products (name, categories, units_sold)
-- VALUES
--     ('Laptop', '{"Electronics","Computer","Office"}', '{{3200, 3300, 3400, 3500}, {3600, 3700, 3800, 3900}}'),
--     ('Headphones', '{"Electronics","Audio"}', '{{2400, 2500, 2600, 2700}, {2800, 2900, 3000, 3100}}'),
--     ('Table', '{"Furniture","Office"}', '{{900, 950, 1000, 1050}, {1100, 1150, 1200, 1250}}'),
--     ('Keyboard', '{"Electronics","Accessories"}', '{{4100, 4200, 4300, 4400}, {4500, 4600, 4700, 4800}}');

-- SELECT name, categories
-- FROM products
-- WHERE 'Electronics' = ANY (categories);

-- SELECT name, categories[1] AS first_category
-- FROM products;

-- SELECT name, categories[1:3] AS first_three_categories
-- FROM products;

-- UPDATE products
-- SET categories = array_replace(categories, 'Audio', 'Sound')
-- WHERE 'Audio' = ANY (categories)
-- RETURNING *;

WITH table_units AS (
  SELECT name, unnest(units_sold) AS total_units_sold
  FROM products
)
SELECT name, sum(total_units_sold)
FROM table_units
GROUP BY name;