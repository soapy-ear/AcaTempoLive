const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5001


//middleware
const corsOptions = {
  origin: "https://acatempolive.onrender.com",
};
app.use(cors(corsOptions));

app.use(express.json());



app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});

//route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend "})
}) 