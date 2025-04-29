SET @SUM=0;
INSERT INTO Student(FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR) VALUES
('Ram','Sharma',8.44,'2021-09-01','Mathematics'),
('Ramesh','Kumar',5.6,'2021-09-01','Biology'),
('Rani','Sharma',7.85,'2021-09-01','Chemistry'),
('Keval','Kumar',9.2,'2021-09-01','Physics'),
('Prit','Chopra',9.78,'2021-09-01','History'),
('Pari','Vats',9.56,'2021-09-01','English'),
('Naresh','Kaur',7,'2021-09-01','Mathematics');
SELECT @SUM AS 'TOTAL_GPA';