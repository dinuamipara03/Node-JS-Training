create database week5;
use week5;

CREATE TABLE salesman (
    salesman_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    commission DECIMAL(5,2) NOT NULL
);

CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    cust_name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    grade INT,
    salesman_id INT,
    FOREIGN KEY (salesman_id) REFERENCES salesman(salesman_id)
);

CREATE TABLE orders ( 
    ord_no INT PRIMARY KEY,
    purch_amt DECIMAL(10,2) NOT NULL,
    ord_date DATE NOT NULL,
    customer_id INT,
    salesman_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (salesman_id) REFERENCES salesman(salesman_id)
);

CREATE TABLE company_mast (
    com_id INT PRIMARY KEY,
    com_name VARCHAR(100) NOT NULL
);

CREATE TABLE item_mast (
    pro_id INT PRIMARY KEY,
    pro_name VARCHAR(100) NOT NULL,
    pro_price DECIMAL(10,2) NOT NULL,
    pro_com INT,
    FOREIGN KEY (pro_com) REFERENCES company_mast(com_id)
);

CREATE TABLE emp_department (
    dpt_code INT PRIMARY KEY,
    dpt_name VARCHAR(100) NOT NULL,
    dpt_allotment DECIMAL(10,2) NOT NULL
);

CREATE TABLE emp_details (
    emp_idno INT PRIMARY KEY,
    emp_fname VARCHAR(100) NOT NULL,
    emp_lname VARCHAR(100) NOT NULL,
    emp_dept INT,
    FOREIGN KEY (emp_dept) REFERENCES emp_department(dpt_code)
);

INSERT INTO salesman (salesman_id, name, city, commission) VALUES  
(5001, 'James Hoog', 'New York', 0.15),  
(5002, 'Nail Knite', 'Paris', 0.13),  
(5005, 'Pit Alex', 'London', 0.11),  
(5006, 'Mc Lyon', 'Paris', 0.14),  
(5007, 'Paul Adam', 'Rome', 0.13),  
(5003, 'Lauson Hen', 'San Jose', 0.12);

INSERT INTO customer (customer_id, cust_name, city, grade, salesman_id) VALUES  
(3002, 'Nick Rimando', 'New York', 100, 5001),  
(3007, 'Brad Davis', 'New York', 200, 5001),  
(3005, 'Graham Zusi', 'California', 200, 5002),  
(3008, 'Julian Green', 'London', 300, 5002),  
(3004, 'Fabian Johnson', 'Paris', 300, 5006),  
(3009, 'Geoff Cameron', 'Berlin', 100, 5003),  
(3003, 'Jozy Altidor', 'Moscow', 200, 5007),  
(3001, 'Brad Guzan', 'London', NULL, 5005);

INSERT INTO orders (ord_no, purch_amt, ord_date, customer_id, salesman_id) VALUES  
(70001, 150.5, '2012-10-05', 3005, 5002),  
(70009, 270.65, '2012-09-10', 3001, 5005),  
(70002, 65.26, '2012-10-05', 3002, 5001),  
(70004, 110.5, '2012-08-17', 3009, 5003),  
(70007, 948.5, '2012-09-10', 3005, 5002),  
(70005, 2400.6, '2012-07-27', 3007, 5001),  
(70008, 5760, '2012-09-10', 3002, 5001),  
(70010, 1983.43, '2012-10-10', 3004, 5006);

INSERT INTO company_mast (com_id, com_name) VALUES  
(11, 'Samsung'),  
(12, 'iBall'),  
(13, 'Epsion'),  
(14, 'Zebronics'),  
(15, 'Asus'),  
(16, 'Frontech');

 INSERT INTO item_mast (pro_id, pro_name, pro_price, pro_com) VALUES  
 (101, 'Mother Board', 3200.00, 15),  
 (102, 'Key Board', 450.00, 16),  
 (103, 'ZIP drive', 250.00, 14),  
(104, 'Speaker', 550.00, 16),  
 (105, 'Monitor', 5000.00, 11),  
 (106, 'DVD drive', 900.00, 12),  
 (107, 'CD drive', 800.00, 12),  
 (108, 'Printer', 2600.00, 13),  
(109, 'Refill cartridge', 350.00, 13),  
 (110, 'Mouse', 250.00, 12);

INSERT INTO emp_department (dpt_code, dpt_name, dpt_allotment) VALUES  
(57, 'IT', 65000),  
(63, 'Finance', 15000),  
(47, 'HR', 240000),  
(27, 'RD', 55000),  
(89, 'QC', 75000);

INSERT INTO emp_details (emp_idno, emp_fname, emp_lname, emp_dept) VALUES  
(127323, 'Michale', 'Robbin', 57),  
(526689, 'Carlos', 'Snares', 63),  
(843795, 'Enric', 'Dosio', 57),  
(328717, 'Jhon', 'Snares', 63),  
(444527, 'Joseph', 'Dosni', 47),  
(659831, 'Zanifer', 'Emily', 47),  
(847674, 'Kuleswar', 'Sitaraman', 57),  
(748681, 'Henrey', 'Gabriel', 47),  
(555935, 'Alex', 'Manuel', 57);

