CREATE TABLE IF NOT EXISTS projects(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL CHECK (name <> ''),
    priority INT NOT NULL,
    description TEXT,
    deleverydate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL CHECK (name <>  ''),
    done BOOLEAN,
    projectID INT REFERENCES projects(id)
);

INSERT INTO projects(name, priority, description, deleverydate) VALUES('Make a Web App', 1, 'Using JavaScript', '2019-05-12');
INSERT INTO projects(name, priority, description, deleverydate) VALUES('Make an App', 1, 'Using Dart', '2019-05-13');
INSERT INTO projects(name, priority, description, deleverydate) VALUES('Make a Desktop App', 1, 'Using C++', '2019-05-14');
INSERT INTO projects(name, priority, description, deleverydate) VALUES('Make an App', 1, 'Using React', '2019-05-13');
INSERT INTO projects(name, priority, description, deleverydate) VALUES('Make a Desktop App', 2, 'Using C#', '2019-05-14');


-- INSERT TASKS DATA --

INSERT INTO tasks(name, done, projectID) VALUES ('Donwload Vuejs', false, 1);
INSERT INTO tasks(name, done, projectID) VALUES ('Create UI Web', false, 1);
INSERT INTO tasks(name, done, projectID) VALUES ('Donwload Flutter', false, 2);
INSERT INTO tasks(name, done, projectID) VALUES ('Donwload Vuejs', false, 2);