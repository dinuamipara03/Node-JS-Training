SELECT COUNT(EmpID), Department
FROM Employees
GROUP BY Department
HAVING COUNT(EmpID) > 29;