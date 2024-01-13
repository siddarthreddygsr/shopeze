import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "./card"; 
import { queryContext } from "./NavBar";

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

function ProductDisplay() {
  const { query } = useContext(queryContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get(`https://dummyjson.com/products/search?q=${query}`).then((response) => {
      // Check if the response and response.data.products are defined before setting state
      setProducts(response.data?.products || []);
    });
  }, [query]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {products.map((product) => (
        <CustomCard
          key={product.id}
          title={product.title}
          imageUrl={product.thumbnail}
          content={product.description}
        />
      ))}
    </div>
  );
}

export default ProductDisplay;
