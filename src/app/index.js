import express from 'express';
import config from '~/config';
import api from '~/api';
import {initNoSqlConnection} from '~/db';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function killCurrent() {
    try {
        await exec('yarn kill');
    } catch (e) {
        return 0;
    }
}

const app = express();

config(app);
initNoSqlConnection();
api(app);


killCurrent().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Call me on the hotline bling ${process.env.PORT}`);
    });
}).catch((e) => {
    console.log('Error on trying to kill current process: ', e);
});

