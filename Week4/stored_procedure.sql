DELIMITER //

CREATE PROCEDURE getnamewithgpa()
BEGIN
    SELECT CONCAT(FIRSTNAME, ' ', LASTNAME) AS fullname, GPA
    FROM testing.Student;
END //

DELIMITER ;

-- call getnamewithgpa();