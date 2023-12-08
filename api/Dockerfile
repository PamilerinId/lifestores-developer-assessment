# pull official base image
FROM python:3.9-buster

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
# RUN apt-get update \
#     && apt-get install postgresql-dev gcc python3-dev musl-dev \
#     && apt-get install jpeg-dev zlib-dev libjpeg nginx vim -y --no-install-recommends \
#     && pip install Pillow

# RUN apt-get update && apt-get install nginx vim -y --no-install-recommends

# COPY nginx.default /etc/nginx/sites-available/default

# RUN ln -sf /dev/stdout /var/log/nginx/access.log \
#     && ln -sf /dev/stderr /var/log/nginx/error.log

# install dependencies
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .
COPY .env .

RUN chown -R www-data:www-data /usr/src/app

# RUN chmod 755 start-server.sh

# start server
EXPOSE 8000
# STOPSIGNAL SIGTERM
# CMD ["./start-server.sh"]


