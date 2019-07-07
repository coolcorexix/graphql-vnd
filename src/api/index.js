import express from 'express';
import bodyParser from 'body-parser';
import GraphQLEndpoint from './graphql';

const app = express();

// parse incoming request with JSON body
app.use(bodyParser.json());

// avoid CORS blocked
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods',
        'DELETE, POST, GET, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS' || req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }
    next();
});

app.use('/graphql', GraphQLEndpoint);

app.listen(process.env.PORT);
console.log(`Call me on the hotline bling ${process.env.PORT}`);
