-- 1) Find Earliest Date A User Joined

-- select date_format(min(created_at), '%M %D %Y') as 'earliest_date' from users;

-- 2) Find Email Of The First (Earliest)User

-- select email,date_format(min(created_at), "%M %D %Y") as "created_at" from users where created_at = (select min(created_at) from users);

-- 3) Users According To The Month They Joined

-- select distinct date_format(created_at,'%M') as month,count(email) as count from users group by month order by count desc;

-- 4) Count Number of Users With Yahoo Emails

select count(email) as yahoo_users from users where email like "%yahoo.com";

-- 5) Calculate Total Number of Users for Each Email Host

SELECT substring_index(email, "@", -1) as provider, COUNT(*) AS total_users FROM users GROUP BY provider ORDER BY total_users DESC;

--   Alternative solution

SELECT CASE 
         WHEN email LIKE '%@gmail.com' THEN 'gmail' 
         WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
         WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
         ELSE 'other' 
       end      AS provider, 
       Count(*) AS total_users 
FROM   users 
GROUP  BY provider 
ORDER  BY total_users DESC;