FROM node:6.9.1

ENV APP_DIR /app
RUN npm install -g angular-cli typings
RUN mkdir -p $APP_DIR
COPY . $APP_DIR
WORKDIR $APP_DIR
RUN npm install
RUN typings install
RUN cp start.sh / && chmod +x /start.sh

EXPOSE 4200 49152

CMD ["/start.sh"]
