CREATE DATABASE IF NOT EXISTS my_app_database
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE my_app_database;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO users (name) VALUES ('テスト太郎');
