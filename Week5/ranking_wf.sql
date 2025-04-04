USE testing;
-- with partition
select FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR,rank() OVER(PARTITION BY MAJOR order by GPA DESC) AS STUDENT_RANK FROM Student WHERE GPA>9;
select FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR,dense_rank() OVER(PARTITION BY MAJOR order by GPA DESC) AS STUDENT_RANK FROM Student WHERE GPA>9;
select FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR,row_number() OVER(PARTITION BY MAJOR order by GPA DESC) AS STUDENT_RANK FROM Student WHERE GPA>9;

-- without partition
select FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR,rank() OVER(order by GPA) AS STUDENT_RANK FROM Student WHERE GPA>9; 
select FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR,dense_rank() OVER(order by GPA) AS STUDENT_RANK FROM Student WHERE GPA>9;
select FIRSTNAME,LASTNAME,GPA,ENROLLMENTDATE,MAJOR,row_number() OVER() AS STUDENT_RANK FROM Student WHERE GPA>9;
