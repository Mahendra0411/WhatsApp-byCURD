const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
    from: "Neha",
    to: "Priya",
    msg: "send me your exam sheets",
    create_at: new Date(),
    },
    {
        from: "Mohan",
        to: "Sohan",
        msg: "i am your best friends",
        create_at: new Date(),
    },
    {
        from: "Pooja",
        to: "riya",
        msg: "she is going to jaipur",
        create_at: new Date(),
    },
    {
        from: "tony",
        to: "Peter",
        msg: "he is hero fo comic",
        create_at: new Date(),
     },
    
    ];

    Chat.insertMany(allChats);