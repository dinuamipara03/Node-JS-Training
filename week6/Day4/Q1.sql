create table employees(
id serial primary key,
name varchar(100) not null,
email varchar(150) unique,
phone varchar(15),
department_id int references departments(id),
hire_date date,
skills text,
created_at timestamp default now()
);
insert into employees(name,email,phone,department_id,hire_date,skills,created_at) values
('Jay Trivedi','jay@gmail.com','9876543210',1,'2023-12-28','Active Listener','2023-12-28 12:00:00'),
('Jayvanti Rana','jayvanti@gmail.com','9898989898',1,'2024-05-15','Negotiation','2024-05-15 01:00:30'),
('Ahil Trivedi','ahil@gmail.com','9879879874',2,'2023-12-30','React js','2023-12-30 02:10:25'),
('Abju Mor','anju@gmail.com','9696969696',2,'2024-10-28','Node js','2024-10-28 05:00:00'),
('Brijesh Jani','brijesh@gmail.com','8989623523',3,'2024-11-24','Communication','2024-11-24 09:30:00'),
('Vivek Jain','vivek@gmail.com','9874563210',3,'2025-09-21','Decision Making','2025-09-21 12:30:00'),
('Rajvi Vadi','rajvi@gmail.com','9899989998',4,'2025-01-31','Social media marketing','2025-01-31 07:06:00'),
('Srushti Patel','srushti@gmail.com','8585856321',4,'2025-06-25','SEO','2025-06-25 11:00:26');

create table departments(
id serial primary key,
name varchar(100) unique,
created_at timestamp default now()
);
insert into departments(name,created_at) values
('Sales','2023-11-18'),
('Development','2023-12-15'),
('HR','2024-08-03'),
('Marketing','2024-12-24');

create table projects(
id serial primary key,
name varchar(200) unique,
start_date date,
end_date date,
budget decimal(10,2),
department_id int references departments(id),
created_at timestamp default now()
);
insert into projects(name,start_date,end_date,budget,department_id,created_at) values
('Ecommerce Website','2024-01-01','2024-06-08',100000,2,'2024-01-01 08:30:00'),
('Traking App','2025-05-15','2025-10-08',50000,2,'2025-05-15 09:30:30'),
('Pricing Strategy','2025-06-01','2025-07-08',20000,4,'2025-06-01 08:00:00'),
('Video Marketing','2025-08-23','2025-10-20',30000,4,'2025-08-23 10:30:00'),
('Develop a succession plan','2024-10-03','2024-12-10',40000,1,'2024-10-03 10:25:00'),
('Employee engagement strategies','2025-05-05','2025-06-25',60000,1,'2025-05-05 01:50:00'),
('Crafts and Handmade Items sales','2025-02-21','2025-06-08',20000,3,'2025-06-08 02:10:00'),
('Direct Selling','2025-06-12','2025-12-12',40000,3,'2025-06-12 11:30:00'),
('Food Delivery App','2025-05-01','2025-10-04',90000,2,'2025-05-01 10:35:00'),
('Music App','2025-08-25','2025-12-30',80000,2,'2025-08-25 04:59:00');

create table emp_projects(
employee_id int references employees(id),
project_id int references projects(id),
role varchar(50),
hours_worked int,
created_at timestamp default now()
);
insert into emp_projects(employee_id,project_id,role,hours_worked,created_at) values
(1,5,'Manager',32,'2024-10-08 01:00:00'),
(2,6,'Recruiter',20,'2025-05-08 02:00:00'),
(3,1,'Frontend Developer',50,'2024-01-07 03:00:00'),
(4,2,'Backend Developer',60,'2025-05-23 04:00:00'),
(5,7,'Sales Manager',30,'2025-02-25 05:00:00'),
(6,8,'Sales Engineer',35,'2025-06-17 06:00:00'),
(7,3,'Marketing consultant',24,'2025-06-05 07:00:00'),
(8,4,'Marketing Manager',40,'2025-08-28 08:00:00'),
(4,10,'Frontend Developer',32,'2025-08-30 09:00:00'),
(3,9,'Backend Developer',50,'2025-05-10 10:00:00');

create table salaries(
id serial primary key,
employee_id int references employees(id),
base_salary decimal(10,2),
bonus decimal(10,2),
deduction decimal(10,2),
salary_month date,
created_at timestamp default now()
);
insert into salaries(employee_id,base_salary,bonus,deduction,salary_month,created_at) values
(1,80000,5000,null,'2024-02-28','2024-02-28 05:00:00'),
(2,70000,null,5000,'2024-06-15','2024-06-15 10:00:00'),
(3,100000,2000,1000,'2024-01-30','2024-01-30 12:00:00'),
(4,150000,3000,200,'2024-12-28','2024-12-28 08:00:00'),
(5,60000,1000,3000,'2024-12-24','2024-12-24 09:00:00'),
(6,50000,500,200,'2025-10-21','2025-10-21 05:00:00'),
(7,70000,2000,100,'2025-03-31','2025-03-31 06:00:00'),
(8,75000,null,null,'2025-08-25','2025-08-25 07:00:00');


-- 1. Queries with Joins & Subqueries
-- Find employees working on at least 2 projects with total earnings above the department average.
select  e.id,e.name,count(ep.project_id),(sum(distinct s.base_salary)+(sum(distinct s.bonus))-(sum(distinct s.deduction))) as total_salary from employees e
inner join emp_projects ep on e.id = ep.employee_id
inner join salaries s on e.id = s.employee_id
group by e.id,e.name
having count(ep.project_id)>=2 and total_salary  >(select avg(base_salary)from salaries where employee_id=e.id);

-- 2. Window Functions: Running Total of Employee Salaries
-- Calculate running total of salaries for each employee over time.
select employee_id, salary_month, 
       SUM(base_salary + coalesce(bonus, 0) - coalesce(deduction, 0)) 
           OVER (partition by employee_id order by salary_month) as running_total
from salaries;

-- 3. CTE for Active Project Employees
-- Find employees actively working on projects in February 2024. Change to february 2025 as per data
with emp as(select e.id,e.name,p.start_date,p.end_date,ep.created_at from employees e
inner join emp_projects ep on ep.employee_id=e.id 
inner join projects p on p.id=ep.project_id 
where p.start_date<='2025-02-28' and p.start_date>='2025-02-01')
select id,name,start_date,created_at from emp;

-- 4. Use of UNION & UNION ALL
-- Find all employees who either have a salary entry or are assigned to a project.
SELECT e.id, e.name FROM employees e join salaries s on s.employee_id=e.id
UNION All
SELECT e.id, e.name FROM employees e join emp_projects ep on ep.employee_id=e.id;

-- 5. Performance Optimization with Indexing
-- Create an index to speed up salary queries.
CREATE INDEX idx_salaries_employee_id ON salaries(employee_id);
CREATE INDEX idx_salaries_salary_month ON salaries(salary_month);

