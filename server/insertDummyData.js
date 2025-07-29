// insertDummyData.js
const mongoose = require("mongoose");
const Blog = require("./models/Blog"); // adjust the path if needed
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB");

    await Blog.deleteMany(); // clear existing blogs

    const dummyBlogs = [
      {
        title: "First Dummy Blog",
        content: "This is the content of the first dummy blog.",
        slug: "first-dummy-blog",
      },
      {
        title: "Second Dummy Blog",
        content: "Another interesting blog post content.",
        slug: "second-dummy-blog",
      },
    ];

    await Blog.insertMany(dummyBlogs);
    console.log("Dummy blogs inserted!");

    mongoose.disconnect();
  })
  .catch((err) => console.error("Error:", err));
