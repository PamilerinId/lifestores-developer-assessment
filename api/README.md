you need to have docker installed for this

after cloning run:
docker-compose build
docker-compose run web python manage.py migrate
docker-compose run web python manage.py loaddata products
docker-compose run web python manage.py createsuperuser
 and finally
docker-compose up
then navigate to localhost:8000/graphql