SET @page_number = 3;
SET @records_per_page = 5;

-- Use Dynamic SQL
SET @query = CONCAT('SELECT * FROM Employees LIMIT ', @records_per_page, ' OFFSET ', (@page_number - 1) * @records_per_page);

-- Execute the Query
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;