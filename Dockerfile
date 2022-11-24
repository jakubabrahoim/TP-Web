FROM nginx:1.19-alpine

## Remove default nginx website
RUN rm -rf /etc/nginx/conf.d/*

## Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/00-default.conf

COPY ./build /usr/share/nginx/html