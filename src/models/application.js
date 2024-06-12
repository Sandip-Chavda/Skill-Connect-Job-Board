const { default: mongoose } = require("mongoose");

const applicationSchema = new mongoose.Schema({
  recruiterUserID: String,
  name: String, // candidate name
  email: String, // candidate email
  candidateUserID: String,
  status: Array,
  jobID: String,
  jobAppliedDate: String,
});

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);

module.exports = Application;
