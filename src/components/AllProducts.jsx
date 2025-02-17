import axios from "axios";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/pets");
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        // setError(true);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get("http://localhost:3002/food");
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        
      }
    };

    const getAllProducts = async () => {
      await Promise.all([fetchData(), fetchData2()]).then(([pets, food]) =>
        setData([...pets, ...food])
      );
    };
    getAllProducts()
  }, []);

  console.log(data);
  
  return <p>All products</p>;
};

export default AllProducts;
