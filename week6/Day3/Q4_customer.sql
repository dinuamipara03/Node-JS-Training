create table customers(
id serial primary key,
name varchar(100) not null,
email varchar(150) unique,
created_at timestamp default now()
);

insert into customers(name,email,created_at) values
('Anjal Soni','anju@gmail.com','2024-01-01 11:00:00'),
('Jay Jani','jay@gmail.com','2024-02-01 12:00:00'),
('Kruti Patel','kruti@gmail.com','2024-03-01 01:00:00'),
('Dhruvi Patel','dhruvi@gmail.com','2024-04-01 02:00:00'),
('Ram Jain','ram@gmail.com','2024-05-01 03:00:00'),
('Rani Vadi','rani@gmail.com','2024-06-01 04:00:00');
insert into customers(name,email,created_at) values
('Anjali Soni','anjali@gmail.com','2024-01-01 11:00:00');
create table orders(
id serial primary key,
customer_id int references customers(id),
total_amount decimal(10,2) not null,
status varchar(20) check (status in('PENDING','SHIPPED','DELIVERED','CANCELLED')),
created_at timestamp default now()
);

insert into orders(customer_id,total_amount,status,created_at) values
(2,5000,'PENDING','2024-02-02 11:00:00'),
(1,3000,'SHIPPED','2024-02-01 09:00:00'),
(3,9000,'DELIVERED','2024-04-13 12:00:00'),
(5,8000,'PENDING','2024-06-15 08:00:00'),
(4,6000,'CANCELLED','2024-05-02 06:00:00'),
(6,2000,'DELIVERED','2024-07-12 04:00:00');

create table order_items(
id serial primary key,
order_id int references orders(id),
product_name varchar(200) not null,
quantity int not null,
price_per_unit decimal(10,2) not null
);

insert into order_items(order_id,product_name,quantity,price_per_unit)values
(1,'Lipstick',3,500),
(2,'Lipbam',4,200),
(3,'Eye shadow',6,800),
(4,'Hair band',8,100),
(5,'Hair clip',10,400),
(6,'Nail polish',5,50);

create table payments(
id serial primary key,
order_id int references orders(id),
amount_paid decimal(10,2) not null,
payment_date timestamp default now()
);

insert into payments(order_id,amount_paid,payment_date) values
(3,2000,'2024-03-03 02:00:26'),
(2,5000,'2024-04-15 04:20:26'),
(5,4000,'2024-06-20 02:30:00'),
(6,6000,'2024-07-28 05:00:26');

/*
+----+--------------+------------------+---------------------+
| id | name         | email            | created_at          |
+----+--------------+------------------+---------------------+
|  1 | Anjal Soni   | anju@gmail.com   | 2024-01-01 11:00:00 |
|  2 | Jay Jani     | jay@gmail.com    | 2024-02-01 12:00:00 |
|  3 | Kruti Patel  | kruti@gmail.com  | 2024-03-01 01:00:00 |
|  4 | Dhruvi Patel | dhruvi@gmail.com | 2024-04-01 02:00:00 |
|  5 | Ram Jain     | ram@gmail.com    | 2024-05-01 03:00:00 |
|  6 | Rani Vadi    | rani@gmail.com   | 2024-06-01 04:00:00 |
+----+--------------+------------------+---------------------+

+----+-------------+--------------+-----------+---------------------+
| id | customer_id | total_amount | status    | created_at          |
+----+-------------+--------------+-----------+---------------------+
|  1 |           2 |      5000.00 | PENDING   | 2024-02-02 11:00:00 |
|  2 |           1 |      3000.00 | SHIPPED   | 2024-02-01 09:00:00 |
|  3 |           3 |      9000.00 | DELIVERED | 2024-04-13 12:00:00 |
|  4 |           5 |      8000.00 | PENDING   | 2024-06-15 08:00:00 |
|  5 |           4 |      6000.00 | CANCELLED | 2024-05-02 06:00:00 |
|  6 |           6 |      2000.00 | DELIVERED | 2024-07-12 04:00:00 |
+----+-------------+--------------+-----------+---------------------+

+----+----------+--------------+----------+----------------+
| id | order_id | product_name | quantity | price_per_unit |
+----+----------+--------------+----------+----------------+
|  1 |        1 | Lipstick     |        3 |         500.00 |
|  2 |        2 | Lipbam       |        4 |         200.00 |
|  3 |        3 | Eye shadow   |        6 |         800.00 |
|  4 |        4 | Hair band    |        8 |         100.00 |
|  5 |        5 | Hair clip    |       10 |         400.00 |
|  6 |        6 | Nail polish  |        5 |          50.00 |
+----+----------+--------------+----------+----------------+

+----+----------+-------------+---------------------+
| id | order_id | amount_paid | payment_date        |
+----+----------+-------------+---------------------+
|  1 |        3 |     2000.00 | 2024-03-03 02:00:26 |
|  2 |        2 |     5000.00 | 2024-04-15 04:20:26 |
|  3 |        5 |     4000.00 | 2024-06-20 02:30:00 |
|  4 |        6 |     6000.00 | 2024-07-28 05:00:26 |
+----+----------+-------------+---------------------+
*/

