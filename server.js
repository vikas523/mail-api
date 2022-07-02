app.post('/sendEmail',async(req,res)=>{
  try {
    const { subject, text } = req.body;
    const getEmail = await shopModel.find({})
    const mainEmail =  getEmail[0].email
    const mailData = {
        from: 'vikas.swain@ens.enterprises',
        to: mainEmail,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
          return console.log(error);
      }
      res.json({
        msg:"Mail send",
        message_id: info.messageId
      })
  });
  } catch (error) {
    console.log(error);
    res.json({
      msg:"failed",
      status:500
    })
  }
})
