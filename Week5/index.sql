-- CREATE TABLE test (
--     id         INT NOT NULL,
--     last_name  CHAR(30) NOT NULL,
--     first_name CHAR(30) NOT NULL,
--     PRIMARY KEY (id),
--     INDEX name (last_name,first_name)
-- ); 

-- insert into test (id,last_name,first_name) values(1,'Jones','Jon'),
-- (2,'Jones','Jone'),
-- (3,'Jones','Nayan'),
-- (4,'Jones','Jay'),(5,'Jones','Ram'),(6,'Jones','Jony'),(7,'Jones','John'),(8,'Jones','J');

select * from test;

SELECT * FROM test WHERE last_name='Jones';

SELECT * FROM test
  WHERE last_name='Jones' AND first_name='John';

SELECT * FROM test
  WHERE last_name='Jones'
  AND (first_name='John' OR first_name='Jon');
 
SELECT * FROM test
  WHERE last_name='Jones'
  AND first_name >='M' AND first_name < 'N';
