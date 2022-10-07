import React from "react";

const GoogleMaps = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.9994713246815!2d16.805896705399153!3d46.83916794785957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476929d4f3eee6f7%3A0x16a8cfcd608f5dbc!2zWmFsYWVnZXJzemVnLCBGZWxzxZFkxbFsxZEgdS4sIDg5MDA!5e0!3m2!1shu!2shu!4v1665142218776!5m2!1shu!2shu"
      width="100%"
      height="450"
      title="GoogleMaps"
      style={{ border: 0, display: "block", background: "white" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMaps;
