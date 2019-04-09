// Michael Macari
// Entry point to app

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const exphbs = require("express-handlebars")
const Handlebars = require('handlebars')

const handlebarsInstance = exphbs.create({
    defaultLayout: "main",
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
              return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
      
            return new Handlebars.SafeString(JSON.stringify(obj));
          }
    },
})
// Downloads public directory for use of JS etc on client side
app.use("/public", express.static(__dirname + "/public"))
// request body parser for use of the app
app.use(bodyParser.json())
// Encoded URL body parser for use of the app
app.use(bodyParser.urlencoded({extended: true}))

// Set the engine of the app
app.engine('handlebars', handlebarsInstance.engine)
//app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use('/', (req, res) => {
    res.render("prime/isprime")
})

app.use("*", (req, res) => {
    res.sendStatus(404)
})

// Sets up our listener
app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})