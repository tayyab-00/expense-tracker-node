
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expenseRoutes = require('./routes/expenseRoute');

const app = express();
const PORT = 7000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
