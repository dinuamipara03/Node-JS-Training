-- CREATE TABLE person(
--     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     info XML
-- );

-- INSERT INTO person (info)
-- VALUES (
--     XMLPARSE(DOCUMENT '<?xml version="1.0" encoding="UTF-8"?>
--     <person>
--         <name>John Doe</name>
--         <age>35</age>
--         <city>San Francisco</city>
--     </person>')
-- );

-- INSERT INTO person (info)
-- VALUES
-- (
--     XMLPARSE(DOCUMENT '<?xml version="1.0" encoding="UTF-8"?>
--     <person>
--         <name>Jane Doe</name>
--         <age>30</age>
--         <city>San Francisco</city>
--     </person>')
-- ),
-- (
--     XMLPARSE(DOCUMENT '<?xml version="1.0" encoding="UTF-8"?>
--     <person>
--         <name>John Smith</name>
--         <age>40</age>
--         <city>New York</city>
--     </person>')
-- ),
-- (
--     XMLPARSE(DOCUMENT '<?xml version="1.0" encoding="UTF-8"?>
--     <person>
--         <name>Alice Johnson</name>
--         <age>30</age>
--         <city>Los Angeles</city>
--     </person>')
-- );

-- SELECT
--     (xpath('/person/name/text()', info))[1]::text AS name,
--     (xpath('/person/age/text()', info))[1]::text::integer AS age,
--     (xpath('/person/city/text()', info))[1]::text AS city
-- FROM
--     person;

-- SELECT *
-- FROM person
-- WHERE (xpath('/person/name/text()', info))[1]::text = 'Jane Doe';

SELECT * FROM person;