const express = require("express");
const morgan = require("morgan");
const path = require("path");
const multer = require("multer");

//Initializations
const app = express();
//Connection mongo database
require("./database");

//Getting routes
const booksRouter = require("./routes/books");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Upload with multer, setting for multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date.getTime() + path.extname(file.originalname));
  },
});

//Middlewares
app.use(morgan("dev"));
app.use(multer({ storage }).single("image"));
//This middleware is to interpreted information like a json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/v1/books", booksRouter);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
