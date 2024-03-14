INSERT INTO department(name)
VALUES
('Engineering'),
('Information Technology'),
('Management'),
('Marketing'),
('Operations'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('Engineer', 110000, 1),
('IT Specialist', 100000, 2),
('Manager', 100000, 3),
('Marketing Coordinator', 90000, 4),
('Operations Coordinator', 90000, 5),
('HR Generalist', 80000, 6);

INSERT INTO employee  (first_name, last_name, role_id, manager_id)
VALUES
("Ben", "Smith", 1, 5),
("George", "Frank", 2, 5),
("Elly", "Smith", 3, 5),
("Brandon", "Roberts", 4, 5),
("Tim", "Aiori", 5, NULL),
("Bill", "Tinsel", 6, 9),
("Jimmy", "Wilcut", 1, 9),
("Sarah", "Heinz", 2, 9),
("Jill", "Patty", 5, NULL)