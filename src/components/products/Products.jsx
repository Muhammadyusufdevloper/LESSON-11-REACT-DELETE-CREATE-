import React from "react";
import "./Products.scss";
import axios from "../../api";

const Products = ({ data, loading,isAdmin,setReflashData}) => {

    const hanelDelete = (id)=>{
        if (confirm("Malumotni o'chirmoqchimisiz"))
        axios
            .delete(`/products/${id}`)
            .then(res=> {
                setReflashData(prev => !prev)
                console.log(res)
            })
    }
  const product = data?.map((product) => (
    <div className="product__card" key={product.id}>
      <div className="product__img-part">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product__info-part">
        <h3 className="product__info__title">
          {product.title.slice(0, 1).toUpperCase() +
            product.title.slice(1).toLowerCase()}
        </h3>
        <p className="product__info__desc">{product.description}</p>
        <p className="product__info__desc">{product.rating}</p>
        <div className="product__info__card">
          <p className="product__info__desc product__info__price">
            ${product.price}
          </p>
          <p className="product__info__desc product__info__price">
            ${product.price + 304}
          </p>
        </div>
        {
            isAdmin ? <div className="product__info__btns">
            <button onClick={()=> hanelDelete(product.id)}>Delete</button>
            <button>Edit</button>
          </div> : <></>
        }
      </div>
    </div>
  ));

  let loadingCount = (
    <div>
      <div className="product__loading__img-part loading__anime"></div>
      <div className="product__loading__info-part">
        <div className="loading__anime product__loading__info-part-div"></div>
        <div className="loading__anime product__loading__info-part-div"></div>
        <div className="loading__anime product__loading__info-part-div"></div>
        <div className="loading__anime product__loading__info-part-div"></div>
      </div>
    </div>
  );

  let loadingData = (
    <div className="product__loading">
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
      {loadingCount}
    </div>
  );

  console.log(loading);

  return (
    <>
      <section className="product">
        <div className="container">
          <h1 className="product__title">Product</h1>
          {loading ? loadingData : <></>}
          <div className="product__cards">{product}</div>
        </div>
      </section>
    </>
  );
};

export default Products;
