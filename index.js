const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Serve webpacked content in ./dist
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`App serving static content on port ${port}`);
});
