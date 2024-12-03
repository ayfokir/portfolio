'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Define the type for contacts
interface Contact {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const CreateContact = async (contacts: Contact) => {
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
      await prisma.contact.create({
    data: contacts,
  });

return({message:"Message sent successfully!", valid: true});
} catch (err) {
console.error("Error submitting form:", err);
return({message: "Failed to send the message. Please try again.", valid: false});
}

}

