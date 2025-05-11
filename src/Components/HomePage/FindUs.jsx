import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold mb-5">find Us on: </h3>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn justify-start bg-bd-base-100 join-item"><FaFacebookF/> Facebook</button>
          <button className="btn justify-start bg-bd-base-100 join-item"><FaTwitter/> Twitter</button>
          <button className="btn justify-start bg-bd-base-100 join-item"><FaInstagram /> Instragram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
