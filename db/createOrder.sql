insert into orders(user_id)
values ($1)
RETURNING *;
