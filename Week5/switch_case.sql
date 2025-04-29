SELECT Salary,
CASE
    WHEN Salary > 50000 THEN "The Salary is greater than 50000"
    WHEN Salary = 50000 THEN "The Salary is 50000"
    ELSE "The Salary is less than 50000"
END as Salary
FROM Employees; 
