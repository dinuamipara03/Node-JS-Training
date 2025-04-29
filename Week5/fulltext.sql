-- CREATE TABLE test1 (
--   id int(11) NOT NULL COMMENT 'unique id',
--   text text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
-- );

-- INSERT INTO test1 (id, text) VALUES
-- (1288, 'i just don\'t know what to say.'),
-- (1340, 'so what?'),
-- (1344, 'that was probably what influenced their decision.'),
-- (1345, 'i\'ve always wondered what it\'d be like to have siblings.');

-- ALTER TABLE test1 ADD FULLTEXT KEY text (text);

-- select * from test1;
  
-- select *, 
--     match(text) against ('what') as hasWhat,
--     match(text) against ('just') as hasJust
-- from test1;

 SELECT COUNT(*) FROM test1 WHERE MATCH(text) AGAINST('i\'ve always wondered what it\'d be like to have siblings.');
