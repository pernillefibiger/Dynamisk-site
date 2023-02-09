//lav url search object

const urlParams = new URLSearchParams(window.location.search);

//find id

const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

async function getProduct() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

getProduct();

function showProduct(product) {
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .articletype").textContent = product.articletype;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".info .modelname").textContent = product.variantname;
  document.querySelector(".info .variantcolor").textContent = product.basecolour;
  document.querySelector(".info .pdyear").textContent = product.productionyear;
}
