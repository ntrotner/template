FROM couchdb:latest

COPY ./src/database/config/*.ini /opt/couchdb/etc/

RUN if [ "$app_env" = "prod" ] ; then rm /opt/couchdb/etc/local.dev.ini ; else rm /opt/couchdb/etc/local.prod.ini ; fi
