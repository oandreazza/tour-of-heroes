docker-compose up -d 
docker-compose exec backend php artisan migrate
docker-compose exec backend php artisan seed php artisan db:seed --class=HeroesTableSeeder