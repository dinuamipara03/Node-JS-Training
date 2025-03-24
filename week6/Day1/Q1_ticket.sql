use practice;
DROP TABLE IF EXISTS admin_ticket_details, messages, tickets, user_details CASCADE;

-- Create tickets table
CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) NOT NULL CHECK (status IN ('NEW', 'INPROGRESS', 'RESOLVED')),
    types VARCHAR(50) NOT NULL,
    account_group_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP NULL
);

insert into tickets(status,types,account_group_id,user_id,created_at,updated_at,deleted_at) values('NEW','INQUIRY',12345,1,NOW(),NOW(),NULL),
('INPROGRESS','COMPLAIN',67890,2,NOW(),NOW(),NULL),
('NEW','SUPPORT',22222,3,NOW(),NOW(),NOW()),
('RESOLVED','SUPPORT',19190,1,NOW(),NOW(),NULL),
('RESOLVED','INQUIRY',90909,2,NOW(),NOW(),NOW()),
('INPROGRESS','COMPLAIN',33333,3,NOW(),NOW(),NULL);


-- Create messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    ticket_id INT REFERENCES tickets(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    recipient_id INT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('READ', 'UNREAD')),
    created_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP NULL
);

insert into messages(ticket_id,content,user_id,recipient_id,status,created_at,deleted_at) values(1,'This is inquiry by 1',1,99999,'READ',NOW(),NULL),
(2,'This is support by 1',1,88888,'UNREAD',NOW(),NULL),
(3,'This is complain by 2',2,78787,'READ',NOW(),NOW()),
(4,'This is inquiry by 2',2,98989,'UNREAD',NOW(),NULL),
(5,'This is support by 3',3,34567,'READ',NOW(),NOW()),
(6,'This is complain by 3',3,98987,'UNREAD',NOW(),NULL);

-- Create admin_ticket_details table
CREATE TABLE admin_ticket_details (
    id SERIAL PRIMARY KEY,
    ticket_id INT REFERENCES tickets(id) ON DELETE CASCADE,
    remote_recipient_id INT NOT NULL
);

insert into admin_ticket_details(ticket_id,remote_recipient_id) values(1,99999),
(2,88888),
(3,78787),
(4,98989),
(5,34567),
(6,98987);

-- Create user_details table (for storing user names)
CREATE TABLE user_details (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO user_details (id, name) VALUES
(1, 'John Doe'),
(2, 'Jane Smith'),
(3, 'Admin User');

-- The ticket is active (i.e., deleted_at IS NULL).
select * from tickets where deleted_at is null;
/*
+----+------------+----------+------------------+---------+---------------------+---------------------+------------+
| id | status     | types    | account_group_id | user_id | created_at          | updated_at          | deleted_at |
+----+------------+----------+------------------+---------+---------------------+---------------------+------------+
|  1 | NEW        | INQUIRY  |            12345 |       1 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL       |
|  2 | INPROGRESS | COMPLAIN |            67890 |       2 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL       |
|  4 | RESOLVED   | SUPPORT  |            19190 |       1 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL       |
|  6 | INPROGRESS | COMPLAIN |            33333 |       3 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL       |
+----+------------+----------+------------------+---------+---------------------+---------------------+------------+
*/

-- The ticket status is either 'NEW' or 'INPROGRESS'.
select * from tickets where status='NEW' or status='INPROGRESS';
/*
+----+------------+----------+------------------+---------+---------------------+---------------------+---------------------+
| id | status     | types    | account_group_id | user_id | created_at          | updated_at          | deleted_at          |
+----+------------+----------+------------------+---------+---------------------+---------------------+---------------------+
|  1 | NEW        | INQUIRY  |            12345 |       1 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
|  2 | INPROGRESS | COMPLAIN |            67890 |       2 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
|  3 | NEW        | SUPPORT  |            22222 |       3 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 |
|  6 | INPROGRESS | COMPLAIN |            33333 |       3 | 2025-03-24 10:47:36 | 2025-03-24 10:47:36 | NULL                |
+----+------------+----------+------------------+---------+---------------------+---------------------+---------------------+
*/

-- If a ticket has messages, include the last message details (content, sender, timestamp).
select user_details.name as sender,messages.content as content,messages.created_at as timestamp 
from messages inner join user_details on messages.user_id=user_details.id where messages.content is not null;
/*
+------------+-----------------------+---------------------+
| sender     | content               | timestamp           |
+------------+-----------------------+---------------------+
| John Doe   | This is inquiry by 1  | 2025-03-24 10:53:49 |
| John Doe   | This is support by 1  | 2025-03-24 10:53:49 |
| Jane Smith | This is complain by 2 | 2025-03-24 10:53:49 |
| Jane Smith | This is inquiry by 2  | 2025-03-24 10:53:49 |
| Admin User | This is support by 3  | 2025-03-24 10:53:49 |
| Admin User | This is complain by 3 | 2025-03-24 10:53:49 |
+------------+-----------------------+---------------------+
*/

-- If a ticket is created by an admin (admin_ticket_details exists for that ticket_id), also fetch the admin's name from the user_details table.
select tickets.id as Ticker_id, user_details.name as User_name, admin_ticket_details.remote_recipient_id as Recipt_id
from tickets inner join user_details on user_details.id=tickets.user_id
inner join admin_ticket_details on tickets.id=admin_ticket_details.ticket_id where tickets.user_id=3 ;
/*
+-----------+------------+-----------+
| Ticker_id | User_name  | Recipt_id |
+-----------+------------+-----------+
|         3 | Admin User |     78787 |
|         6 | Admin User |     98987 |
+-----------+------------+-----------+
*/

-- sorting

SELECT tickets.status AS ticket_status, messages.status AS message_status, messages.created_at
FROM tickets INNER JOIN messages ON tickets.id = messages.ticket_id WHERE tickets.status = 'NEW' OR (tickets.status = 'INPROGRESS' AND messages.status = 'UNREAD') 
ORDER BY 
    CASE 
        WHEN tickets.status = 'NEW' THEN 1
        WHEN tickets.status = 'INPROGRESS' AND messages.status = 'UNREAD' THEN 2
        ELSE 3
    END, 
    messages.created_at DESC;

