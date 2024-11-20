const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ChitChat");
}

let allchats = [
  {
    from: "tony",
    to: "jerry",
    message: "Hi Jerry!",
    created: new Date(),
  },
  {
    from: "jerry",
    to: "tony",
    message: "Hello Tony!",
    created: new Date(),
  },
  {
    from: "jerry",
    to: "tony",
    message: "How are you?",
    created: new Date(),
  },
  {
    from: "tony",
    to: "jerry",
    message: "I'm doing well. Thanks for asking!",
    created: new Date(),
  },
  {
    from: "tony",
    to: "jerry",
    message: "What's your favorite color?",
    created: new Date(),
  },
];

Chat.insertMany(allchats);
