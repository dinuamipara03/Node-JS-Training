-- 6. JSON & Arrays: Store Employee Skills in JSON
-- Get employees with "Python" as a skill.
CREATE TABLE jsonemp (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(255),
    skills JSON
);

INSERT INTO jsonemp (employee_id, employee_name, skills)
VALUES
    (1, 'Ram', '["Java", "C++"]'),
    (2, 'Shyam', '["Python", "JavaScript"]'),
    (3, 'Rasha', '["Python", "SQL"]');
    
SELECT employee_id, employee_name,skills FROM jsonemp
WHERE JSON_CONTAINS(skills, '["Python"]');

-- 7. Create Views & Materialized Views
-- Create a view for employee project assignments.
create view assProjects as
select  e.id, p.name from employees e left join emp_projects ep on ep.employee_id=e.id left join projects p on p.id=ep.project_id ;
SELECT * FROM week6_3.assProjects;

-- 8.  Stored Procedure: Calculate Employee Bonus
-- Create a stored procedure to calculate bonuses based on salary and project count.
delimiter //
create procedure calculateBonus()
begin
select  e.id,e.name,count(ep.project_id) as  total_project,sum(distinct s.bonus) as bonus from employees e
inner join emp_projects ep on e.id = ep.employee_id
inner join salaries s on e.id = s.employee_id
group by e.id,e.name;
end //
delimiter ;
call week6_3.calculateBonus();