FROM node:18-alpine
EXPOSE 3000:3000

WORKDIR /usr/app
ADD ./build ./build/
ADD ./package.json ./

RUN npm install --quiet
CMD ["npm", "run", "start"]