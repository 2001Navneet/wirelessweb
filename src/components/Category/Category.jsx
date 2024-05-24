import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useContext, useEffect } from "react";
const Category = () => {
  const { data, setData } = useContext(Context);
  const { id } = useParams();
  //testing
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(`the received  data is`, res);
      setData(res);
    });
    // const { data } = useFetch(
    //   `/api/products?populate=*&[filters][categories][id]=${id}`
    // );

    console.log(`the data is ${data}`);
    return (
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {data?.data?.[0]?.attributes?.title}
          </div>
          <Products headingText="Category" innerPage={false} products={data} />
        </div>
      </div>
    );
  };
};

export default Category;
