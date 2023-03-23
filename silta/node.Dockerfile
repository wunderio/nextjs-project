
FROM wunderio/silta-node:18-alpine-v0.1

COPY . /app

CMD npm run start
