import express from 'express';
import bodyParser from 'body-bodyParser';
import cors from 'cors';

const app=express();

app.use(bodyParser.json({limit: '50mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));


app.use(cors());










