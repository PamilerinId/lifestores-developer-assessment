FROM node:18-alpine

WORKDIR '/app/frontend'

COPY frontend/package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]