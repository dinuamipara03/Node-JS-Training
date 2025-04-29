use week6_2;
-- Get employees who took unpaid leave
select e.name,l.leave_type,l.leave_start from employees e inner join leaves l on e.id=l.employee_id where leave_type='UNPAID'; 
/*
+------------+------------+-------------+
| name       | leave_type | leave_start |
+------------+------------+-------------+
| Rahul Jain | UNPAID     | 2024-10-12  |
| Rahul Jani | UNPAID     | 2025-09-15  |
+------------+------------+-------------+
*/

-- Get top 5 performers based on performance reviews
select e.id,e.name,p.performance_score from employees e inner join performance_reviews p on p.employee_id=e.id order by performance_score desc limit 5;
/*
+----+-------------+-------------------+
| id | name        | performance_score |
+----+-------------+-------------------+
|  2 | Radha Desai |                 9 |
|  6 | Rahul Jani  |                 8 |
|  5 | Rajvi Vadi  |                 7 |
|  3 | Rahul Jain  |                 6 |
|  4 | Ram Jain    |                 4 |
+----+-------------+-------------------+
*/

INSERT INTO bonuses(employee_id,bonus_amount,bonus_reason,bonus_date) VALUES
(4,'2000','holi','2025-03-05'),
(5,'5000','holi','2025-03-10'),
(6,'2000','holi','2025-03-15');

-- Get employees who got a bonus this month
select e.id,e.name,b.bonus_amount,b.bonus_date from employees e 
inner join bonuses b on b.employee_id=e.id where extract(month from b.bonus_date)=extract(month from curdate()) and extract(year from b.bonus_date)=extract(year from curdate());
/*
+----+------------+--------------+------------+
| id | name       | bonus_amount | bonus_date |
+----+------------+--------------+------------+
|  4 | Ram Jain   |      2000.00 | 2025-03-05 |
|  5 | Rajvi Vadi |      5000.00 | 2025-03-10 |
|  6 | Rahul Jani |      2000.00 | 2025-03-15 |
+----+------------+--------------+------------+
*/



















