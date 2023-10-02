FROM node@sha256:3139aa3e8915e7c135623498d29f20a75ee3bfc41cf321ceaa59470b2fffc1a5 AS builder
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

ARG UID
ARG GID
ARG HOST_DOCKER_GROUP_GID
ARG NAME=vscode
ENV TZ Asia/Tokyo

USER root
COPY --from=composer:2.5.8 /usr/bin/composer /usr/bin/composer
COPY --from=builder /usr/local/bin/node /usr/local/bin/
COPY --from=builder /usr/local/lib/node_modules/ /usr/local/lib/node_modules/
RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs \
    && ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npx \
    && npm install -g pnpm

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
    # php8.1 php8.1-intl php8.1-mbstring php8.1-mysql php8.1-gd php8.1-fpm php8.1-xml php8.1-curl \
    vim git \
    iputils-ping net-tools dnsutils \
    && apt-get clean && rm -rf /var/lib/apt/lists/* && apt-get autoremove

COPY ./docker-debian.sh /docker-debian.sh
# curl利用のインストールで、デフォルトシェルの変更が必要かもしれない
RUN groupmod -g ${GID} $NAME && usermod -u $UID $NAME --shell /bin/bash
    # groupmod -g $HOST_DOCKER_GROUP_GID docker

RUN bash /docker-debian.sh &&\
    echo 'export LANG=C.utf8' >> /home/vscode/.bashrc \
    && echo "alias dc='docker compose -f compose.yamlcompose.yaml'" >> /home/vscode/.bashrc

USER vscode
# RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"

WORKDIR /workspace
CMD ["sleep", "infinity"]
