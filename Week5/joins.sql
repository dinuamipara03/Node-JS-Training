-- SELECT CONCAT(Student.FIRSTNAME, ' ', Student.LASTNAME), Scholarship.SAMOUNT, Scholarship.SDATE
-- FROM Scholarship
-- INNER JOIN Student ON Scholarship.SID = Student.SID;

-- SELECT CONCAT(Student.FIRSTNAME, ' ', Student.LASTNAME), Scholarship.SAMOUNT, Scholarship.SDATE
-- FROM Scholarship
-- LEFT JOIN Student ON Scholarship.SID = Student.SID
-- WHERE Scholarship.SAMOUNT>3000;

-- SELECT Student.FIRSTNAME, Program.PROGRAMNAME
-- FROM Student
-- LEFT JOIN Program ON Student.SID = Program.SID
-- ORDER BY Student.FIRSTNAME;

SELECT Student.FIRSTNAME, Program.PROGRAMNAME
FROM Student
RIGHT JOIN Program ON Student.SID = Program.SID
ORDER BY Student.FIRSTNAME; 
