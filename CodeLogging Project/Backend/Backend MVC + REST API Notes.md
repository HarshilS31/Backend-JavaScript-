# 📚 CodeProgress Backend Revision Notes

---

# 🎯 Goal

Build a REST API using:

- Express.js
- MongoDB Atlas
- Mongoose
- MVC Architecture

that allows us to:

- Create Progress Logs
- Fetch All Logs
- Delete Logs

---

# Project Architecture

```text
                Client
       (Postman / React)

               │
               ▼
           app.js
    (Middlewares + Routes)

               │
               ▼
      progressRoutes.js

               │
               ▼
  progressControllers.js

               │
               ▼
    progressModel.js

               │
               ▼
        MongoDB Atlas
```

Every request follows this exact path.

---

# Folder Structure

```text
Backend
│
├── src
│   │
│   ├── controllers
│   │      progressControllers.js
│   │
│   ├── routes
│   │      progressRoutes.js
│   │
│   ├── models
│   │      progressModel.js
│   │
│   ├── db
│   │      connectDB.js
│   │
│   └── app.js
│
├── server.js
│
└── package.json
```

---

# What each file does

## app.js

Creates the Express application.

Registers middlewares.

Registers routes.

```js
const app = express();

app.use(cors());

app.use(express.json());

app.use(progressRoutes);

export default app;
```

Important:

Without

```js
express.json()
```

this

```js
req.body
```

will become

```js
undefined
```

---

## server.js

Starts the server.

Connects the database.

```js
connectDB();

app.listen(PORT);
```

---

## progressModel.js

Defines the MongoDB schema.

```js
const progressSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    category:{
        type:String,
        required:true,
        enum:["DSA","React","Node.js","Project"]
    }

})
```

Then create the model.

```js
const progModel =
mongoose.model("progress",progressSchema);

export default progModel;
```

---

# Why Mongoose?

MongoDB is schema-less.

Mongoose allows us to:

- Create Schemas
- Validate Data
- Interact with MongoDB easily

Instead of writing raw MongoDB queries.

---

# Controllers

Controllers contain the Business Logic.

They receive the request.

Talk to the database.

Return a response.

---

## Create Progress

```js
export const createProgress = async(req,res)=>{

    try{

        const data = await progModel.create(req.body);

        return res.status(201).json({

            message:"Progress tracked successfully",

            data

        });

    }

    catch(error){

        return res.status(500).json({

            message:error.message

        });

    }

}
```

Flow:

```text
req.body

↓

create()

↓

MongoDB

↓

Return Created Document
```

---

## Get All Progress

```js
export const getAllProgress = async(req,res)=>{

    try{

        const data = await progModel.find();

        return res.status(200).json({

            message:"Progress fetched successfully",

            data

        });

    }

    catch(error){

        return res.status(500).json({

            message:error.message

        });

    }

}
```

Flow

```text
find()

↓

All Documents

↓

Return Array
```

---

## Delete Progress

```js
export const deleteProgress = async(req,res)=>{

    try{

        const id = req.params.id;

        await progModel.findByIdAndDelete(id);

        return res.status(200).json({

            message:"Progress deleted successfully"

        });

    }

    catch(error){

        return res.status(500).json({

            message:error.message

        });

    }

}
```

Flow

```text
req.params.id

↓

findByIdAndDelete()

↓

MongoDB

↓

Success Response
```

---

# req Cheat Sheet

## req.body

Data sent inside request body.

Used in

```http
POST
```

Example

```js
req.body.title
```

---

## req.params

Used for URL parameters.

Example route

```http
DELETE /progress/:id
```

Suppose request is

```http
DELETE /progress/6892abc...
```

Express automatically creates

```js
req.params = {

    id:"6892abc..."

}
```

Access it

```js
req.params.id
```

NOT

```js
req.params._id
```

---

# Routes

Routes connect URLs with controllers.

```js
router.post(
"/progress",
createProgress
);

router.get(
"/progress",
getAllProgress
);

router.delete(
"/progress/:id",
deleteProgress
);
```

Notice

We pass

```js
createProgress
```

NOT

```js
createProgress()
```

because Express calls it when a request arrives.

---

# app.use()

Registers middleware.

```js
app.use(cors());

app.use(express.json());

app.use(progressRoutes);
```

Again

Don't do

```js
progressRoutes()
```

---

# REST API

REST = Standard way of designing APIs.

Rule:

URL → Resource

HTTP Method → Action

Correct

```http
POST /progress

GET /progress

DELETE /progress/:id
```

Avoid

```http
/createProgress

/deleteProgress

/getProgress
```

---

# API Flow

```text
POST /progress

↓

Router

↓

Controller

↓

Model

↓

MongoDB

↓

JSON Response
```

Exactly same flow for GET and DELETE.

---

# Mongoose Methods Learned

Create document

```js
Model.create()
```

Fetch all documents

```js
Model.find()
```

Delete by id

```js
Model.findByIdAndDelete()
```

---

# Status Codes

201

Created Successfully

---

200

Request Successful

---

500

Internal Server Error

---

# Common Mistakes

❌ Forgetting

```js
await
```

---

❌ Missing

```js
express.json()
```

---

❌ Calling controller

```js
createProgress()
```

instead of

```js
createProgress
```

---

❌ Calling router

```js
progressRoutes()
```

instead of

```js
progressRoutes
```

---

❌ Using

```js
req.params._id
```

instead of

```js
req.params.id
```

---

❌ Wrong import path

Especially with ES Modules.

Remember

```js
import "./file.js"
```

---

# Testing

Use Postman.

POST

```http
POST /progress
```

Body

```json
{
    "title":"Solved LC-309",
    "description":"DP with cooldown",
    "date":"2026-07-24",
    "category":"DSA"
}
```

---

GET

```http
GET /progress
```

Returns

```json
[
    ...
]
```

---

DELETE

```http
DELETE /progress/<id>
```

Deletes the document.

---

# Backend Checklist ✅

✔ Express Server

✔ MongoDB Atlas

✔ Mongoose

✔ MVC

✔ Router

✔ Controllers

✔ Models

✔ POST API

✔ GET API

✔ DELETE API

✔ Postman Testing

---

# What's Next?

```text
React

↓

Axios

↓

Express Backend

↓

MongoDB
```

Postman was only for testing.

The React frontend will now become the client that consumes your REST API.

---

# One-Line Summary

**Client → Route → Controller → Model → MongoDB → Response**

If you understand this flow, you've understood the core of Express + Mongoose backend development.