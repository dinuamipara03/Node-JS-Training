-- -------------------------STRING FUNCTION------------------------------
-- SELECT EmpName, ASCII(EmpName) AS NumCodeOfFirstChar FROM Employees;

-- SELECT CHAR_LENGTH("SQL Tutorial") AS LengthOfString;

-- SELECT CHARACTER_LENGTH("SQL Tutorial") AS LengthOfString;

-- SELECT CONCAT("SQL ", "Tutorial ", "is ", "fun!") AS ConcatenatedString;

-- SELECT CONCAT_WS("-", "SQL", "Tutorial", "is", "fun!") AS ConcatenatedString;

-- SELECT FIELD("q", "s", "q", "l");

-- SELECT FIND_IN_SET("q", "s,q,l");

-- SELECT FORMAT(250500.5634, 2);

-- SELECT INSERT("W3Schools.com", 1, 9, "Example");

-- SELECT INSTR("W3Schools.com", "3") AS MatchPosition;

-- SELECT LCASE("SQL Tutorial is FUN!");

-- SELECT UCASE("SQL Tutorial is FUN!");

-- SELECT LEFT("SQL Tutorial", 3) AS ExtractString;

-- SELECT LENGTH("SQL Tutorial") AS LengthOfString;

-- SELECT LOCATE("3", "W3Schools.com") AS MatchPosition;

-- SELECT LOWER("SQL Tutorial is FUN!");

-- SELECT LPAD("SQL Tutorial", 20, "ABC");

-- SELECT LTRIM("     SQL Tutorial") AS LeftTrimmedString;

-- SELECT MID("SQL Tutorial", 5, 3) AS ExtractString;

-- SELECT POSITION("3" IN "W3Schools.com") AS MatchPosition;

-- SELECT REPEAT("SQL Tutorial", 3);

-- SELECT REPLACE("SQL Tutorial", "SQL", "HTML");

-- SELECT REVERSE("SQL Tutorial");

-- SELECT RIGHT("SQL Tutorial is cool", 4) AS ExtractString;

-- SELECT RPAD("SQL Tutorial", 20, "ABC");

-- SELECT RTRIM("SQL Tutorial     ") AS RightTrimmedString;

-- SELECT SPACE(10);

-- SELECT STRCMP("SQL Tutorial", "SQL Tutorial");

-- SELECT SUBSTR("SQL Tutorial", 5, 3) AS ExtractString;

-- SELECT SUBSTRING("SQL Tutorial", 5, 3) AS ExtractString;

-- SELECT SUBSTRING_INDEX("www.w3schools.com", ".", 2);

-- SELECT TRIM('    SQL Tutorial    ') AS TrimmedString;

-- SELECT UPPER("SQL Tutorial is FUN!");

-- ---------------------------Numeric Functions---------------------------
-- SELECT ABS(-243.5);

-- SELECT ACOS(0.25);

-- SELECT ASIN(0.25);

-- SELECT ATAN(2.5);

-- SELECT ATAN2(0.50, 1);

-- SELECT AVG(Salary) AS AvgSalary FROM Employees;

-- SELECT CEIL(25.75);

-- SELECT CEILING(25.75);

-- SELECT COS(2);

-- SELECT COT(6);

-- SELECT COUNT(EmpID) AS NumberOfIDs FROM Employees;

-- SELECT DEGREES(1.5);

-- SELECT 10 DIV 5;

-- SELECT EXP(1);

-- SELECT FLOOR(25.75);

-- SELECT GREATEST(3, 12, 34, 8, 25);

-- SELECT LEAST(3, 12, 34, 8, 25);

-- SELECT LN(2);

-- SELECT LOG(2);

-- SELECT LOG10(2);

-- SELECT LOG2(6);

-- SELECT MAX(Salary) AS HighSal FROM Employees;

-- SELECT MIN(Salary) AS LowSal FROM Employees;

-- SELECT MOD(18, 4);

-- SELECT PI();

-- SELECT POW(4, 2);

-- SELECT POWER(4, 2);

-- SELECT RADIANS(180);

-- SELECT RAND();

-- SELECT ROUND(135.375, 2);

-- SELECT SIGN(255.5);

-- SELECT SIN(2);

-- SELECT SQRT(64);

-- SELECT SUM(Salary) AS Total FROM Employees;

-- SELECT TAN(1.75);

-- SELECT TRUNCATE(135.375, 2);

