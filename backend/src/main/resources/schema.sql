CREATE TABLE IF NOT EXISTS COURSES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    valoration INT,
    images VARCHAR(255)
);