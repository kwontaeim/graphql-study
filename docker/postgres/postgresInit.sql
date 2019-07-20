CREATE DATABASE koders;

\c koders;

drop table if exists koders;
drop table if exists trips;

create table koders (
  id serial primary key,
  first_name varchar(128),
  last_name varchar(128),
  company varchar(128)
);

create table trips (
  id serial primary key,
  city varchar(255),
  country varchar(255),
  visited_by integer references koders not null
);

INSERT INTO "koders" ("first_name","last_name","company")
VALUES
(E'Heath', E'Ryu',E'Credit Karma'),
(E'Taeim', E'Kwon',E'Printerpix'),
(E'Julia', E'Hwang', E'GoSweat'),
(E'Ashley', E'Um', E'MyTutor');

INSERT INTO "trips" ("city", "country", "visited_by")
VALUES
(E'Reykjavik', 'US', 1),
(E'San Francisco', 'US', 1),
(E'Los Angeles', 'US', 1),
(E'Las Vegas', 'US', 1),
(E'Nice', E'France', 2),
(E'Stockholm', E'Sweden', 2),
(E'Margate', E'UK', 3),
(E'Glastonbury', E'UK', 3),
(E'Dubvurnik', E'Croatia', 3),
(E'Paris', E'France', 4),
(E'Sevilla', E'Spain', 4),
(E'Nice', E'France', 4);
