import { HerbModel } from 'mapper-api/models';

const data = HerbModel.find({
    name: 'pinapple express',
}).then((docs) => {
    console.log(docs);
    process.exit();
});