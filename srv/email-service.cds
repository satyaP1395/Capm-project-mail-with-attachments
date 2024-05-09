

service EmailService @(path:'EmailService') {

    // todo right actions : sendMail , sendMailWithAttachment ;
    // function sendMail() returns String;
    //  @restrict: [ { grant: ['WRITE' , 'READ'], to: 'Admin' }]
    action sendMail() returns String;


}