-- Find the total amount spent by each customer along with the running total across all customers (sorted by created_at).

SELECT o.customer_id,SUM(oi.quantity * oi.price_per_unit) AS total_spent,
SUM(SUM(oi.quantity * oi.price_per_unit)) OVER (ORDER BY o.created_at) AS running_total,o.created_at
FROM orders o
INNER JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.customer_id, o.created_at
ORDER BY o.created_at;
/*
+-------------+-------------+---------------+---------------------+
| customer_id | total_spent | running_total | created_at          |
+-------------+-------------+---------------+---------------------+
|           1 |      800.00 |        800.00 | 2024-02-01 09:00:00 |
|           2 |     1500.00 |       2300.00 | 2024-02-02 11:00:00 |
|           3 |     4800.00 |       7100.00 | 2024-04-13 12:00:00 |
|           4 |     4000.00 |      11100.00 | 2024-05-02 06:00:00 |
|           5 |      800.00 |      11900.00 | 2024-06-15 08:00:00 |
|           6 |      250.00 |      12150.00 | 2024-07-12 04:00:00 |
+-------------+-------------+---------------+---------------------+
*/

-- Find all customers who placed an order or made a payment but are missing one of the two.

SELECT c.id, c.name, 'Missing Payment' AS status
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
LEFT JOIN payments p ON o.id = p.order_id
WHERE p.id IS NULL
UNION
SELECT c.id, c.name, 'Missing Order' AS status
FROM customers c
LEFT JOIN payments p ON c.id = (SELECT o.customer_id FROM orders o WHERE o.id = p.order_id)
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
/*
+----+-------------+-----------------+
| id | name        | status          |
+----+-------------+-----------------+
|  2 | Jay Jani    | Missing Payment |
|  5 | Ram Jain    | Missing Payment |
|  7 | Anjali Soni | Missing Payment |
|  7 | Anjali Soni | Missing Order   |
+----+-------------+-----------------+
*/
    
-- Find customers whose total spending is higher than the average order value across all customers.

select customer_id,c.name, sum(oi.quantity * oi.price_per_unit) as total_spent
from orders o
inner join customers c on c.id=o.customer_id
inner join order_items oi on o.id=oi.order_id
group by customer_id
having sum(oi.quantity * oi.price_per_unit)>(select avg(total) from(select sum(oi.quantity * oi.price_per_unit) as total 
from orders o inner join order_items oi on o.id=oi.order_id group by o.id) as average);
/*
+-------------+--------------+-------------+
| customer_id | name         | total_spent |
+-------------+--------------+-------------+
|           3 | Kruti Patel  |     4800.00 |
|           4 | Dhruvi Patel |     4000.00 |
+-------------+--------------+-------------+
*/