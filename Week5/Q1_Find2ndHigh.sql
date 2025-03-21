use week5;
-- create table emp(
-- id int,
-- name varchar(255),
-- salary varchar(255)
-- );

-- insert into emp(id,name,salary) values(1,'a',10000),(2,'b',20000),(3,'c',30000),(4,'d',20000);
-- select * from emp;
-- select distinct salary,dense_rank() over(order by salary) as Salary_rank from emp limit 1 offset 1;
-- select salary from (select distinct salary,dense_rank() over(order by salary) as Salary_rank from emp) as salary where Salary_rank=2;
select distinct salary from emp order by salary limit 1 offset 1; -- offset 1 so start form id 2 b
