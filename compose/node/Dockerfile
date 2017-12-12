FROM node:6.12.0-onbuild

RUN npm install -g loopback-cli

RUN npm install -g pm2

RUN chown -R node:node /usr/src/app/

USER node

RUN mkdir storage

CMD ["pm2", "start", "--no-daemon", "processes.json"]
