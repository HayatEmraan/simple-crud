document.getElementById("click-back").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});

document.getElementById("click").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const code = document.getElementById("code").value;
  const price = document.getElementById("price").value;
  const qty = document.getElementById("quantity").value;
  const total = document.getElementById("total").value;
  const img = document.getElementById("image").value;

  const createObj = {
    ProductName: name,
    ProductCode: code,
    UnitPrice: price,
    Qty: qty,
    TotalPrice: total,
    Img: img,
    CreatedDate: new Date(),
  };
  createDB(createObj);
});

function createDB(data) {
  fetch("https://crud.teamrabbil.com/api/v1/CreateProduct", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
