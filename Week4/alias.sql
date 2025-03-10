-- SELECT EmpName, CONCAT_WS(', ', City, Department) AS Information FROM Employees;

SELECT e.EmpID, e.Email, e.City 
FROM Employees AS e
WHERE e.EmpName='Nisha Gupta';
