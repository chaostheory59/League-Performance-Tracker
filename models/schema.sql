DROP DATABASE IF EXISTS summonerdb;
CREATE DATABASE summonerdb;

use summonerdb;
drop table summoners;

create table summoners(
id integer not null auto_increment,
summonerName varchar(100) not null,
summonerLevel integer not null,
role varchar(100) not null,
lane varchar(100) not null,
primary key (id)
);
select * from summoners;