    DROP DATABASE IF EXISTS slideShowData;
    CREATE DATABASE slideShowData;
    USE slideShowData;
    
    
        
    CREATE TABLE products (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        productId INT,
        productName varchar (500),
        productDescription varchar (500),
        color varchar (500),
        price decimal(6,2) NOT NULL,
        imageURL varchar(500)
       
    );

