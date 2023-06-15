import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, String,reuired:true},
    prompt: {type: String, String,reuired:true},
    photo: {type: String, String,reuired:true},

});

const postshcema = mongoose.model("Post", Post);

export default postshcema;