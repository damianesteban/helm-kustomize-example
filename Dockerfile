# build environment
FROM node:12.9.0-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install --silent
RUN yarn config set unsafe-perm true 
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.17.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
