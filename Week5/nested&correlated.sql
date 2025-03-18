-- Nested 
-- SELECT * FROM Student WHERE 
-- SID IN (SELECT SID FROM Scholarship);

-- Correlated
-- SELECT * FROM Student where 
-- EXISTS (SELECT SID FROM Scholarship 
-- WHERE Scholarship.SID=Student.SID); 
