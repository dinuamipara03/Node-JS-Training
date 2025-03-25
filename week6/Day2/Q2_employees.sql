USE week6;
-- ## employees (Stores employee details)
-- id (PK, SERIAL)
-- name (VARCHAR, NOT NULL)
-- email (VARCHAR, UNIQUE, NOT NULL)
-- department (VARCHAR, NOT NULL)
-- position (VARCHAR, NOT NULL)
-- created_at (TIMESTAMP, DEFAULT NOW())
-- updated_at (TIMESTAMP, DEFAULT NOW())

		create table employees(
		id serial primary key,
		name varchar(50) not null,
		email varchar(30) not null unique,
		department varchar(20) not null,
		position varchar(20) not null,
		created_at timestamp default now(),
		updated_at timestamp default now()
		);

		INSERT INTO employees (name, email, department, position, created_at, updated_at) VALUES  
		('Amit Sharma', 'amit@example.com', 'HR', 'Manager', '2025-01-10 09:00:00', '2025-03-20 09:30:00'),  
		('Priya Verma', 'priya@example.com', 'IT', 'Developer', '2025-02-15 10:00:00', '2025-03-18 11:00:00'),  
		('Rohan Patel', 'rohan@example.com', 'Finance', 'Analyst', '2025-03-05 12:00:00', '2025-03-15 12:45:00'),  
		('Sneha Iyer', 'sneha@example.com', 'Marketing', 'Executive', '2025-01-20 08:30:00', '2025-03-10 09:15:00'),  
		('Ananya Reddy', 'ananya@example.com', 'IT', 'Tester', '2025-03-10 14:00:00', '2025-03-20 14:45:00'),  
		('Rajesh Gupta', 'rajesh@example.com', 'HR', 'Recruiter', '2025-02-01 09:30:00', '2025-03-01 10:00:00'),
		('Nikhil Shah', 'nikhil@example.com', 'Sales', 'Associate', '2025-02-25 13:15:00', '2025-03-05 13:45:00'),  
		('Meera Dixit', 'meera@example.com', 'HR', 'Manager', '2025-01-30 08:00:00', '2025-03-12 09:00:00'), 
		('Vikas Yadav', 'vikas@example.com', 'Support', 'Senior supporter', '2025-03-01 10:00:00', '2025-03-17 10:30:00'), 
		('Kunal Desai', 'kunal@example.com', 'HR', 'Assistant', NULL, NULL);

		/*
		+----+--------------+--------------------+------------+------------------+---------------------+---------------------+
		| id | name         | email              | department | position         | created_at          | updated_at          |
		+----+--------------+--------------------+------------+------------------+---------------------+---------------------+
		|  1 | Amit Sharma  | amit@example.com   | HR         | Manager          | 2025-01-10 09:00:00 | 2025-03-20 09:30:00 |
		|  2 | Priya Verma  | priya@example.com  | IT         | Developer        | 2025-02-15 10:00:00 | 2025-03-18 11:00:00 |
		|  3 | Rohan Patel  | rohan@example.com  | Finance    | Analyst          | 2025-03-05 12:00:00 | 2025-03-15 12:45:00 |
		|  4 | Sneha Iyer   | sneha@example.com  | Marketing  | Executive        | 2025-01-20 08:30:00 | 2025-03-10 09:15:00 |
		|  5 | Ananya Reddy | ananya@example.com | IT         | Tester           | 2025-03-10 14:00:00 | 2025-03-20 14:45:00 |
		|  6 | Rajesh Gupta | rajesh@example.com | HR         | Recruiter        | 2025-02-01 09:30:00 | 2025-03-01 10:00:00 |
		|  7 | Nikhil Shah  | nikhil@example.com | Sales      | Associate        | 2025-02-25 13:15:00 | 2025-03-05 13:45:00 |
		|  8 | Meera Dixit  | meera@example.com  | HR         | Manager          | 2025-01-30 08:00:00 | 2025-03-12 09:00:00 |
		|  9 | Vikas Yadav  | vikas@example.com  | Support    | Senior supporter | 2025-03-01 10:00:00 | 2025-03-17 10:30:00 |
		| 10 | Kunal Desai  | kunal@example.com  | HR         | Assistant        | NULL                | NULL                |
		+----+--------------+--------------------+------------+------------------+---------------------+---------------------+
		*/

