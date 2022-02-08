const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

var sendMail = {
    send : function(toEmail, fromEmail, subject, html){
        //data verification
        //mandatory data
        if( toEmail == null )
        {
            return null;
        }

        const msg = {
            to: toEmail,
            from: fromEmail,
            subject: subject,
            html: html
          }

          sgMail
            .send(msg)
            .then(() => {
            console.log('Email sent')
            })
            .catch((error) => {
            console.error(error)
            })
    }
}

module.exports = sendMail