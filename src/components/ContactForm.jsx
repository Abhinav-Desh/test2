import React, { useState } from "react";
import { Box, Button, Input, Typography } from "@mui/joy";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleName = (e) => {
    let varName = e.target.value;
    setName(varName);
    console.log(varName);
  };

  const handleEmail = (e) => {
    let varEmail = e.target.value;
    setEmail(varEmail);
    console.log(varEmail);
  };

  const handleForm = (e) => {
    e.preventDefault();

   
    if (name.length < 3) {
      setErrorMessage("Name must be at least 3 characters long.");
      setSuccessMessage(""); 
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage(""); 
    } else {
      setErrorMessage("");
      setSuccessMessage("Form submitted successfully!");
    }
  };

  return (
    <div className="contact-form">
      <div style={{ textAlign: "center", fontSize: "50px" }}>Contact Form</div>
      <div style={{ width: "30%", backgroundColor: "rgb(251, 252, 253)",margin:'10px auto' }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            size="md"
            placeholder="Name"
            type="text"
            value={name}
            onChange={handleName}
            sx={{
              
              width:'50%',
              alignContent:'center',
              margin:'10px auto',
              borderColor: name.length > 3 ? "green" : "red",
            }}
          />
          <Input
            size="md"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={handleEmail}
            sx={{
              margin:'10px auto',
              width:'50%',
              borderColor: email.includes("@")?"green":"red",
            }}
          />
        </div>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Button
            onClick={handleForm}
            sx={{
              backgroundColor: "#50C878",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px 20px",
              "&:hover": { backgroundColor: "#45a049" },
              width: "80%",
            }}
          >
            Submit
          </Button>
        </Box>
        {errorMessage && (
          <Typography
            sx={{
              color: "red",
              marginTop: 2,
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography
            sx={{
              color: "green",
              marginTop: 2,
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {successMessage}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
