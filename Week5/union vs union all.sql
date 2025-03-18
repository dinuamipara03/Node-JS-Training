-- The main difference between UNION and UNION ALL is that:

-- UNION: only keeps unique records
-- UNION ALL: keeps all records, including duplicates
-- CREATE TABLE customer (
--     CustomerID INT PRIMARY KEY,
--     CustomerName VARCHAR(100),
--     LastName VARCHAR(100),
--     Country VARCHAR(100),
--     Age INT
-- );


-- INSERT INTO customer (CustomerID, CustomerName, LastName, Country, Age) VALUES
-- (1, 'Shubham', 'Thakur', 'India', 23),
-- (2, 'Aman', 'Chopra', 'Australia', 21),
-- (3, 'Riya', 'Gupta', 'Australia', 22),
-- (4, 'Rahul', 'Sharma', 'Australia', 21),
-- (5, 'Mayank', 'Gupta', 'Australia', 22),
-- (6, 'Ankit', 'Verma', 'Australia', 23),
-- (7, 'Naman', 'Jain', 'India', 23),
-- (8, 'Naveen', 'Tulasi', 'Sri Lanka', 24),
-- (9, 'Priya', 'Gupta', 'Sri Lanka', 24),
-- (10, 'Nishant. Salchichas S.A.', 'Jain', 'Spain', 22);

SELECT * FROM customer
WHERE CustomerID BETWEEN 1 AND 5
UNION
SELECT * FROM customer
WHERE CustomerID BETWEEN 1 AND 5;

SELECT * FROM customer
WHERE CustomerID between 1 AND 5
UNION ALL
SELECT * FROM customer
WHERE CustomerID BETWEEN 1 AND 5;