/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Attachments = ({ attachments }) => {
  const [cover, setCover] = useState(
    "https://torre.co/_nuxt/img/job-header.00eef8a.svg"
  );

  useEffect(() => {
    if (attachments.length > 0) {
      setCover(attachments[0].address);
    }
  }, []);

  return (
    <div className="attachments">
      <figure className="image">
        <img src={cover} width="2000" alt="" />
      </figure>
    </div>
  );
};

export default Attachments;
