

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
     var message = document.getElementById("comments").value;

    let body = "Name : " +  name + "<br/>Email : "+ email + "<br/>Message : " + message ;

    Email.send({
        SecureToken : "2df6ef13-c51c-4879-be42-2059233d6b64",
        To : 'pawarhitesh41@gmail.com',
        From : "pawarhitesh41@gmail.com",
        Subject : "Message from " + name,
        Body : body 
    }).then(
      message => alert(message)
    );

}