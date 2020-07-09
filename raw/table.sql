CREATE TABLE IF NOT EXISTS `products` (`id` INTEGER NOT NULL auto_increment , `brand` VARCHAR(255), `model` VARCHAR(255), `detail` VARCHAR(255), `memory` INTEGER, `storage` INTEGER, `camera` INTEGER, `screen` INTEGER, `price` INTEGER, `stock` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
-- Generate Table Product
CREATE TABLE IF NOT EXISTS `products` (`id` INTEGER NOT NULL auto_increment , `brand` VARCHAR(255), `model` VARCHAR(255), `detail` VARCHAR(255), `memory` INTEGER, `storage` INTEGER, `camera` INTEGER, `screen` INTEGER, `price` INTEGER, `stock` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

-- Generate Table Kriteria
CREATE TABLE IF NOT EXISTS `kriteria` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255), `value` INTEGER, `type` ENUM('cost', 'benefit'), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
