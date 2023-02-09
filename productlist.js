const urlParams = new URLSearchParams(window.location.search);
console.log("params", urlParams);

const cat = urlParams.get("cat");
console.log("cat", cat);

//1 grap the data
async function getData() {
  const response = await fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${cat}`);
  const data = await response.json();
  //2 loope //3 for each
  data.forEach(showProduct);
}

document.querySelector("h2").textContent = cat;

getData();

function showProduct(product) {
  console.log(product);
  //4 fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  console.log(template);
  //5 clone
  const copy = template.cloneNode(true);
  //6  skifte data
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = `${product.price} kr`;
  copy.querySelector(".percent").textContent = product.discount + "%";
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".typeP").textContent = product.articletype;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("a").href = "produkt.html?id=" + product.id;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    const discountPrice = product.price - product.price * (product.discount / 100);
    copy.querySelector(".newprice").textContent = `${discountPrice.toFixed(2)} kr`;
  }

  //appende
  document.querySelector("main").appendChild(copy);
}
