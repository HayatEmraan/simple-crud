const selectById = document.getElementById("item-list");

async function dataFetch() {
  const res = await fetch("https://crud.teamrabbil.com/api/v1/ReadProduct");
  const data = await res.json();
  execution(data.data);
}

function execution(data) {
  data.forEach((element) => {
    selectById.innerHTML += `
            <tr>
                <td>${element.Img}</td>
                <td>${element.ProductName}</td>
                <td>${element.ProductCode}</td>
                <td>${element.UnitPrice}</td>
                <td>${element.Qty}</td>
                <td>${element.TotalPrice}</td>
                <td><button>Update</button></td>
                <td><button onClick="deleteHandle('${element._id}')">Delete</button></td>
            </tr>
        `;
  });
}

dataFetch();
