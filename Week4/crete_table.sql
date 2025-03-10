USE testing;
CREATE TABLE Employees (  
    EmpID INT PRIMARY KEY AUTO_INCREMENT,  
    EmpName VARCHAR(100) NOT NULL,  
    Salary DECIMAL(10,2) NOT NULL,  
    MobileNo VARCHAR(15) UNIQUE NOT NULL,  
    City VARCHAR(50) NOT NULL,  
    Department VARCHAR(50),  
    Designation VARCHAR(50),  
    JoiningDate DATE,  
    Email VARCHAR(100) UNIQUE  
); 
