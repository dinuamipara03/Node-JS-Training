/*
*:Zero or more instances of string preceding it
+:One or more instances of strings preceding it
.:Any single character
?:Match zero or one instances of the strings preceding it.
^:caret(^) matches Beginning of string
$:End of string
[abc]:Any character listed between the square brackets
[^abc]:Any character not listed between the square brackets
[A-Z]:match any upper case letter.
[a-z]:match any lower case letter
[0-9]:match any digit from 0 through to 9.
[[:<:]]:matches the beginning of words.
[[:>:]]:matches the end of words.
[:class:]:matches a character class i.e. [:alpha:] to match letters, [:space:] to match white space, [:punct:] is match punctuations and [:upper:] for upper class letters.
p1|p2|p3:Alternation; matches any of the patterns p1, p2, or p3
{n}:n instances of preceding element
{m,n}:m through n instances of preceding element
*/

-- SELECT FIRSTNAME FROM Student WHERE FIRSTNAME REGEXP 'RAK ?'; 
-- SELECT FIRSTNAME FROM Student WHERE FIRSTNAME REGEXP 'PR|RA' ;
-- SELECT FIRSTNAME FROM Student WHERE FIRSTNAME REGEXP '^PR' ;
-- SELECT FIRSTNAME FROM Student WHERE FIRSTNAME REGEXP 'ESH$';
-- SELECT FIRSTNAME FROM Student WHERE FIRSTNAME REGEXP '[JN]' ;
SELECT FIRSTNAME FROM Student WHERE FIRSTNAME REGEXP '[b-g].[a]' ;