const mailer = require("nodemailer")


const useremail = async (email, firstname)=>{

    const messageTemplate =`
    <div>
    <h2>Welcome!!! </h2>
    <ul>
    <li>Name: ${firstname}</li>
    <li>Email: ${email}</li>
    </ul>
    <div>
    <p>Dear ${firstname}</p>
    <p>Thanks for Signing Up</p>
    </div>
    </div>`;
  const transporter =  mailer.createTransport({
        service:"gmail",
        auth: {
            user: process.env.maileruser,
            pass: process.env.mailerpass
        }
    })

    const mailOption ={
        from:process.env.maileruser,
        to: email,
        subject: "Welcome Message",
        html: messageTemplate
    }
    try {
        const sentmail =   await transporter.sendMail(mailOption)
        if (sentmail) {
           console.log("mail sent successfully");
           
        }
       } catch (error) {
           console.log(error.message);
           
           throw {
               errorname:"Mailerror",
               message:error.message
           };
           
       }
}



module.exports ={useremail}