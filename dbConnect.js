import db from "mongoose";

const connect = async () => {
  try {
    await db.connect("mongodb://localhost:27017");
    console.log("Connection successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
