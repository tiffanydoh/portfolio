import React from "react";
import WindowTemplate from "../WindowTemplate.tsx";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mlezvpza");
  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll get back to you soon!</p>;
  }
  return (
    <div id="contact">
      <WindowTemplate tabName="Contact">
        <div className="flex justify-center text-center items-center">
          <form
            method="POST"
            action="https://formspree.io/f/mlezvpza"
            className="flex flex-col"
          >
            <div className="pb-8">
              <h2 className="flex justify-center font-semibold text-2xl text-black">
                Contact
              </h2>
              <p className="py-4 text-black">
                Please feel free to reach out with any questions, comments,
                and/or other inquiries!
              </p>
            </div>
            <input
              className="p-2"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="my-4 p-2"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="p-2"
              name="message"
              rows="10"
              placeholder="Message"
              minLength="1"
              maxLength="1000"
              required
            ></textarea>
            <button className="text-black bg-[#F8F6F0] hover:text-black hover:bg-sky-500 px-4 py-3 my-8 mx-auto flex items-center">
              Submit
            </button>
          </form>
        </div>
      </WindowTemplate>
    </div>
  );
};

export default Contact;
