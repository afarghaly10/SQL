-- 1) Find the 5 oldest users

select username, created_at from users
order by created_at
limit 5;

-- 2) What day of the week do most users register on?

select dayname(created_at), count(created_at) from users
group by dayname(created_at)
order by count(created_at) desc
limit 2;

-- 3) Find the users who have never posted a photo

select username,image_url 
from users
left join photos
on photos.user_id=users.id
Where photos.image_url is NULL;

-- 4) most likes on a single photo

SELECT
    username,
    photos.id,
    photos.image_url, 
    COUNT(likes.created_at) AS 'Most liked'
FROM likes
JOIN photos
    ON likes.photo_id =photos.id
JOIN users
    ON users.id = photos.user_id
GROUP BY image_url
ORDER BY COUNT(likes.created_at) DESC
LIMIT 1;

-- 5) How many times does the average user post?

-- avg = total number of photos / total number of users
SELECT (SELECT Count(*) 
        FROM   photos) / (SELECT Count(*) 
                          FROM   users) AS avg; 

-- 6) What are the top 5 most commonly used hashtags?

select tag_name, count(tag_id) as 'Commonly Used'
from photo_tags
join tags
on tags.id = photo_tags.tag_id
group by tag_name -- on can use tags.id as the solution
order by count(tag_id) desc
limit 5;

-- 7) Find users who have liked every single photo on the site

SELECT username, 
       Count(likes.created_at) AS num_likes 
FROM   users 
       INNER JOIN likes 
               ON users.id = likes.user_id 
GROUP  BY likes.user_id 
HAVING num_likes = (SELECT Count(*) 
                    FROM   photos); 
                    
-- 8) Find users who have never commented on a photo

select username, count(likes.created_at) as num_likes
from users 
left join likes
on likes.user_id = users.id
group by likes.user_id
having num_likes = 0;

-- 9) Find the percentage of our users who have either never commented on a photo or have commented on every photo
                                
SELECT ROUND((COUNT(*)/(SELECT COUNT(*) FROM users)*100),2) AS percent
    FROM  (SELECT IFNULL(user_id,0) AS times,COUNT(*) AS count
FROM users 
    LEFT JOIN comments
    ON users.id=comments.user_id
GROUP BY users.id
HAVING times=0 OR count=(SELECT COUNT(*) FROM photos)) AS total;