#!/bin/bash

set -e

sh /etc/nginx/conf.d/prepare_config.sh

exec "$@"
