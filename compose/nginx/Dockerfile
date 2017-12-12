FROM nginx:latest
RUN apt-get update && apt-get install nano
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.backup

RUN mkdir -p /etc/nginx/ssl/spotz_one/
COPY ssl-bundle.crt /etc/nginx/ssl/spotz_one/
COPY 1491293617.spotz.one.key /etc/nginx/ssl/spotz_one/
ADD conf.d/spotz-backend.conf /etc/nginx/conf.d/spotz-backend.conf