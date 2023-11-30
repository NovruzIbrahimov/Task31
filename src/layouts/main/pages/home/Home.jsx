/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { getProducts } from "../../../../services/products";
export default function Home() {
  const [data, setData] = useState([]);
  const [oldData, setoldData] = useState([]);
  const [query, setquery] = useState("");
  const getData = () => {
    getProducts()
      .then(({ products }) => {
        setData(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData(
      oldData.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      })
    );
  }, [query]);

  return (
    <>
      <Header query={query} setquery={setquery} />
      <div className="flex flex-wrap justify-center">
        {data.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}