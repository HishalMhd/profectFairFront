---------------------------
MONGODB-DATABASE
---------------------------


-Database used to store and manage data permenantly


-
     SQL                                                          MongoDB
     ------------------------------------------------------------------------------------------------------------
     
     -Relational/Sql DBMS                                         -Document Oriented/NoSql DB
     
     -store data in Table with rows and columns                   -store data as collection of JSON document
     
     -fixed Schema                                                -Dynamic schema
     
     -optimises for complex join and transactions                 -optimized for performance and scalability

     -support rich set of data types                              -limited set of data types

     -Declerative Query Language                                  -expressive query language based JSON

     -ACID (Atomicity, Consistency, Isolation, Durability)        -CAP(Consistency, Availability and partition tolerence)

     -uses traditional business application                       -used in bigData and realtime applications
     




-to show every databases that we create 
           -show databases

-to switch the db that we create 
           -use database_name

-to show collections in the db 
           -show collections


-CRUD Operations


-to read all documents stored in a collection:find()
-read a document stored in a collection whose satisfiying a condition :findOne({key:value}), if condition satisfy the return entire document else null value


-to insert a single document to the collection : insertOne({key:value})

-insert multiple documents use:insertMany([{key:value},{key:value}....])

-display total document count in a collection :countDocuments()

-to limit count of document read  from a collection use:limit(number)

-to sort document based on a key : sort ({key:1/-1})

-if you want skip some document when sort use: skip(number)

-used to perform querying while reafing the documents $gt/$gte/$lt/$lte

-$in/$nin - used to check document included or not

-$expr used to compare different field in a document

-to update document : updateOne/ updateMany()

            -$set : to assign value
            -$inc :to increement value
            
            
            
            
            
-$push to insert data to an array in a document

-to delete a document from collection use deleteOne/deleteMany()

-aggregation:used to join multiple collection to get common result :aggregation()


syntax:{
     $lookup:{
          from:<collection to join>,
          localField:<Field from the input document>,
          foreignField:<Field from the document of "from" collection>,
          as:<output array field>
     }
}




















 
|----------------------------------------------------------------------|
|NODE 25 ---- SERVER/BACKEND                                           |
|----------------------------------------------------------------------|

-Runtime environment + js library




-Features
------------------------------------------------------------------------

-Extremely Fast
-Asynchronous
-single Threaded with event loop
-highly scalable
-open source


-Node js Global Objects


       - it can be accessed any where from node js app without exporting/importing
                  ex: console.log(),setTimeOut()




-Node js Module (File) System


       - a file is considered as module in node , to access data from one file, it has to export from there and before using it in another file it has to import


       - to import module : require('module_name'/'path')
       - to export module : exports/module.export
       



-node js built-in modules

       -fs: file system: handling file related events
       -http: create web server
       -https: create web server
       -crypto: providing tool like hasing, encryption etc.
       -events: work with event eventEmitter 
       -process: used to provide currently running process in the node js app                        
                        -environmentel variables : used to hold configuration/confidential data regarding the project, to
                        access environmental variable throughout the app use process.env.variable_name



-node js packages

       - used to resolve common problems
       - we have to insiall packages via npm
       - it adds package.json.package-lock.json and node_modules



-Backend concepts
      
       - client-server architecture
       - REST API: http protocol and JSON data 
       - CRUD OPERATION : create(POST),read(GET),update(PUT),delete(DELETE)
       - CORS(Cross Origin Resource Sharing)



----------------------------------------------------------------------------
EXPRESS JS -FRAMEWORK OF NODE JS 
----------------------------------------------------------------------------

-used in client side architecture 
-steps to create server using express



       - create a folder for server 
       - inside folder create a package.json file, using the command 'npm init -y'
       - update script inside package.json as "start":"node index.js"
       
       - install following packages 
                 - install express using npm i express 
                 - install cors using npm i cors 
                 -install dotenv using npm i dotenv
      
       - create .env file
       - create .gitignore file
       - import cors, express and dotenv in index.js
       - create server using express
       - use cors in server
       - use json parser(middleware) in your server-using express.json()
       - create port for server app
       - start to listen server app for client





-create  DB Using MONGODB Atlas: cloud version of Mongo DB


-create route in express server

      -create a folder
           -create a javascript file inside the folder
           -import express library
           -create an object for Router class in express, router object is capable of defining route fir the app 
           -export router from the file 
           -import router in idex.js
           -use router in express server app








-----------------------------------------------------------------------------------------------
MONGOOSE - Object Data Model(ODM) in nodejs
-----------------------------------------------------------------------------------------------

1. install mongoose using pm i mongoose
2. create schema: structure of the document that we want to store in a collection
-create object of Schema class
3.create create model: copy of collection in mongo DB, create model using model( )method
-create model to define structure and model for mongoDB using mongoose
-create a folder
I
-create a js file to define schema and model
-import mongoose
-get connection string
-use mongoose to connect db with node js
-import connection file in index.js




JSONWEBTOKEN
--------------------------------------------------------
-library used for authentication in client-server request
-used to securely transfer information over the web
-install using the command pm i jsonwebtoken
- generate token if login success
-token creation using jwt:use sign(payload, password)

      -payload:it is the data that we want to store inside token
      -password:can  be any data that has to define in .env file





MIDDLEWARE - Node js
---------------------------------------------------------

-used to control req-resp cycle in server. Before resolving a request server can perform any task (autharization, data format changing etc) using middleware
-middleware are function with 3 arguments,
      -request: will give you client request 
      -response: object, will give you response from server to client
      -next-method used to control request



-middleware can be of two type

      -application specific middleware:middleware will active for al client request
      -router specific middleware:middleware will active for specific client request


-setup autherization using middleware
      -create a folder for middleware
      -create a js file inside the folder to define middleware
      -token verify using jwt:verify(token,password),return a response if token verify else return an error






-MULTER -- node js middleware for handling multipart/formdata

---------------------------------------------------------------
-multer add body &file key to the req object
-install multer using npm i multer
-multer can be used to define storage space for uploaded file

-steps to handling multipart formdata using multer


       -create a js file inside middleware folder
       -import multer
       -create a folder in server to store uploaded file







-CONTEXT API - DATA SHARING TECHNIQUE IN REACT
--------------------------------------------------------------

1. Providing a centralized way to manage state across component
2. Share specific info (like state or function) with multiple components without props drilling 
3. Steps :-

         1. Creating a Context: Creating a Context using createContext() method
         2. Providing the context:use provider of context, so that helps to provide data to components 
         3. consuming the context: to use/Access data shared by context api use 'useContext()' hook
        