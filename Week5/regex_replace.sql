SELECT REGEXP_REPLACE('Welcome To Tutorialspoint!', 'Welcome', 'Welll') AS RESULT;
SELECT REGEXP_REPLACE('Welcome To Tutorialspoint!', 'H', 'Hi') AS RESULT;
SELECT REGEXP_REPLACE(FIRSTNAME, 'R', 'Rr') AS Result FROM Student;
SELECT REGEXP_REPLACE(LASTNAME, 'R', 'Rr') AS Result FROM Student;
SELECT REGEXP_REPLACE(FIRSTNAME, 'A$', 'AYY') AS Result FROM Student;
SELECT REGEXP_REPLACE(Country, 'Australia', 'AIndia') AS Result FROM customer;

