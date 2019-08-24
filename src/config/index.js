import bodyParser from 'body-parser';

export default (app) => {
    // parse incoming request with JSON body
    app.use(bodyParser.json());

    // avoid CORS blocked
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods',
            'DELETE, POST, GET, OPTIONS, PATCH');
        res.header('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept');
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
            return;
        }
        next();
    });
};
