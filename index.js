import app from './src/app.js'
import {sequelize} from './src/servidor/dataBase/database.js'

async function main(){
    try{
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("server is listening on port "+ 3000)
    } catch(error){
        console.error('Unable to connect to the dataBase')
    }
}

main();