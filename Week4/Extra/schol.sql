use testing;
create table Scholarship (
SID INT,
SAMOUNT VARCHAR(25),
SDATE DATE,
FOREIGN KEY(SID) REFERENCES Student (SID)
); 