-- ## shifts (Defines available work shifts)
-- id (PK, SERIAL)
-- name (VARCHAR, NOT NULL) [e.g., "Morning", "Evening", "Night"]
-- start_time (TIME, NOT NULL)
-- end_time (TIME, NOT NULL)

		create table shifts(
		id serial primary key,
		name varchar(20) not null check (name in ('Morning', 'Evening', 'Night')),
		start_time time not null,
		end_time time not null,
		created_at timestamp default now(),
		updated_at timestamp default now()
		);

		INSERT INTO shifts (name, start_time, end_time, created_at, updated_at) VALUES  
		('Morning', '08:00:00', '16:00:00', '2025-01-01 00:00:00', '2025-03-20 00:00:00'),  
		('Evening', '14:00:00', '22:00:00', '2025-02-01 00:00:00', '2025-03-15 00:00:00'),  
		('Night', '22:00:00', '06:00:00', '2025-03-01 00:00:00', '2025-03-10 00:00:00');
		/*
		+----+---------+------------+----------+---------------------+---------------------+
		| id | name    | start_time | end_time | created_at          | updated_at          |
		+----+---------+------------+----------+---------------------+---------------------+
		|  1 | Morning | 08:00:00   | 16:00:00 | 2025-01-01 00:00:00 | 2025-03-20 00:00:00 |
		|  2 | Evening | 14:00:00   | 22:00:00 | 2025-02-01 00:00:00 | 2025-03-15 00:00:00 |
		|  3 | Night   | 22:00:00   | 06:00:00 | 2025-03-01 00:00:00 | 2025-03-10 00:00:00 |
		+----+---------+------------+----------+---------------------+---------------------+
		*/


-- ## employee_shifts (Maps employees to their assigned shifts)
-- id (PK, SERIAL)
-- employee_id (FK -> employees.id, ON DELETE CASCADE)
-- shift_id (FK -> shifts.id, ON DELETE CASCADE)
-- assigned_date (DATE, NOT NULL)

		create table employee_shifts(
		id serial primary key,
		employee_id int references employees(id) on delete cascade,
		shift_id int references shifts(id) on delete cascade,
		assigned_date date not null,
		created_at timestamp default now(),
		updated_at timestamp default now()
		);

		INSERT INTO employee_shifts (employee_id, shift_id, assigned_date, created_at, updated_at) VALUES  
		(1, 1, '2025-03-20', '2025-03-20 08:00:00', '2025-03-20 16:00:00'),  
		(2, 2, '2025-03-18', '2025-03-18 14:00:00', '2025-03-18 22:00:00'),  
		(3, 3, '2025-03-15', '2025-03-15 22:00:00', '2025-03-15 06:00:00'),  
		(4, NULL, '2025-03-10', '2025-03-10 08:30:00', '2025-03-10 17:00:00'),
		(6, 3, '2025-03-01', NULL, '2025-03-01 14:00:00'), 
		(7, 1, '2025-02-20', '2025-02-20 09:00:00', '2025-02-20 17:00:00'); 

		/*
		+----+-------------+----------+---------------+---------------------+---------------------+
		| id | employee_id | shift_id | assigned_date | created_at          | updated_at          |
		+----+-------------+----------+---------------+---------------------+---------------------+
		|  1 |           1 |        1 | 2025-03-20    | 2025-03-20 08:00:00 | 2025-03-20 16:00:00 |
		|  2 |           2 |        2 | 2025-03-18    | 2025-03-18 14:00:00 | 2025-03-18 22:00:00 |
		|  3 |           3 |        3 | 2025-03-15    | 2025-03-15 22:00:00 | 2025-03-15 06:00:00 |
		|  4 |           4 |     NULL | 2025-03-10    | 2025-03-10 08:30:00 | 2025-03-10 17:00:00 |
		|  5 |           6 |        3 | 2025-03-01    | NULL                | 2025-03-01 14:00:00 |
		|  6 |           7 |        1 | 2025-02-20    | 2025-02-20 09:00:00 | 2025-02-20 17:00:00 |
		+----+-------------+----------+---------------+---------------------+---------------------+
		*/

