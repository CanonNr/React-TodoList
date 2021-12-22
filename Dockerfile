FROM nginx:latest
ADD ./build /usr/share/nginx/html/

EXPOSE 8080