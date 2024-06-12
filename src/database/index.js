const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://SkillConnectJobApp:SkillConnectJobApp@cluster0.ibbrcf3.mongodb.net/Skill-Connect-DB?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("Connected Successfully"))
    .catch((error) => console.log(error));
};

export default connectToDB;
