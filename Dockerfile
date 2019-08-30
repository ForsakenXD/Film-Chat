
# Setup and build the client

FROM node:10 as client



WORKDIR /usr/src/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build


# Setup the server

FROM node:10

WORKDIR /usr/src/app/server/
COPY --from=client /usr/src/app/client/build/ ./client/build/

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]