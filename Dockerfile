FROM node:14 as node
# Setting the remote DIR to /app
WORKDIR /
# COPY the current folder
COPY . .
# run npm i (install all the dependencies)
RUN npm install
# this will generate dist
EXPOSE 3000

CMD ["npm", "start"]
