import mongoose from "mongoose"

export function connectToDB(){
    mongoose
      .connect("DB_ADDRESS=mongodb://root:e8ITIz9uzp5vincgFcHCEWAY@linda.iran.liara.ir:34231/MyPortfolio?authSource=admin&replicaSet=rs0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => {
        console.log("Db connected");
      })
      .catch((err) => {
        console.log("Db not connected ", err);
      });
}
