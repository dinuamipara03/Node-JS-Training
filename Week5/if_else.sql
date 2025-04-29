-- DELIMITER $$  
-- CREATE PROCEDURE check_salary(IN emp_id INT)  
-- BEGIN  
--     DECLARE emp_salary INT;  

--     SELECT Salary INTO emp_salary FROM Employees WHERE EmpID = emp_id;  

--     IF emp_salary > 50000 THEN  
--         SELECT 'High Salary' AS Salary_Status;  
--     ELSEIF emp_salary BETWEEN 30000 AND 50000 THEN  
--         SELECT 'Medium Salary' AS Salary_Status;  
--     ELSE  
--         SELECT 'Low Salary' AS Salary_Status;  
--     END IF;  
-- END $$  
-- DELIMITER ;

CALL check_salary(27);

 
