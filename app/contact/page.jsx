import ContactForm from "@/components/contact_form";
import * as THREE from "three";
import Coffee from "@/components/coffee";

const ContactPage = () => {
  return (
    <div id="contact" className="min-h-[calc(100vh-50px)] content-center">
      <div>
        <h1 className="text-3xl text-center p-4 font-black uppercase">
          Contact
        </h1>
        <ContactForm />
      </div>
      <Coffee />
      <h2 className="p-8 text-center text-2xl font-medium">
        {" "}
        Thank you for visiting my page!{" "}
      </h2>
      {/** Fun coffee cup model! */}
    </div>
  );
};

export default ContactPage;
