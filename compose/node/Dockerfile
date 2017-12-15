FROM node:6.12.0-onbuild

RUN npm install -g loopback-cli

RUN npm install -g pm2

RUN mkdir -p /usr/src/app/storage

RUN chown -R node:node /usr/src/*

USER node

CMD ["pm2", "start", "--no-daemon", "processes.json"]
