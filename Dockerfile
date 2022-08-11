FROM node:13.12.0-alpine AS server-build   
WORKDIR /root/
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm i
RUN npx tsc

EXPOSE 3001

CMD [ "node", "./dist/app.js" ]