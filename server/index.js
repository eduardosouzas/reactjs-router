/**
 * Created by eduardo.souza on 12/07/2017.
 */
// server/index.js
'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});