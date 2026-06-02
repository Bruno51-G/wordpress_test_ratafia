SELECT * FROM wp_postmeta WHERE meta_value LIKE "%localhost%"

UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, 'http://localhost:8098', 'http://localhost')