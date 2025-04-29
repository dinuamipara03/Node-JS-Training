-- 1. Write a SQL query to fetch "FIRST_NAME" from the Student table in upper case and use ALIAS name as STUDENT_NAME.
-- select upper(FIRSTNAME) AS STUDENT_NAME from Student;

-- 2. Write a SQL query to fetch unique values of MAJOR Subjects from Student table.
-- select distinct(MAJOR) from Student;

-- 3. Write a SQL query to print the first 3 characters of FIRST_NAME from Student table.
-- select substring(FIRSTNAME,1,3) from Student; 

-- 4. Write a SQL query to find the position of alphabet ('a') int the first name column 'Shivansh' from Student table.
-- select instr(FIRSTNAME,'a') from Student where FIRSTNAME='Shivam';

-- 5. Write a SQL query that fetches the unique values of MAJOR Subjects from Student table and print its length.
-- select distinct(MAJOR),length(MAJOR) from Student;

-- 6. Write a SQL query to print FIRST_NAME from the Student table after replacing 'a' with 'A'.
-- select replace(FIRSTNAME,'a','A') from Student;

-- 7. Write a SQL query to print the FIRST_NAME and LAST_NAME from Student table into single column COMPLETE_NAME.
-- select concat(FIRSTNAME,' ',LASTNAME) AS COMPLETE_NAME FROM Student;

-- 8. Write a SQL query to print all Student details from Student table order by FIRST_NAME Ascending and MAJOR Subject descending .
-- select * from Student order by FIRSTNAME,MAJOR DESC;

-- 9. Write a SQL query to print details of the Students with the FIRST_NAME as 'Prem' and 'Shivansh' from Student table.
-- select * from Student where FIRSTNAME='Prem' or FIRSTNAME='Shivam';

-- 10. Write a SQL query to print details of the Students excluding FIRST_NAME as 'Prem' and 'Shivansh' from Student table.
-- select * from Student where FIRSTNAME not in('Prem','Shivam');

