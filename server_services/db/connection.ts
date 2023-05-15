import * as mongoose from 'mongoose';
import "dotenv/config";


const options = {
    useNewUrlParser: true,
}

/**
 * initialise mongodb Connection
 */
 const db = () => {
     mongoose.connect(`${process.env.MONGODB_URI}`, options as any,)
}


export default { db }; 