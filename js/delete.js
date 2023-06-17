function deleteHandle(id) {
  fetch("https://crud.teamrabbil.com/api/v1/DeleteProduct/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
