import React, { useState } from "react";
import "../create-product/Create.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const CreateUser = () => {
  const [newUsers, setUsers] = useState(initialState);
  console.log(newUsers);
  const handleCreate = (e) => {
    e.preventDefault();
    setUsers(initialState);
    axios
      .post("/users", newUsers)
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
    <div className="crate">
      <div className="container">
        <h2>CreateUser</h2>
        <form onSubmit={handleCreate} className="create__form">
          <input
            value={newUsers.firstName}
            onChange={(e) =>
              setUsers((prev) => ({ ...prev, firstName: e.target.value }))
            }
            type="text"
            placeholder="firstName"
          />
          <input
            value={newUsers.lastName}
            onChange={(e) =>
              setUsers((prev) => ({ ...prev, lastName: e.target.value }))
            }
            type="text"
            placeholder="lastName"
          />
          <input
            value={newUsers.email}
            onChange={(e) =>
              setUsers((prev) => ({ ...prev, email: e.target.value }))
            }
            type="text"
            placeholder="email"
          />
          <input
            value={newUsers.phone}
            onChange={(e) =>
              setUsers((prev) => ({ ...prev, phone: e.target.value }))
            }
            type="text"
            placeholder="phone"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
