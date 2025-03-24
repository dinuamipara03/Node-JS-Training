create database week6;
use week6;

-- Create a table employees with the following columns:
-- id: Integer, primary key, auto-increment, not null 
-- name: String (max 100 characters), not null
-- department: String (max 50 characters), can be null
-- salary: Decimal (10,2), can be null
-- hire_date: Date, can be null

create table employees(
id serial primary key,
name varchar(100) not null,
department varchar(50),
salary decimal,
hire_date date);


-- Modify the employees table by adding a column email (string, 100 characters, unique).
alter table employees add column email varchar(100) unique;

-- Change the data type of salary from DECIMAL(10,2) to FLOAT.
alter table employees modify column salary float;

-- Insert employee records into the employees table.
INSERT INTO employees (name, department, salary, hire_date, email)  
VALUES  
('Harshad Patel', 'HR', 55000, '2022-05-15', 'harshad@company.com'),  
('Devanshi Joshi', 'IT', 75000, '2021-06-20', 'devanshi@company.com'),  
('Amit Shah', 'Finance', 65000, '2020-03-10', 'amit@company.com'),  
('Rajesh Iyer', 'IT', 90000, '2019-07-25', 'rajesh@company.com'),  
('Pooja Sharma', 'HR', 50000, '2023-01-12', 'pooja@company.com'),  
('Vikas Mehta', 'Marketing', 48000, '2024-02-18', 'vikas@company.com'),  
('Rohit Desai', 'Finance', 72000, '2018-11-03', 'rohit@company.com'),  
('Anjali Nair', 'IT', 85000, '2017-05-30', 'anjali@company.com'),  
('Neha Verma', 'HR', 53000, '2016-08-14', 'neha@company.com'),  
('Sandeep Yadav', 'Sales', 62000, '2019-04-21', 'sandeep@company.com'),  
('Kavita Reddy', 'Sales', 59000, '2022-09-12', 'kavita@company.com'),  
('Arjun Malhotra', 'Marketing', 51000, '2020-06-08', 'arjun@company.com'),  
('Meera Kulkarni', 'Finance', 78000, '2015-12-30', 'meera@company.com'),  
('Nikhil Saxena', 'IT', 97000, '2014-07-19', 'nikhil@company.com'),  
('Ritika Choudhary', 'HR', 56000, '2023-03-01', 'ritika@company.com'),  
('Pranav Bhatt', 'Sales', 64000, '2018-10-15', 'pranav@company.com'),  
('Swati Pillai', 'Finance', 67000, '2021-01-05', 'swati@company.com'),  
('Rakesh Tripathi', 'Marketing', 52000, '2019-02-25', 'rakesh@company.com'),  
('Sameer Ghosh', 'IT', 89000, '2020-09-10', 'sameer@company.com'),  
('Tanvi Kothari', 'Sales', 60000, '2021-05-16', 'tanvi@company.com');

-- Update the salary of all employees in the 'HR' department by 10%.
update employees set salary= salary*1.10 where department='HR';

-- Delete an employee whose name is 'Tanvi Kothari'.
delete from employees where name='Tanvi Kothari';

-- Create a stored procedure IncreaseSalary that increases the salary of employees in a given department by a specified percentage.
delimiter //
create procedure increseSalary(department varchar(50))
begin
update employees set salary= salary*1.10 where department='IT';
end //
delimiter ;
call week6.increseSalary();

-- Create a stored procedure GetRecentEmployees that fetches employees who joined after a given date.
delimiter //
create procedure GetRecentEmployees()
begin
select * from employees where hire_date>'2017-01-01';
end //
delimiter ;
call week6.GetRecentEmployees();


-- Create an index on the department column for faster searching.
CREATE INDEX idx_department ON employees (department);

-- Create a composite index on department and salary.
CREATE INDEX idx_composite ON employees (department, salary);


-- Create a trigger after_salary_update that logs salary changes into a new table salary_log.
delimiter //
create trigger after_salary_update
after update on employees
for each row 
begin
insert into salary_log(emp_id,old_salary,new_salary) values(old.id,old.salary,new.salary);
end //
delimiter ;
			-- apply update then select salary_log

-- Retrieve employees along with their salary rank using a window function.
select name, salary ,rank() over(order by salary) as ranking from employees; 

-- Get employees along with their department's average salary using a window function.
select  name,salary ,department,avg(salary) over() as average  from employees order by department; 

-- Find employees who earn more than the average salary.
select name,salary from employees where salary >(select avg(salary) from employees);                                                                                                                                                                                                                                                                                                                                                                                                                        

-- Get the details of employees who joined before the oldest employee in the 'IT' department.
select * from employees where hire_date=(select min(hire_date) from employees where department='IT');

-- Retrieve the total number of employees in each department.
select department,count(*) from employees group by department;

-- Find the department with the highest average salary.
select department,avg(salary) from employees group by department order by avg(salary) desc limit 1;

-- Show the minimum and maximum salary in each department, filtering those with more than 2 employees.
select department,min(salary),max(salary) from employees group by department having count(*)>2;

-- Create a departments table with the following columns:
-- dept_id: Integer, primary key, auto-increment, not null
-- dept_name: String (max 100 characters), unique, not null
create table departments(
dept_id serial primary key,
dept_name varchar(100) unique,
user_id INT REFERENCES employees(id) ON DELETE CASCADE);

insert into departments(user_id,dept_name) values(1,'HR'),(2,'IT'),(3,'Finance'),(4,'Marketing'),(5,'Sales');

-- Retrieve employee names along with their department names using JOIN.
select employees.name,departments.dept_name from employees left join departments on employees.id=departments.user_id;

-- Get employees who do not belong to any department using LEFT JOIN.
select employees.name,departments.dept_name from employees left join departments on employees.id=departments.user_id where departments.dept_name is null;

-- Create a view high_paid_employees that contains employees earning more than 70,000.
create view high_paid_emp as select name,salary from employees where salary>70000;
SELECT * FROM week6.high_paid_emp;

-- Create a view department_salary that shows the total salary paid per department.
create view dept_salary as select department,sum(salary) from employees group by department ;
SELECT * FROM week6.dept_salary;





