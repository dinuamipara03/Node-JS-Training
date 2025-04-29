-- 1. Find Stale Tickets (No Updates for X Days)
--  Identify tickets that have not been updated in the last N days.
select * from tickets where updated_at < NOW() - INTERVAL 1 DAY; -- it means not updated in 1 day(same as DATE_SUB(NOW(),INTERVAL 1 DAY))
/*
+----+------------+----------+------------------+---------+---------------------+---------------------+---------------------+
| id | status     | types    | account_group_id | user_id | created_at          | updated_at          | deleted_at          |
+----+------------+----------+------------------+---------+---------------------+---------------------+---------------------+
|  1 | NEW        | INQUIRY  |            12345 |       1 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
|  2 | INPROGRESS | COMPLAIN |            67890 |       2 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
|  3 | NEW        | SUPPORT  |            22222 |       3 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 |
|  4 | RESOLVED   | SUPPORT  |            19190 |       1 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
|  5 | RESOLVED   | INQUIRY  |            90909 |       2 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 |
|  6 | INPROGRESS | COMPLAIN |            33333 |       3 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
+----+------------+----------+------------------+---------+---------------------+---------------------+---------------------+
*/

-- 2. Retrieve Tickets with No Messages Yet
-- Find tickets that haven't received any messages.
select * from messages where content is null;
/*
+----+-----------+---------+---------+--------------+--------+---------------------+---------------------+
| id | ticket_id | content | user_id | recipient_id | status | created_at          | deleted_at          |
+----+-----------+---------+---------+--------------+--------+---------------------+---------------------+
|  9 |         1 | NULL    |       1 |        99999 | READ   | 2025-03-25 10:39:33 | NULL                |
| 10 |         2 | NULL    |       1 |        88888 | UNREAD | 2025-03-25 10:39:33 | NULL                |
| 11 |         3 | NULL    |       2 |        78787 | READ   | 2025-03-25 10:39:33 | 2025-03-25 10:39:33 |
| 12 |         4 | NULL    |       2 |        98989 | UNREAD | 2025-03-25 10:39:33 | NULL                |
| 13 |         5 | NULL    |       3 |        34567 | READ   | 2025-03-25 10:39:33 | 2025-03-25 10:39:33 |
| 14 |         6 | NULL    |       3 |        98987 | UNREAD | 2025-03-25 10:39:33 | NULL                |
+----+-----------+---------+---------+--------------+--------+---------------------+---------------------+
*/

-- 3. Count Tickets by Status
-- Get the count of tickets grouped by their status (NEW, INPROGRESS, RESOLVED).
select status,count(*) as total from tickets group by status;
/*
+------------+-------+
| status     | total |
+------------+-------+
| NEW        |     3 |
| INPROGRESS |     2 |
| RESOLVED   |     2 |
+------------+-------+
*/
select tickets.status,count(tickets.status) as total from tickets left join messages on tickets.id=messages.ticket_id group by tickets.status; -- LEFT BCZ I HAVE ONE TICKET IN TICKETS BUT NOT IN MESSAGES
/*
+------------+-------+
| status     | total |
+------------+-------+
| NEW        |     6 |
| INPROGRESS |     5 |
| RESOLVED   |     4 |
+------------+-------+
*/