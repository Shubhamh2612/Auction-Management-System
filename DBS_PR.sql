/* Creating the database  */
CREATE DATABASE bultwttoppdkfltxkqhf;

USE bultwttoppdkfltxkqhf; 

CREATE TABLE users (
    uid varchar(45) NOT NULL,
    name varchar(45) NOT NULL,
    balance int NOT NULL,
    PRIMARY KEY (uid)
) ;

CREATE TABLE inventory (
    product_id varchar(45) NOT NULL,
    product_name varchar(45) NOT NULL,
    product_baseprice int NOT NULL,
    PRIMARY KEY (product_id)
) ;

CREATE TABLE bidding_table (
    item_id varchar(45) NOT NULL,
    current_highest_buyer varchar(45),
    time varchar(45) NOT NULL,
    current_price int,
    base_price int NOT NULL,
    PRIMARY KEY (item_id)
) ;













