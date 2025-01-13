FROM nginx:latest

COPY ./prepare_config.sh /etc/nginx/conf.d/prepare_config.sh
COPY ./docker_entrypoint.sh /docker_entrypoint.sh

ADD ./default.conf /etc/nginx/conf.d/default.template

ENTRYPOINT ["./docker_entrypoint.sh"]