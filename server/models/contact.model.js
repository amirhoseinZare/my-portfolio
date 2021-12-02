import mongoose, {Schema} from "mongoose"

const schema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required:true },
    phone : { type:String, required:true },
    message : { type:String, required:true },
    userIp : { type:String, required:true },
    userAgent : { type:String, required:true },
  },
  { timestamps: true }
);

mongoose.models = {};
const ContactModel = mongoose.model("Contact", schema);

export default ContactModel;
