import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        default: "https://imgs.search.brave.com/HGTncxqZVoWdNGyNUct19lBXG_0kGUw0rI7dTs53dNU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uZWls/cGF0ZWwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA5/L2Jsb2ctcG9zdC1p/bWFnZS1ndWlkZS5q/cGc",
    },
    category: {
        type: String,
        default: 'uncategorized',
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;