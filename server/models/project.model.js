import mongoose, {Schema} from "mongoose"

const schema = new Schema(
  {
    image:{ type: String, required: true },
    title: { 
        fa:{ type: String, required: true },
        en:{ type: String, required: true }
    },
    description: { 
        fa:{ type: String, required: true },
        en:{ type: String, required: true }
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", schema);

export default Project;