-- ## attendance (Tracks employee check-in and check-out times)
-- id (PK, SERIAL)
-- employee_id (FK -> employees.id, ON DELETE CASCADE)
-- shift_id (FK -> shifts.id, ON DELETE CASCADE)
-- date (DATE, NOT NULL)
-- check_in (TIMESTAMP, NULL)
-- check_out (TIMESTAMP, NULL)

		create table attendance(
		id serial primary key,
		employee_id int references employees(id) on delete cascade,
		shift_id int references shifts(id) on delete cascade,
		date date not null,
		check_in timestamp null,
		check_out timestamp null,
		created_at timestamp default now(),
		updated_at timestamp default now()
		);

		INSERT INTO attendance (employee_id, shift_id, date, check_in, check_out, created_at, updated_at) VALUES  
		(1, 1, '2025-03-20', '2025-03-20 08:00:00', '2025-03-20 17:30:00', '2025-03-20 08:00:00', '2025-03-20 16:30:00'),  
		(2, 2, '2025-03-18', '2025-03-18 14:00:00', '2025-03-18 23:30:00', '2025-03-18 14:00:00', '2025-03-18 22:30:00'),  
		(3, 3, '2025-03-15', '2025-03-15 22:00:00', NULL, '2025-03-15 22:00:00', '2025-03-15 22:30:00'),
		(4, 1, '2025-03-10', NULL, NULL, '2025-03-10 08:30:00', '2025-03-10 17:00:00'),
		(7, 1, '2025-02-20', NULL, NULL, NULL, NULL),
		(8, 2, '2025-02-15', '2025-02-15 12:00:00', NULL, '2025-02-15 12:00:00', '2025-02-15 12:30:00');
		/*
		+----+-------------+----------+------------+---------------------+---------------------+---------------------+---------------------+
		| id | employee_id | shift_id | date       | check_in            | check_out           | created_at          | updated_at          |
		+----+-------------+----------+------------+---------------------+---------------------+---------------------+---------------------+
		|  1 |           1 |        1 | 2025-03-20 | 2025-03-20 08:00:00 | 2025-03-20 17:30:00 | 2025-03-20 08:00:00 | 2025-03-20 16:30:00 |
		|  2 |           2 |        2 | 2025-03-18 | 2025-03-18 14:00:00 | 2025-03-18 23:30:00 | 2025-03-18 14:00:00 | 2025-03-18 22:30:00 |
		|  3 |           3 |        3 | 2025-03-15 | 2025-03-15 22:00:00 | NULL                | 2025-03-15 22:00:00 | 2025-03-15 22:30:00 |
		|  4 |           4 |        1 | 2025-03-10 | NULL                | NULL                | 2025-03-10 08:30:00 | 2025-03-10 17:00:00 |
		|  5 |           7 |        1 | 2025-02-20 | NULL                | NULL                | NULL                | NULL                |
		|  6 |           8 |        2 | 2025-02-15 | 2025-02-15 12:00:00 | NULL                | 2025-02-15 12:00:00 | 2025-02-15 12:30:00 |
		|  7 |           1 |        1 | 2025-03-20 | 2025-03-20 08:00:00 | 2025-03-20 17:00:00 | 2025-03-20 08:00:00 | 2025-03-20 16:30:00 |
		|  8 |           2 |        2 | 2025-03-18 | 2025-03-18 14:00:00 | 2025-03-18 23:30:00 | 2025-03-18 14:00:00 | 2025-03-18 22:30:00 |
		+----+-------------+----------+------------+---------------------+---------------------+---------------------+---------------------+
		*/

-- 1. Retrieve employees with missing attendance
-- Find all employees who were assigned a shift but did not check in on a given date.
		select e.id,e.name,es.assigned_date,s.name as shifts,s.end_time,a.check_in from employee_shifts es
		left join employees e on es.employee_id=e.id
		left join attendance a on es.employee_id=a.employee_id
		left join shifts s on es.shift_id=s.id
		where a.check_in is null;
		/*
	        +------+--------------+---------------+---------+----------+-----------+
		| id   | name         | assigned_date | shifts  | end_time | check_in  |
		+------+--------------+---------------+---------+----------+-----------+
		|    4 | Sneha Iyer   | 2025-03-10    | NULL    | NULL     | NULL      |
		|    6 | Rajesh Gupta | 2025-03-01    | Night   | 06:00:00 | NULL      |
		|    7 | Nikhil Shah  | 2025-02-20    | Morning | 16:00:00 | NULL      |
		+------+--------------+---------------+---------+----------+-----------+
		*/
        
-- 2. Get employees who worked overtime
-- Find employees who checked out more than 1 hour after their scheduled shift ended.
		select distinct e.id, e.name, a.date, s.name AS shift,s.end_time, a.check_out
		from attendance a
		left join employees e ON a.employee_id = e.id
		left join shifts s ON a.shift_id = s.id
		where a.check_out > timestamp(a.date, s.end_time) + interval 1 hour;-- convert time to timestamp
	        /*
	        +------+-------------+------------+---------+----------+---------------------+
		| id   | name        | date       | shift   | end_time | check_out           |
		+------+-------------+------------+---------+----------+---------------------+
		|    1 | Amit Sharma | 2025-03-20 | Morning | 16:00:00 | 2025-03-20 17:30:00 |
		|    2 | Priya Verma | 2025-03-18 | Evening | 22:00:00 | 2025-03-18 23:30:00 |
		+------+-------------+------------+---------+----------+---------------------+
		*/
