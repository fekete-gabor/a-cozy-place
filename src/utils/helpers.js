import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { GiCompass, GiDogHouse } from "react-icons/gi";
import { RiShieldCrossLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineCreditCard,
} from "react-icons/ai";

export const links = [
  {
    id: 1,
    text: "kezdőlap",
    url: "/",
  },
  {
    id: 2,
    text: "gazdikereső",
    url: "/gazdikereso",
  },
  {
    id: 3,
    text: "támogatás",
    url: "/tamogatas",
  },
  {
    id: 4,
    text: "rólunk",
    url: "/rolunk",
  },
  {
    id: 5,
    text: "hírek",
    url: "/hirek",
  },
  {
    id: 6,
    text: "elérhetőségek",
    url: "/elerhetosegek",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <FiFacebook />,
    url: "http://www.facebook.com",
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: "http://www.twitter.com",
  },
  {
    id: 3,
    icon: <FiInstagram />,
    url: "http://www.instagram.com",
  },
];

export const mission = [
  {
    id: 1,
    title: "Küldetésünk",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, tempora!",
    icon: <GiCompass />,
  },
  {
    id: 2,
    title: "Otthon",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, tempora!",
    icon: <GiDogHouse />,
  },
  {
    id: 3,
    title: "Segítség nyújtás",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    icon: <RiShieldCrossLine />,
  },
];

export const contacts = [
  {
    id: 1,
    title: "email",
    text: "info@a_cozy_place.com",
    icon: <AiOutlineMail />,
  },
  {
    id: 2,
    title: "telefonszám",
    text: "+3670/123-4567",
    icon: <AiOutlinePhone />,
  },
  {
    id: 3,
    title: "cím",
    text: "8900 Zalaegerszeg, Felsődűlő utca",
    icon: <AiOutlineEnvironment />,
  },
  {
    id: 4,
    title: "gyepmester",
    text: "+3630/765-4321",
    icon: <AiOutlinePhone />,
  },
  {
    id: 5,
    title: "adószám",
    text: "12345678-1-13",
    icon: <AiOutlineCreditCard />,
  },
];

export const getUniqueValues = (data, type) => {
  let unique = [...new Set(data.map((item) => item.attributes[type]))];

  unique.sort((a, b) => {
    if (a) return a.localeCompare(b);
    return a;
  });

  unique.unshift("összes");
  return unique;
};

export const replaceLetters = (value) => {
  value = value
    .replace(/á/g, "a")
    .replace(/ö/g, "o")
    .replace(/ő/g, "o")
    .replace(/ó/g, "o")
    .replace(/ü/g, "u")
    .replace(/ű/g, "u")
    .replace(/ú/g, "u")
    .replace(/í/g, "i")
    .replace(/é/g, "e");

  return value;
};

export const formatMyDate = (value) => {
  const minutes = new Date(value).getMinutes();
  const hours = new Date(value).getHours();
  const days = new Date(value).getDay();
  const months = new Date(value).getMonth();
  const years = new Date(value).getFullYear();
  return `${years}/${months}/${days} - ${hours}:${minutes}`;
};
