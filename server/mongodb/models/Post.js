import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {String,reuired:true},
    prompt: {String,reuired:true},
    photo: {String,reuired:true},

});

const postshcema = mongoose.model("Post", Post);

export default postshcema;