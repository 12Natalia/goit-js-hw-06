const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galeryHtml = images
  .map(
    (image) =>
      `<li><img src="${image.url}" width="370" alt="${image.alt}" style="border-radius:50px"></li>`
  )
  .join("");
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", galeryHtml);
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.gap = "30px";
list.style.padding = "40px";
list.style.justifyContent = "center";
list.style.alignItems = "center";
list.style.borderRadius = "50px";
list.style.backgroundColor = "mediumseagreen";
