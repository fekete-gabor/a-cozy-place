import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { GiCompass, GiDogHouse } from "react-icons/gi";
import { RiShieldCrossLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineCreditCard,
  AiOutlineEuroCircle,
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
    text: "a_cozy_place@outlook.com",
    icon: <AiOutlineMail />,
  },
  {
    id: 2,
    title: "telefonszám",
    text: "+3630/1234567",
    icon: <AiOutlinePhone />,
  },
  {
    id: 3,
    title: "cím",
    text: "2045 Törökbálint, Hrsz: 097/98",
    icon: <AiOutlineEnvironment />,
  },
  {
    id: 4,
    title: "gyepmester",
    text: "+3630/7654321",
    icon: <AiOutlinePhone />,
  },
  {
    id: 5,
    title: "levelezési cím",
    text: "Állat és - Természetvédők Budaörsi Egyesülete 2040 Budaörs, Lévai u.34.",
    icon: <AiOutlineMail />,
  },
  {
    id: 6,
    title: "adószám",
    text: "18693180-1-13",
    icon: <AiOutlineCreditCard />,
  },
  {
    id: 7,
    title: "Külföldről történő utalás esetén EUR bankszámla",
    text: "HU74 1620 0199 1152 9123 0000 0000 IBAN/SWIFT: HBWEHUHB",
    icon: <AiOutlineEuroCircle />,
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

// fetch animals
export const all_animals_url = `https://a-cozy-place.herokuapp.com/api/animals?populate=*`;

// fetch single animal by ID
export const single_animal_url = `https://a-cozy-place.herokuapp.com/api/animals/`;

// fetch news
export const all_news_url = `https://a-cozy-place.herokuapp.com/api/blog-posts?populate=*`;

// fetch single news
export const single_news_url = `https://a-cozy-place.herokuapp.com/api/blog-posts/`;

