CREATE TABLE datasetfile (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    created_by_user VARCHAR(200) DEFAULT NULL,
    password VARCHAR(200) DEFAULT NULL,
    name VARCHAR(200), 
    description VARCHAR(2000),
    file_csv VARCHAR(200),
    provider VARCHAR(200),
    date_creation DATE,
    confirmed BOOLEAN
);

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(200),
    user_name VARCHAR(200),
    first_name VARCHAR(200),
    last_name VARCHAR(200), 
    email VARCHAR(400),
    is_staff BOOLEAN,
    is_active BOOLEAN,
    date_join DATE
);
