/*
c: It represents a case-sensitive matching.
i: It represents a case-insensitive matching.
m: It represents a multiple-line mode that recognizes line terminators within the string. By default, this function matches line terminators at the start and end of the string.
n: It is used to modify the . (dot) character to match line terminators. By default, it will stop at the end of a line.
u: It represents Unix-only line endings that recognize only the newline character by the ., ^, and $ match operators.
*/

SELECT REGEXP_LIKE ('England or America', 'l.nd') AS Result;  
SELECT REGEXP_LIKE ('MCA', 'BCA') AS Result;  
SELECT REGEXP_LIKE ('England Netherland Scotland', 'and$') AS Result;  
SELECT   
	REGEXP_LIKE ('India Indonesia', '^in', 'i') AS 'Case-Insensitive',  
	REGEXP_LIKE ('India Indonesia', '^in', 'c') AS 'Case-Sensitive';  
