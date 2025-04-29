create database week6_5;
use week6_5;

create table users(
id serial primary key,
name varchar(100),
email varchar(150) unique,
registration_date date,
account_status varchar(20) check (account_status in ('Active','Inactive'))
);

create table products(
id serial primary key,
name varchar(100),
category varchar(100),
price decimal(10,2) check (price>0)
);

create table orders (
id serial primary key,
user_id int references users(id),
total_amount decimal(10,2),
order_date date,
status varchar(100) check (status in('Pending','Shipped','Delivered'))
);

create table order_items(
id serial primary key,
order_id int references orders(id),
product_id int references products(id),
quantity int check(quantity > 0)
);

create table payments(
id serial primary key,
order_id int references orders(id),
amount decimal(10,2),
payment_date date,
status varchar(100) check(status in('Paid','Failed'))
);

-- Perform CRUD Operations: Insert users, products, orders, and payments

insert into users(name,email,registration_date,account_status)values
('Ram Jani','ram@gmail.com','2022-03-03','Active'),
('Radha Jani','radha@gmail.com','2022-12-12','Inactive'),
('Shyam Vadi','shyam@gmail.com','2023-04-05','Active'),
('Shreya Jain','shreya@gmail.com','2023-10-03','Inactive'),
('Sweta Thummer','sweta@gmail.com','2024-08-03','Active'),
('Ram Pal','ramp@gmail.com','2024-12-15','Inactive'),
('Jensi Patel','jensi@gmail.com','2025-10-15','Active'),
('Shruti Pal','shruti@gmail.com','2025-08-10','Inactive'),
('Roshi Sharma','roshi@gmail.com','2025-05-03','Active');

insert into products(name,category,price)values
('Cup','Kitchen',100),
('Spoon','Kitchen',50),
('Lipstick','Beauty',200),
('Nail polish','Beauty',100),
('Wallpaper','Home',500),
('Sofa','Home',5000),
('TV','Electric',10000),
('AC','Electric',20000),
('Stove','Kitchen',3000);

insert into orders(user_id,total_amount,order_date,status)values
(1,5000,'2022-05-05','Pending'),
(2,2000,'2022-06-01','Pending'),
(3,5000,'2023-07-10','Pending'),
(4,3000,'2023-08-05','Shipped'),
(5,6000,'2024-09-12','Shipped'),
(6,25000,'2024-10-05','Shipped'),
(8,10000,'2025-11-05','Delivered');
insert into orders(user_id,total_amount,order_date,status)values
(1,7000,'2022-06-05','Pending'),
(2,8000,'2022-08-01','Pending');
insert into order_items(order_id,product_id,quantity)values
(1,1,10),
(3,2,10),
(5,3,5),
(4,5,7),
(2,7,6),
(6,8,2),
(8,4,1);

insert into payments(order_id,amount,payment_date,status)values
(1,20000,'2022-06-12','Paid'),
(2,30000,'2022-06-21','Failed'),
(3,2000,'2023-08-15','Paid'),
(4,5000,'2023-09-20','Failed'),
(5,15000,'2024-10-25','Paid'),
(6,35000,'2024-11-30','Failed'),
(8,20000,'2025-12-29','Paid');


INSERT INTO orders (user_id, total_amount, order_date, status) VALUES
(7, 500, '2025-03-10', 'Pending'),
(9, 1000, '2025-03-11', 'Shipped');


INSERT INTO payments (order_id, amount, payment_date, status) VALUES
(16, 1000, '2025-03-11', 'Paid'); -- Only order 2 is paid

-- Update the order status from pending to shipped
update orders set status='Shipped' where status='Pending';

-- Delete products that haven’t been sold in the last 6 months
delete from products where id not in 
(select oi.product_id from order_items oi join orders o on o.id=oi.order_id where order_date<date_sub(now(),interval 6 month));

-- Select all orders with their respective users
select u.name,o.id as order_id,o.total_amount from orders o join users u on u.id=o.user_id;


--  Bulk Operations
-- Insert multiple users and orders in a single query : (Done in above insertion)
-- Delete all orders older than 1 year in bulk
delete from orders where order_date<date_sub(now(),interval 1 year);


--  Aggregation, Pagination, and Filtering
-- Get the total revenue for the last 3 months
select sum(amount) as revenue from payments where payment_date>=date_sub(now(),interval 3 month);

-- List top 5 selling products with LIMIT
select p.name, sum(oi.quantity) as total_sold from products p 
join order_items oi on p.id=oi.product_id group by p.name order by total_sold desc limit 5;

-- Show users who spent more than $1000
select u.name,sum(o.total_amount) as total_spent from users u 
join orders o on o.user_id=u.id group by u.id having total_spent>1000;

-- Find the average order value per user
select u.id, u.name,sum(o.total_amount) as total,avg(o.total_amount) as average from users u 
join orders o on u.id=o.user_id group by u.id;


--  Joins (INNER, LEFT, RIGHT, FULL)
-- Get all orders with product details (INNER JOIN)
select o.id as order_id,p.name as product_name,oi.quantity from orders o 
inner join order_items oi on oi.order_id=o.id
inner join products p on oi.product_id=p.id;

-- Show users who haven’t placed any orders (LEFT JOIN)
select u.name from users u left join orders o on o.user_id=u.id where o.id is null;


--  Subqueries
-- Get users who have placed more than 3 orders
select name from users where id in(select user_id from orders group by user_id having count(id)>3);

-- Find the most expensive product ever sold
select name from products where price =(select max(price) from products);


--  Date Manipulation & Report Generation
-- Find total sales per month for the last year
select order_date, sum(total_amount) as sales from orders where order_date>=date_sub(now(),interval 1 year) group by order_date;
select monthname(order_date) as month, sum(total_amount) as sales from orders where order_date>=date_sub(now(),interval 1 year) group by month;
select date_format(order_date,'%m') as month, sum(total_amount) as sales from orders where order_date>=date_sub(now(),interval 1 year) group by month;

-- Get the first and last sale date per user
select user_id,min(order_date) as first,max(order_date) as last from orders group by user_id;


-- UNION & UNION ALL
-- Show a combined list of paid & unpaid orders
select o.user_id,p.status from orders o 
join payments p on o.id=p.order_id where p.status='Paid'
union all
select o.user_id,'Unpaid' as status from orders o 
left join payments p on o.id=p.order_id where p.order_id is null;

-- Display users who either placed an order or made a payment
select u.name,o.status from orders o join users u on u.id=o.user_id
union -- only one time
select u.name,p.status from payments p join orders o on p.order_id=o.id join users u on u.id=o.user_id;

select u.name,o.status from orders o join users u on u.id=o.user_id
union all -- all
select u.name,p.status from payments p join orders o on p.order_id=o.id join users u on u.id=o.user_id;


--  Indexing, Column Concatenation, If/Case Handling
-- Add an index on email for faster user search
create index idx_users_email on users(email);
 
-- Show orders in format: "Order #123 - Delivered"
select concat('Order #',id,' - ',status) as order_with_status from orders;

-- Show "VIP" for users spending over $5000, else "Regular"
select id,name,
case
when(select sum(total_amount)from orders where orders.user_id=users.id)>5000 then 'VIP'
else 'Regular'
end as user
from users; 
