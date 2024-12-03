'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export  const CreateContact = async(contacts: any)  =>  {
    'use server'
// Retrieve form values
const { name, email, phone, subject, message }    = contacts
// Validate form fields
if (!name || !email || !phone || !subject || !message) {
return{valid: false, message: "All fields are required"};

}
try {
console.log("Form data submitted:", { name, email, phone, subject, message });
// return "Message sent successfully!"
// Simulate API request (replace this with your actual logic)
// await new Promise((resolve) => setTimeout(resolve, 1000));
const newContact = await prisma.contact.create({
    data: contacts,
  });

return({message:"Message sent successfully!", valid: true});
} catch (err) {
console.error("Error submitting form:", err);
return({message: "Failed to send the message. Please try again.", valid: false});
}

}

