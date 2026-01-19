import pastriesImg from "../assets/images/pastries.png";
import palmiersImg from "../assets/images/palmier.png";
import biscuitImg from "../assets/images/biscuit-rusk.png";
import fairyCakesImg from "../assets/images/fairy-cake.png";

export const Products = [
  {
    title: "Pastries",
    image: pastriesImg,
    text: "Our pastry counter is always changing, so there is always something new to try.",
    to: "/products#pastries",
  },
  {
    title: "Palmiers",
    image: palmiersImg,
    text: "Palmiers and other little treats for sharing or saving for later.",
    to: "/products#delicacies",
  },
  {
    title: "Rusks",
    image: biscuitImg,
    text: "Crisp rusks and biscuits perfect with tea, coffee or for the biscuit tin.",
    to: "/products#biscuits",
  },
  {
    title: "Fairy Cakes",
    image: fairyCakesImg,
    text: "Little sponge cakes topped with simple icing, perfect for parties and tea breaks.",
    to: "/products#fairy-cake",
  },
];
