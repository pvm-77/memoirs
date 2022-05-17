import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/users.js";
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/user", userRouter);


// mongodb database connection
const CONNECTION_URL = 'mongodb+srv://root:root@learncluster.elcem.mongodb.net/memoirs?authSource=admin&replicaSet=atlas-14e3nl-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {
        app.listen(PORT, () => {
            console.log(`server running on ${PORT}`)
        })
    }
).catch(
    (error) => {
        console.log(error.message);
    }
)














