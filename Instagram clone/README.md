# Mini Instgram Clone

## What is it about ?

 A database of generated randomized fake names and photos to clone Instagram application. The intention of creating such a clone is a demonstration of ability to use one-to-many and many-to-many relationships,tables, and triggers. Data analysis process application through the usage of  queries, join tables ( inner, left, or  right), aggregate functions, and logical operation has been performed on the data to gather information such as identify the most popular photo, identify inactive users, most popular photos, and finding bots.

## What are the files attached and what do they contain ?

The Attached are Schema.sql and Challenges.sql

### a) Schema.sql file

Schema.sql file contains all the SQL code to intiate a mini instagram clone. The file performs 3 main tasks

#### 1) Deleting any database with the name of "Instagram" and then provsioning a new one with the same name, "Instagram" to reassure that the database is fresh and new. Then we performed the command of using this provisioned database.

#### 2) Provisioning of the tables used for our clone and setting the data types of each table alongside defining the necessary relations and  keys for each table. 

#### NOTE: After the creation of each table there is a commented function which was used to test the functionality of the tables and ensure the tables are meeting the desired expectations.

#### 3) A generated data for each table to be inserted to apply data analysation process. These data consistes of approximatley,(~), 7488 rows to "comments table", ~ 7623 rows applied to "follows" table, ~ 8782 rows in the "likes" table, 501 rows in the "photo_tags" table, 257 rows in "photos" set, 21 tags, and 100 users.

### b) Challenges.sql file

This file contains commands performed to execute desired outcomes. The desired outcome is defined ahead of the command function