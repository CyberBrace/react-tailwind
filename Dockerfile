# After Build, for continous workflow

FROM node:19-alpine

WORKDIR /react-skp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4040

CMD ["npm", "start"]
