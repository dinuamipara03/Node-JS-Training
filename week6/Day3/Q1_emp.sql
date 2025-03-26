use week6_2;
create table employees(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
department VARCHAR(50) NOT NULL,
position VARCHAR(50) NOT NULL,
joining_date DATE NOT NULL,
deleted_at TIMESTAMP NULL
);

INSERT INTO employees(name,department,position,joining_date,deleted_at) VALUES
('Ram Jani','HR','Manager','2022-01-01',null),
('Radha Desai','HR','Manager','2023-01-01',null),
('Rahul Jain','IT','Senior Developer','2022-05-01',null),
('Ram Jain','IT','Junior Developer','2022-01-05','2023-02-03 12:00:00'),
('Rajvi Vadi','Marketing','Executive','2023-02-01','2025-02-02 11:00:35'),
('Ram Jani','IT','Project Leader','2024-01-01',null);

/*
+----+-------------+------------+------------------+--------------+---------------------+
| id | name        | department | position         | joining_date | deleted_at          |
+----+-------------+------------+------------------+--------------+---------------------+
|  1 | Ram Jani    | HR         | Manager          | 2022-01-01   | NULL                |
|  2 | Radha Desai | HR         | Manager          | 2023-01-01   | NULL                |
|  3 | Rahul Jain  | IT         | Senior Developer | 2022-05-01   | NULL                |
|  4 | Ram Jain    | IT         | Junior Developer | 2022-01-05   | 2023-02-03 12:00:00 |
|  5 | Rajvi Vadi  | Marketing  | Executive        | 2023-02-01   | 2025-02-02 11:00:35 |
|  6 | Rahul Jani  | IT         | Project Leader   | 2024-01-01   | NULL                |
+----+-------------+------------+------------------+--------------+---------------------+
*/
update employees set name='Rahul Jani' where id=6;
CREATE TABLE salaries(
id SERIAL PRIMARY KEY,
employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
base_salary DECIMAL(10,2) NOT NULL,
pay_date DATE NOT NULL,
net_salary DECIMAL(10,2)
);

INSERT INTO salaries(employee_id,base_salary,pay_date,net_salary) VALUES
(2,80000,'2023-02-15',70000.98),
(1,50000,'2022-02-15',45000),
(4,50000,'2022-02-20',45000.98),
(6,82000,'2024-02-15',75000.08),
(5,40000,'2023-03-15',38000),
(3,70000,'2022-06-15',65000),
(2,80000,'2023-03-15',70000.98);

/*
+----+-------------+-------------+------------+------------+
| id | employee_id | base_salary | pay_date   | net_salary |
+----+-------------+-------------+------------+------------+
|  1 |           2 |    80000.00 | 2023-02-15 |   70000.98 |
|  2 |           1 |    50000.00 | 2022-02-15 |   45000.00 |
|  3 |           4 |    50000.00 | 2022-02-20 |   45000.98 |
|  4 |           6 |    82000.00 | 2024-02-15 |   75000.08 |
|  5 |           5 |    40000.00 | 2023-03-15 |   38000.00 |
|  6 |           3 |    70000.00 | 2022-06-15 |   65000.00 |
+----+-------------+-------------+------------+------------+
*/

CREATE TABLE bonuses(
id SERIAL PRIMARY KEY,
employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
bonus_amount DECIMAL(10,2) NOT NULL,
bonus_reason TEXT NOT NULL,
bonus_date DATE NOT NULL
);

INSERT INTO bonuses(employee_id,bonus_amount,bonus_reason,bonus_date) VALUES
(1,'2000','Diwali','2024-05-05'),
(2,'5000','Holi','2024-05-05'),
(3,'7000','Good Work','2024-05-05'),
(4,'2000','Good Work','2024-05-05'),
(5,'3000','Yearly Bonus','2024-05-05'),
(6,'9000','Yearly Bonus','2024-05-05');
INSERT INTO bonuses(employee_id,bonus_amount,bonus_reason,bonus_date) VALUES
(2,'2000','holi','2025-05-05');

/*
+----+-------------+--------------+--------------+------------+
| id | employee_id | bonus_amount | bonus_reason | bonus_date |
+----+-------------+--------------+--------------+------------+
|  1 |           1 |      2000.00 | Diwali       | 2024-05-05 |
|  2 |           2 |      5000.00 | Holi         | 2024-05-05 |
|  3 |           3 |      7000.00 | Good Work    | 2024-05-05 |
|  4 |           4 |      2000.00 | Good Work    | 2024-05-05 |
|  5 |           5 |      3000.00 | Yearly Bonus | 2024-05-05 |
|  6 |           6 |      9000.00 | Yearly Bonus | 2024-05-05 |
+----+-------------+--------------+--------------+------------+
*/

CREATE TABLE deductions(
id SERIAL PRIMARY KEY,
employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
deduction_amount DECIMAL(10,2) NOT NULL,
deduction_reason TEXT NOT NULL,
deduction_date DATE NOT NULL
);

INSERT INTO deductions(employee_id,deduction_amount,deduction_reason,deduction_date) VALUES
(2,5000,'Leave','2025-01-06'),
(4,2000,'Leave','2023-02-09'),
(5,3000,'Damaged goods','2025-02-06'),
(1,5000,'Damaged goods','2024-05-10');
INSERT INTO deductions(employee_id,deduction_amount,deduction_reason,deduction_date) VALUES
(3,5000,'Other','2025-05-06');
/*
+----+-------------+------------------+------------------+----------------+
| id | employee_id | deduction_amount | deduction_reason | deduction_date |
+----+-------------+------------------+------------------+----------------+
|  1 |           2 |          5000.00 | Leave            | 2025-01-06     |
|  2 |           4 |          2000.00 | Leave            | 2023-02-09     |
|  3 |           5 |          3000.00 | Damaged goods    | 2025-02-06     |
|  4 |           1 |          5000.00 | Damaged goods    | 2024-05-10     |
+----+-------------+------------------+------------------+----------------+
*/

