import express from 'express';
import config from '~/config';
import api from '~/api';
import {initNoSqlConnection} from '~/db';

const app = express();

config(app);
initNoSqlConnection();
api(app);

app.listen(process.env.PORT);
console.log(`Call me on the hotline bling ${process.env.PORT}`);

