
const cds = require("@sap/cds");

const SapCfMailer = require('sap-cf-mailer').default;

module.exports = cds.service.impl(async (srv)=>{
    srv.on('sendMail' , async (req)=>{
      // console.log(' inside : sendMail event handler : ' , req);
      
      const transporter = new SapCfMailer("mail_destination");
      //  todo need request validations : 
      console.log('inside : sendMail :');
      try {
       
        const result = await transporter.sendMail({
          to:'ss899278@gmail.com',
          subject: 'Congratulations !',
          text: 'hello Satya !',
          attachments:[
            {
              filename:'attachment.txt',
              content:'Hello bro this is attachment !',
              // path:'../attachment/attachment.txt'
            
          }
        ]
        });
        console.log(' result : ' , result);
        return JSON.stringify(result);
      } catch (error) {
        // LOG.info(error);
        // return req.error(error);
        console.log('inside catch block : error :' , error);
      }
    })

})