CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name varchar(54),
  email varchar(54),
  password text,
  auth_id text,
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(54),
  description TEXT,
  image_url TEXT,
  price NUMERIC
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  user_id references user(id)
);

CREATE TABLE order_product(
  order_id references orders(id),
  product_id references products(id),
  quantity integer,
  total NUMERIC
)
