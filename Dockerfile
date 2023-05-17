# After Build, for continous workflow

FROM node:19-alpine

WORKDIR /react-stp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
