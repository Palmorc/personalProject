INSERT INTO products(name,description,image_url,price)
VALUES(${name},${description},${image_url},${price})
RETURNING *;
