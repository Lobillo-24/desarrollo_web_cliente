export const sum = (num1, num2) => num1 + num2;

export const stringLength = (str) => {
  console.log(`the length of "${str}" is:`, str.length);
};

// le cambio el nombre porque no puede haber dos const iguales
export const stringLength2 = (str) => {
  let length = str.length;
  console.log(`the length of "${str}" is:`, length);
  return str.length;
};

const alerts = [
  "Hey, you are awesome",
  "You are so wonderful",
  "What a marvel you are",
  "You're so lovely",
  "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES",
];

export const showAlert = (name) => {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};