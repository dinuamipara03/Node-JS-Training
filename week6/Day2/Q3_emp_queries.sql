-- 3. Department-wise attendance summary
-- Get the total number of employees who attended vs. those absent, grouped by department for a given date.
SELECT e.department,
COUNT(DISTINCT CASE WHEN a.check_in is not null THEN e.id END) AS present,
COUNT(DISTINCT CASE WHEN a.check_in is  null THEN e.id END) AS absent
FROM employees e
LEFT JOIN attendance a ON e.id = a.employee_id
GROUP BY e.department;
/*
+------------+---------+--------+
| department | present | absent |
+------------+---------+--------+
| Finance    |       1 |      0 |
| HR         |       2 |      2 |
| IT         |       1 |      1 |
| Marketing  |       0 |      1 |
| Sales      |       0 |      1 |
| Support    |       0 |      1 |
+------------+---------+--------+
*/
-- 4. Find employees who frequently arrive late
-- List employees who checked in more than 15 minutes late at least 3 times in the last month.
SELECT e.id, e.name, COUNT(*) AS late_days
FROM attendance a
LEFT JOIN employees e ON a.employee_id = e.id
LEFT JOIN employee_shifts es ON e.id = es.employee_id AND a.date = es.assigned_date
LEFT JOIN shifts s ON es.shift_id = s.id
WHERE a.check_in IS NOT NULL 
AND a.check_in> timestamp(a.date,s.start_time) + INTERVAL 15 minute
AND a.date BETWEEN '2025-03-01' AND '2025-03-31'
GROUP BY e.id
HAVING COUNT(*) >= 3;
/*
+------+-------------+-----------+
| id   | name        | late_days |
+------+-------------+-----------+
|    1 | Amit Sharma |         7 |
|    2 | Priya Verma |         4 |
+------+-------------+-----------+
*/
-- 5. Generate shift utilization report
-- For each shift, count the number of employees assigned vs. those who actually attended.
SELECT s.name AS shift_name,
COUNT(DISTINCT es.employee_id) AS total_assigned,
COUNT(DISTINCT CASE WHEN a.check_in IS NOT NULL THEN a.employee_id END) AS total_attended
FROM shifts s
LEFT JOIN employee_shifts es ON s.id = es.shift_id
LEFT JOIN attendance a ON es.employee_id = a.employee_id AND es.assigned_date = a.date GROUP BY s.name;
/*
+------------+----------------+----------------+
| shift_name | total_assigned | total_attended |
+------------+----------------+----------------+
| Evening    |              1 |              1 |
| Morning    |              2 |              1 |
| Night      |              2 |              1 |
+------------+----------------+----------------+
*/



