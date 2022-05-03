CREATE TABLE book(
    id SERIAL PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    author VARCHAR (100) NOT NULL,
    year DATE,
    created_on TIMESTAMP
);

INSERT INTO book(id ,title,author,year)VALUES('1','Harry potter','j.k rowling','10-10-2001');
