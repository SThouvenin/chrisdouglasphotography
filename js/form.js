var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("name","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=30",
        "Max length for FirstName is 30");
 

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");
 
 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");

