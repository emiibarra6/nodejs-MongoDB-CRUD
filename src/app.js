import express  from "express";
import indexRoutes from './routes/index.routes';
import {create} from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';
import exp from "constants";

const app = express()

//handlebars
app.set("views", path.join(__dirname,"views"));
const hbs = create({
    layoutsDir: path.join(app.get("views"), 'layouts'),
    partialsDir: path.join(app.get("views"), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs',
});

app.engine(
    ".hbs",
    hbs.engine,
);
app.set('view engine' , '.hbs');

//middlewares
app.use(morgan('dev'));
//para obtener el objeto del post: req.body
app.use(express.urlencoded({extended:false}));


//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;