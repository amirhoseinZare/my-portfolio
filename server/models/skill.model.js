import mongoose, {Schema} from "mongoose"

const schema = new Schema(
  {
    name: { type: String, required: true },
    percent: { type: Number, required:true },
    showInProgress : { type:Boolean, required:true },
    showInSphere : { type:Boolean, required:true }
  },
  { timestamps: true }
);

const SkillModel = mongoose.model("Skill", schema);

export default SkillModel;
