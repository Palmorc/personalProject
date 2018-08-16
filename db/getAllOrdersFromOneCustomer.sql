select p.name, p.price, p.description, o.user_id, op.*
from order_product op
INNER JOIN orders o on o.id = op.order_id
INNER JOIN products p on p.id = op.product_id
WHERE op.order_id = $1
