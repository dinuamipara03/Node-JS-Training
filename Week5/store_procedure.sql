-- DELIMITER //

-- CREATE PROCEDURE hello()
-- BEGIN
--     SELECT *
--     FROM testing.Customer;
-- END //

-- DELIMITER ; 

call hello();

-- DELIMITER //

-- CREATE PROCEDURE totalAmountOfScholarship()
-- BEGIN
-- SELECT SUM(SAMOUNT)
-- FROM Scholarship;
-- END //

-- DELIMITER ;

CALL totalAmountOfScholarship();
