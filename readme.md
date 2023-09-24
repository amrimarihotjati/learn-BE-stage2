## Installer

Inisialisasi Package.json, menggunkan y supaya langsung terisi
1. npm i -y

Install ExpressJS
1. npm i express && npm i --save-dev @types/express

Install Nodemon
1. npm i typescript nodemon

Inisialisasi TypeScript
tsc --init

## Penjelasan Struktur Folder

1. Service
>> Logic untuk melakukan query ke databasenya

2. Controller
>> Jembatan antara service dan routes

3. Routes
>> Grouping untuk logic url

Alur
Routes >> Controller >> Services

## Sequelize Session
1. npm i sequelize sequelize-cli sequelize-typescript
2. npm install mysql2
3. npm i --save-dev @types/node
4. npm i dotenv

>> inisialisasi sequelize
npx sequelize init

>> create sequelize
npx sequelize-cli model:generate --name Todos --attribute name:string

>> Migrate
npx sequelize-cli db:migrate

>>Seeders
npx sequelize-cli seed:generate --name todos-seed
npx sequelize-cli db:seed:all