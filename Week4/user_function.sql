use testing;
DELIMITER //
CREATE FUNCTION AddNumbers(num1 INT, num2 INT)
RETURNS INT NO SQL
BEGIN
    RETURN num1 + num2;  -- This function doesn't access any data
END//
DELIMITER ;

-- SELECT AddNumbers(5, 3) AS SumResult;