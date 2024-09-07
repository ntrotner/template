FROM node:20-bullseye
COPY ./src/ui /src
WORKDIR /src
RUN npm install
ENTRYPOINT if [ "$app_env" = "prod" ] ; then npm run preview ; else npm run dev ; fi
