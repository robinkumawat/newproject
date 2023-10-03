import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
    axios
      .post("http://localhost:8080/category/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        if (result.status === 201 && result.statusText === "Created")
          console.log("Category Added Successfully");
      });
  }
  return (
    <>
      <h2>Add Category</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Photo</label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <br />
        <button type="submit">Add Category</button>
      </form>
    </>
  );
}

export default Add;