FROM node:stretch-slim 
#create app directory
WORKDIR /usr/src/app/examenintegracion
COPY package.json .
RUN npm install
COPY .  .
EXPOSE 3000
CMD ["npm" , "start"]