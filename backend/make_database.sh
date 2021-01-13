
username=drishti
mysql -u $username -p < "CREATE DATABASE [IF NOT EXISTS] 'period_tracker';"

mysql -u $username -p period_tracker < dummy_db.sql 