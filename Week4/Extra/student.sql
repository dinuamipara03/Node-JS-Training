use testing;
create table Student (
SID INT AUTO_INCREMENT,
FIRSTNAME VARCHAR(255) NOT NULL,
LASTNAME VARCHAR(255),
GPA INT NOT NULL,
ENROLLMENTDATE DATE,
MAJOR VARCHAR(255),
PRIMARY KEY (SID) 
);
