# Ministry of Labor and Social Affairs site

My take on the site: [link](https://eam-ministry.herokuapp.com/)

The official site: [official](https://www.ypakp.gr/)

```
docker run -d -p 27017:27017 mongo:4.2.6
docker cp ./sdi1700183 eam-mongo:/dump
docker exec -it eam-mongo bash
mongorestore -d eam /dump/sdi1700183
```

```
cd ./server
docker build -t eam-server .
docker start -d --name eam-server -p 8080:8080 eam-server
```

```
cd ./web
docker build -t eam-web .
docker start -d --name eam-server -p 3000:3000 eam-web
```
