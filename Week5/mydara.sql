use testing; 
LOAD XML LOCAL INFILE 'mydata.xml'
    INTO TABLE mydata
    ROWS IDENTIFIED BY '<mydata>';