CREATE DATABASE IF NOT EXISTS exampledb;

USE exampledb;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    unique_id  VARCHAR(255) NOT NULL,
    username   VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_Users_UniqueId UNIQUE (unique_id)
);

INSERT INTO users (unique_id, username) VALUES ('9ac307f5-f85b-4b45-a990-743fa0d1e59c', 'q');
INSERT INTO users (unique_id, username) VALUES ('8c23f644-58af-4be5-abcb-5ffe2982fa99', 'qw');