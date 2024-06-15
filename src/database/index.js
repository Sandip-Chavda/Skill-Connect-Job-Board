const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = process.env.MONGO_DB_URI;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("Connected Successfully"))
    .catch((error) => console.log(error));
};

export default connectToDB;
