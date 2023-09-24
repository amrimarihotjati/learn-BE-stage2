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