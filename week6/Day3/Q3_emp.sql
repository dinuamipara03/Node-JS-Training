use week6_2;
-- 1. Use a window function to calculate the average salary of employees per department and rank employees within their department based on their net salary.
select e.name, e.department,s.net_salary,avg(s.base_salary) over(partition by e.department) as Average_salary,
dense_rank() over(partition by e.department order by s.net_salary desc)as Ranking from employees e left join salaries s on e.id=s.employee_id ;
/*
+-------------+------------+------------+----------------+---------+
| name        | department | net_salary | Average_salary | Ranking |
+-------------+------------+------------+----------------+---------+
| Radha Desai | HR         |   70000.98 |   65000.000000 |       1 |
| Ram Jani    | HR         |   45000.00 |   65000.000000 |       2 |
| Rahul Jani  | IT         |   75000.08 |   67333.333333 |       1 |
| Rahul Jain  | IT         |   65000.00 |   67333.333333 |       2 |
| Ram Jain    | IT         |   45000.98 |   67333.333333 |       3 |
| Rajvi Vadi  | Marketing  |   38000.00 |   40000.000000 |       1 |
+-------------+------------+------------+----------------+---------+
*/

-- 2. Use a subquery to fetch employees who received a performance rating of 5 and their total bonuses.
select distinct e.id,e.name,p.performance_score,(select sum(bonus_amount) from bonuses b where b.employee_id=e.id ) as bonus from employees e inner join performance_reviews p on p.employee_id=e.id where p.performance_score=5;
/*
+------+------------+-------------------+----------+
| id   | name       | performance_score | bonus    |
+------+------------+-------------------+----------+
|    6 | Rahul Jani |                 5 | 11000.00 |
|    3 | Rahul Jain |                 5 |  7000.00 |
|    4 | Ram Jain   |                 5 |  4000.00 |
+------+------------+-------------------+----------+
*/

-- Queries on given file:
use weeek6;
-- 1.Not applied in given file because no department column 

select distinct e.id,e.name,p.rating,(select sum(bonus_amount) from bonuses b where b.employee_id=e.id ) as bonus from employees e inner join performance_reviews p on p.employee_id=e.id where p.rating=5;
-- +------+-----------+--------+--------+
-- | id   | name      | rating | bonus  |
-- +------+-----------+--------+--------+
-- |    2 | Bob Smith |      5 | 500.00 |
-- |    4 | David Lee |      5 | 600.00 |
-- +------+-----------+--------+--------+

