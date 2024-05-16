import React, { useState } from "react";
import "./Create.scss";
import axios from "../../../api";

let initialState = {
  title: "",
  price: "",
  description: "",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  console.log(newProduct);
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("/products", newProduct)
      .then((res) => {
        console.log(res);
        setNewProduct(initialState);
        toast.success("Ma'lumot saqlandi");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Ma'lumot saqlanmadi");
      });
  };
  return (
    <div className="create">
      <div className="container">
        <h2>Create Product</h2>
        <form onSubmit={handleCreate} className="create__form">
          <input
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            placeholder="Title"
          />
          <input
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
            }
            type="number"
            placeholder="Narxi"
          />
          <input
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            type="text"
            placeholder="description"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
