SELECT FIRSTNAME, LASTNAME, GPA , MAJOR
FROM Student 
WHERE SID IN (
SELECT SID FROM Student WHERE MAJOR='MATHEMATICS'
);