FROM nginx:stable-bullseye

ARG UID
ARG GID

RUN groupmod -g ${GID} nginx && usermod -u ${UID} nginx
RUN touch /var/run/nginx.pid && \
    \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx && \
    chsh -s /usr/sbin/nologin root && \
    \
    mkdir -p mkdir /etc/nginx/certs && \
    chown -R nginx:nginx /etc/nginx/certs

USER nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx
