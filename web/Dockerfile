FROM node:12.16.3-alpine as build

WORKDIR /app

COPY ["./package.json", "./yarn.lock", "./"]
RUN yarn install
COPY . ./

RUN yarn build

FROM node:12.16.3-alpine
COPY --from=build /app/build /build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-n", "-s", "./build"]