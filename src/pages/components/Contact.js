import React from "react";

const Contact = () => {
  return (
    <div id="contact-container">
      <form
        action="https://forms.zohopublic.com/glthomas526/form/contactme/formperma/n96VMrjmZtycQie8dd0CPkZm0gRFGa7_vfjDKp48ebY/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <h1 className="md:text-6xl text-4xl text-center mt-6">Contact Me</h1>
        <h2 className="md:text-xl text-lg text-center mt-12 mb-12 p-2">
          I'd love to get in touch! Please use this form to contact me, or email
          me directly at{" "}
          <a
            href="mailto:glthomas526@gmail.com"
            className="md:underline md:hover:text-purple-400 md:text-white text-purple-400 transition"
          >
            glthomas526@gmail.com
          </a>
          .
        </h2>
        <div className="container w-3/4 mx-auto text-center">
          <label className="w-[100px]">First Name</label>
          <input
            type="text"
            maxlength="255"
            name="Name_First"
            fieldtype="7"
            placeholder=""
            className="bg-gray-700 border border-gray-500 p-1 rounded-full"
          />
          <br />
          <label className="w-[100px]">Last Name</label>
          <input
            type="text"
            maxlength="255"
            name="Name_Last"
            fieldtype="7"
            placeholder=""
            className="bg-gray-700 border border-gray-500 p-1 rounded-full mt-6"
          />
          <br />
          <label className="w-[100px]"> Email</label>
          <input
            type="text"
            maxlength="255"
            name="Email"
            value=""
            fieldtype="9"
            placeholder=""
            className="bg-gray-700 border border-gray-500 p-1 rounded-full mt-6"
          />
          <br />
          <label className="w-[100px]">Message</label>
          <textarea
            name="MultiLine"
            maxlength="65535"
            placeholder=""
            className="bg-gray-700 border border-gray-500 p-1 rounded-full mt-6"
          ></textarea>
          <br />
          <button type="submit">
            <em>Submit</em>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
