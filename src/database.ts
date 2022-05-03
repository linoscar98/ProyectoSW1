import moongose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

moongose.connect(`${process.env.URLPROD}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }).then(db => console.log("Data Base is connected"))
      .catch(err => console.log(err)
);