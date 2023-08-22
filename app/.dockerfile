FROM node:18-alpine
EXPOSE 80:80

WORKDIR /usr/app
ADD ./build ./build/
ADD ./package.json ./

RUN npm install --quiet
CMD ["npm", "run", "start"]