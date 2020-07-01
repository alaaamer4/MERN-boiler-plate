const express = require("express");
const app = express();
const connectDB = require("./server/config/mongoDB");
const user = require("./server/routes/user");
const auth = require("./server/routes/auth");
connectDB();

// body parser
app.use(express.json());
// routes
app.use("/api/user", user);
app.use("/api/auth", auth);

// connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected to port ${PORT}`));