CREATE TABLE leaves(
id SERIAL PRIMARY KEY,
employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
leave_type VARCHAR(20) CHECK(leave_type IN ('SICK','VACATION','UNPAID')),
leave_start DATE NOT NULL,
leave_end DATE NOT NULL,
approved_by INT REFERENCES employees(id) ON DELETE CASCADE
);

INSERT INTO leaves(employee_id,leave_type,leave_start,leave_end,approved_by) VALUES
(1,'SICK','2023-09-12','2023-09-15',1),
(2,'VACATION','2023-11-01','2023-11-15',2),
(3,'UNPAID','2024-10-12','2024-10-14',2),
(5,'VACATION','2024-10-24','2024-11-24',1),
(6,'UNPAID','2025-09-15','2025-09-20',2),
(4,'SICK','2025-12-22','2025-12-30',1);

/*
+----+-------------+------------+-------------+------------+-------------+
| id | employee_id | leave_type | leave_start | leave_end  | approved_by |
+----+-------------+------------+-------------+------------+-------------+
|  1 |           1 | SICK       | 2023-09-12  | 2023-09-15 |           1 |
|  2 |           2 | VACATION   | 2023-11-01  | 2023-11-15 |           2 |
|  3 |           3 | UNPAID     | 2024-10-12  | 2024-10-14 |           2 |
|  4 |           5 | VACATION   | 2024-10-24  | 2024-11-24 |           1 |
|  5 |           6 | UNPAID     | 2025-09-15  | 2025-09-20 |           2 |
|  6 |           4 | SICK       | 2025-12-22  | 2025-12-30 |           1 |
+----+-------------+------------+-------------+------------+-------------+
*/

CREATE TABLE performance_reviews(
id SERIAL PRIMARY KEY,
employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
review_date DATE NOT NULL,
performance_score INT CHECK(performance_score BETWEEN 1 AND 10),
reviewer_id INT REFERENCES employees(id) ON DELETE CASCADE,
comments TEXT
);

INSERT INTO performance_reviews(employee_id,review_date,performance_score,reviewer_id,comments) VALUES
(6,'2024-01-01',8,1,null),
(6,'2025-02-05',9,1,null),
(3,'2023-05-15',6,6,'Need Improvement'),
(4,'2024-09-20',4,6,'Please Focus on Work & Improve it'),
(5,'2025-01-25',7,1,'Little bit Improvement'),
(2,'2025-11-29',9,1,null);

/*
+----+-------------+-------------+-------------------+-------------+-----------------------------------+
| id | employee_id | review_date | performance_score | reviewer_id | comments                          |
+----+-------------+-------------+-------------------+-------------+-----------------------------------+
|  1 |           6 | 2024-01-01  |                 8 |           1 | NULL                              |
|  2 |           6 | 2025-02-05  |                 9 |           1 | NULL                              |
|  3 |           3 | 2023-05-15  |                 6 |           6 | Need Improvement                  |
|  4 |           4 | 2024-09-20  |                 4 |           6 | Please Focus on Work & Improve it |
|  5 |           5 | 2025-01-25  |                 7 |           1 | Little bit Improvement            |
|  6 |           2 | 2025-11-29  |                 9 |           1 | NULL                              |
+----+-------------+-------------+-------------------+-------------+-----------------------------------+
*/

-- Questions:
-- Get all active employees (not deleted)
select * from employees where deleted_at is null;
/*
+----+-------------+------------+------------------+--------------+------------+
| id | name        | department | position         | joining_date | deleted_at |
+----+-------------+------------+------------------+--------------+------------+
|  1 | Ram Jani    | HR         | Manager          | 2022-01-01   | NULL       |
|  2 | Radha Desai | HR         | Manager          | 2023-01-01   | NULL       |
|  3 | Rahul Jain  | IT         | Senior Developer | 2022-05-01   | NULL       |
|  6 | Ram Jani    | IT         | Project Leader   | 2024-01-01   | NULL       |
+----+-------------+------------+------------------+--------------+------------+
*/

-- Get payroll report including bonuses & deductions
select e.id,e.name,s.base_salary as total_salary,s.net_salary, sum(distinct b.bonus_amount) as total_bonus,sum(distinct d.deduction_amount) as total_deduction from employees e
left join salaries s on s.employee_id=e.id
left join bonuses b on b.employee_id=e.id
left join deductions d on d.employee_id=e.id
group by e.id,e.name,s.base_salary,s.net_salary;
/*
+----+-------------+--------------+------------+-------------+-----------------+
| id | name        | total_salary | net_salary | total_bonus | total_deduction |
+----+-------------+--------------+------------+-------------+-----------------+
|  1 | Ram Jani    |     50000.00 |   45000.00 |     2000.00 |         5000.00 |
|  2 | Radha Desai |     80000.00 |   70000.98 |     7000.00 |         5000.00 |
|  3 | Rahul Jain  |     70000.00 |   65000.00 |     7000.00 |         5000.00 |
|  4 | Ram Jain    |     50000.00 |   45000.98 |     2000.00 |         7000.00 |
|  5 | Rajvi Vadi  |     40000.00 |   38000.00 |     3000.00 |         3000.00 |
|  6 | Rahul Jani  |     82000.00 |   75000.08 |     9000.00 |            NULL |
+----+-------------+--------------+------------+-------------+-----------------+
*/
