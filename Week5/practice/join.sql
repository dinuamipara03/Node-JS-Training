 -- 1. From the following tables write a SQL query to find the salesperson and customer who reside in the same city. Return Salesman, cust_name and city.
-- select salesman.name,customer.cust_name,customer.city from salesman,customer where salesman.city=customer.city;

-- 2. From the following tables write a SQL query to find those orders where the order amount exists between 500 and 2000. Return ord_no, purch_amt, cust_name, city.
-- select orders.ord_no, orders.purch_amt, customer.cust_name, customer.city from orders,customer where orders.customer_id=customer.customer_id  AND orders.purch_amt between 500 and 2000;

-- 3. From the following tables write a SQL query to find the salesperson(s) and the customer(s) he represents. Return Customer Name, city, Salesman, commission.
-- select customer.cust_name,customer.city,salesman.name as 'Salesman', salesman.commission from customer,salesman where salesman.salesman_id=customer.salesman_id;
-- select customer.cust_name,customer.city,salesman.name as 'Salesman', salesman.commission from salesman inner join customer on salesman.salesman_id=customer.salesman_id;

-- 4. From the following tables write a SQL query to find salespeople who received commissions of more than 12 percent from the company.Return Customer Name, customer city, Salesman, commission.  
-- select customer.cust_name,customer.city,salesman.name,salesman.commission from customer inner join salesman on salesman.salesman_id=customer.salesman_id where salesman.commission>0.12;

-- 5. From the following tables write a SQL query to locate those salespeople who do not live in the same city where their customers live and have received a commission of more than 12% from the company. Return Customer Name, customer city, Salesman, salesman city, commission. 
-- select customer.cust_name,customer.city,salesman.name,salesman.city,salesman.commission from customer inner join salesman on salesman.salesman_id=customer.salesman_id where salesman.city!=customer.city and salesman.commission>0.12;

-- 6. From the following tables write a SQL query to find the details of an order. Return ord_no, ord_date, purch_amt, Customer Name, grade, Salesman, commission.
-- select orders.ord_no,orders.ord_date,orders.purch_amt,customer.cust_name,customer.grade,salesman.name,salesman.commission from orders inner join customer on customer.customer_id=orders.customer_id inner join salesman on salesman.salesman_id=orders.salesman_id;

-- 7. Write a SQL statement to join the tables salesman, customer and orders so that the same column of each table appears once and only the relational rows are returned. 
-- select * from orders natural join customer natural join salesman;

-- 8. From the following tables write a SQL query to display the customer name, customer city, grade, salesman, salesman city. The results should be sorted by ascending customer_id.  
-- select customer.cust_name, customer.city,customer.grade,salesman.name,salesman.city from customer,salesman where customer.salesman_id=salesman.salesman_id order by customer_id;

-- 9. From the following tables write a SQL query to find those customers with a grade less than 300. Return cust_name, customer city, grade, Salesman, salesmancity. The result should be ordered by ascending customer_id. 
-- select customer.cust_name,customer.city,customer.grade,salesman.name,salesman.city from customer,salesman where customer.salesman_id=salesman.salesman_id  and customer.grade<300 order by customer_id;
-- select customer.cust_name,customer.city,customer.grade,salesman.name,salesman.city from customer left join salesman on customer.salesman_id=salesman.salesman_id  where customer.grade<300 order by customer_id;

-- 10. Write a SQL statement to make a report with customer name, city, order number, order date, and order amount in ascending order according to the order date to determine whether any of the existing customers have placed an order or not.
-- select customer.cust_name,customer.city,orders.ord_no,orders.ord_date,orders.purch_amt FROM customer LEFT JOIN orders ON customer.customer_id = orders.customer_id ORDER BY orders.ord_date;

-- 11. SQL statement to generate a report with customer name, city, order number, order date, order amount, salesperson name, and commission to determine if any of the existing customers have not placed orders or if they have placed orders through their salesman or by themselves.
-- select customer.cust_name,customer.city,orders.ord_no,orders.ord_date,orders.purch_amt,salesman.name,salesman.commission from 	customer left join salesman on customer.salesman_id=salesman.salesman_id left join orders on orders.customer_id=customer.customer_id;
