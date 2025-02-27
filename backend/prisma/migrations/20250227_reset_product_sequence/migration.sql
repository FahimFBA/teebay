-- Reset the auto-increment sequence for the Product table
SELECT setval(pg_get_serial_sequence('"Product"', 'id'), coalesce(max(id), 0) + 1, false) FROM "Product";
