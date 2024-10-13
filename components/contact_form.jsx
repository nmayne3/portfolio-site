"use client";

import emailjs from "emailjs-com";

const SERVICE_ID = "service_1g5q8k9";
const TEMPLATE_ID = "template_zx8hl0w";
const PUBLIC_KEY = "EoXcxdhsPMbO8qj1W";

const ContactForm = () => {
  emailjs.init(PUBLIC_KEY);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    <div className="w-full h-full p-2 pb-4 m-auto">
      <form
        className="grid grid-cols-6 gap-4 rows-5 grid-flow-row"
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-center col-start-3 col-span-2">
          Send me a message. Let's have a chat!
        </h2>
        <label htmlFor="from_name" className="col-start-2 text-end">
          Name
        </label>
        <input
          className="col-start-3 col-span-2"
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Your name.."
          required
        />

        <label className="text-end col-start-2">E-mail</label>
        <input
          className="col-start-3 col-span-2"
          type="email"
          id="from_email"
          name="from_email"
          placeholder="Your email.."
          required
        />

        <label className="text-end col-start-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="col-start-3 col-span-2"
          name="message"
          rows="8"
          cols="30"
          placeholder="Your message.."
          required
        />
        <button
          type="submit"
          className="rounded-sm px-8 p-2 m-auto max-h-full border border-secondary stripes col-start-3 col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
