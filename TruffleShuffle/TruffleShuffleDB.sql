Use master
GO
DROP DATABASE  TruffleShuffleDB;
    GO
CREATE DATABASE TruffleShuffleDB;
GO
USE TruffleShuffleDB;
GO
CREATE TABLE Users (
    ID int NOT NULL PRIMARY KEY IDENTITY(1,1),
    UserName varchar (45) NOT NULL,
    UserPassword varchar (45) NOT NULL,
    DisplayName varchar (100) NOT NULL,
    WeightLossGoal int NOT NULL,
    
);
GO
CREATE TABLE Weights (
    ID int NOT NULL PRIMARY KEY IDENTITY(1,1),
    UserID int Foreign KEY REFERENCES Users(ID),
    WeightInDate date NOT NULL,
    CurrentWeight int NOT NULL,
    
);
INSERT INTO Users (UserName, UserPassword, DisplayName, WeightLossGoal)
VALUES 
( 'Chunk','ougsdiyfowih2l42','Goonie4Lyfe',30)
GO
INSERT INTO Weights (UserID,WeightInDate,CurrentWeight)
VALUES 
('1','1/1/2020','280'),
('1','2/1/2020','250'),
('1','3/1/2020','220'),
('1','4/1/2020','230'),
('1','5/1/2020','210');
GO