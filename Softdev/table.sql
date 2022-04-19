CREATE TABLE book(
    id SERIAL PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    author VARCHAR (100) NOT NULL,
    year DATE,
    created_on TIMESTAMP
);

INSERT INTO book(id ,title,author,year)VALUES('1','Harry potter','j.k rowling','10-10-2001');
-- INSERT INTO book(id ,title,author,year)VALUES('2','The diamond eye','kate quin','25-06-1997');
-- INSERT INTO book(id ,title,author,year)VALUES('3','Midnight library','matt haig','16-05-1995');
