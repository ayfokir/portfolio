'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Contact {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const CreateContact = async (previousState: unknown, formData: FormData | null) => {
  if (!formData) {
    return { valid: false, message: "Form data is missing. Please fill in all fields." };
  }

  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const subject = formData.get("subject")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  if (!name || !email || !phone || !subject || !message) {
    return { valid: false, message: "Form data is missing. Please fill in all fields." };
  }

  const contacts: Contact = { name, email, phone, subject, message };

  try {
    console.log("Form data submitted:", contacts);

    await prisma.contact.create({
      data: contacts,
    });

    return { message: "Received! I will contact you soon!", valid: true };
  } catch (error) {
    console.error("Database Insertion Error:", error);
    return { message: "Failed to send the message. Please try again.", valid: false };
  }
};
