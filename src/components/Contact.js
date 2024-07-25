import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // const [state, handleSubmit] = useForm("mlezvpza");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen flex justify-center text-center items-center p-4"
      >
        <form
          method="POST"
          action="https://formspree.io/f/mlezvpza"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-6xl font-extrabold inline text-[#F8F6F0]">
              CONTACT ME
            </p>
            <p className="py-4 text-[#F8F6F0]">
              Please feel free to reach out with any questions, comments, and/or
              other inquiries!
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
            minLength="50"
            maxLength="1000"
            required
          ></textarea>
          <button className="text-white border-2 bg-[##F8F6F0] hover:text-black hover:bg-sky-500 px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
