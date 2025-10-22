const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("Hello from Node.js demo app with CI/CD!"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
