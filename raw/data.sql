INSERT INTO `products` (`id`,`brand`,`model`,`detail`,`memory`,`storage`,`camera`,`screen`,`price`,`stock`,`createdAt`,`updatedAt`) VALUES (1,'apple','apple iphone 7','lorem ipsum',3,256,12,'5,5',5999000,50,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(2,'apple','apple iphone 11 pro max','lorem ipsum',4,64,48,'6,5',21799000,10,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(3,'apple','apple iphone XS','lorem ipsum',4,256,31,'5,6',16999000,50,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(4,'asus','asus zenfone 6','lorem ipsum',6,128,48,'6,4',6999000,150,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(5,'LG','LG V30 Plus','lorem ipsum',4,128,16,'6',5850000,200,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(6,'oppo','oppo A9 2020','lorem ipsum',8,128,48,'6,5',3599000,150,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(7,'oppo','oppo A91','lorem ipsum',8,128,48,'6,4',3599000,50,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(8,'samsung','samsung galaxy A30','lorem ipsum',4,64,25,'6,4',3099000,100,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(9,'samsung','samsung galaxy A50','lorem ipsum',4,64,48,'6,4',3149000,150,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(10,'samsung','samsung galaxy s20','lorem ipsum',8,128,48,'6,7',11999000,200,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(11,'vivo','vivo y17','lorem ipsum',4,128,20,'6,35',2599000,50,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(12,'vivo','vivo y30','lorem ipsum',4,128,13,'6,47',2799000,150,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(13,'xiaomi','xiaomi redmi note 8 pro','lorem ipsum',6,128,48,'6,3',3399000,100,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(14,'xiaomi','xiaomi mi 9 lite','lorem ipsum',6,64,32,'6,39',3999000,50,'2020-07-08 17:48:20','2020-07-08 17:48:20'),(15,'xiaomi','xiaomi redmi 8A','lorem ipsum',2,32,12,'6,22',1499000,150,'2020-07-08 17:48:20','2020-07-08 17:48:20');

INSERT INTO `kriteria` (`id`,`kode`,`name`,`value`,`type`,`createdAt`,`updatedAt`) VALUES (1,'K1','price',4,'cost','2020-07-09 01:55:26','2020-07-09 01:55:26'),(2,'K2','ram',3,'benefit','2020-07-09 01:55:26','2020-07-09 01:55:26'),(3,'K3','storage',3,'benefit','2020-07-09 01:55:26','2020-07-09 01:55:26'),(4,'K4','camera',3,'benefit','2020-07-09 01:55:26','2020-07-09 01:55:26'),(5,'K5','screen size',2,'benefit','2020-07-09 01:55:26','2020-07-09 01:55:26');

INSERT INTO `matriks` (`id`,`id_product`,`K1`,`K2`,`K3`,`K4`,`K5`,`createdAt`,`updatedAt`) VALUES (1,1,5999000,3,256,12,'5,5','2020-07-09 01:55:26','2020-07-09 01:55:26'),(2,2,21799000,4,64,48,'6,5','2020-07-09 01:55:26','2020-07-09 01:55:26'),(3,3,16999000,4,256,31,'5,6','2020-07-09 01:55:26','2020-07-09 01:55:26'),(4,4,6999000,6,128,48,'6,4','2020-07-09 01:55:26','2020-07-09 01:55:26'),(5,5,5850000,4,128,16,'6','2020-07-09 01:55:26','2020-07-09 01:55:26'),(6,6,3599000,8,128,48,'6,5','2020-07-09 01:55:26','2020-07-09 01:55:26'),(7,7,3599000,8,128,48,'6,4','2020-07-09 01:55:26','2020-07-09 01:55:26'),(8,8,3099000,4,64,25,'6,4','2020-07-09 01:55:26','2020-07-09 01:55:26'),(9,9,3149000,4,64,48,'6,4','2020-07-09 01:55:26','2020-07-09 01:55:26'),(10,10,11999000,8,128,48,'6,7','2020-07-09 01:55:26','2020-07-09 01:55:26'),(11,11,2599000,4,128,20,'6,35','2020-07-09 01:55:26','2020-07-09 01:55:26'),(12,12,2799000,4,128,13,'6,47','2020-07-09 01:55:26','2020-07-09 01:55:26'),(13,13,3399000,6,128,48,'6,3','2020-07-09 01:55:26','2020-07-09 01:55:26'),(14,14,3999000,6,64,32,'6,39','2020-07-09 01:55:26','2020-07-09 01:55:26'),(15,15,1499000,2,32,12,'6,22','2020-07-09 01:55:26','2020-07-09 01:55:26');