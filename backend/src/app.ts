import express from "express"
import compression from "compression"
import session from "express-session"
import passport from "passport"

const app = express()

app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', require('./routes/v1').default);

export default app

