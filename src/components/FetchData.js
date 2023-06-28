import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  //state variable for setting fetched data
  const [fetchedData, setFetchedData] = useState([]);
  //data fetching function
  const fetchData = async () => {
    const response = await axios.get(
      cat
        ? `https://newsapi.org/v2/everything?q=${cat}&from=2023-05-28&sortBy=publishedAt&apiKey=becf88ff5ede4b338f8ef53ffffd0101`
        : "https://newsapi.org/v2/everything?q=tesla&from=2023-05-28&sortBy=publishedAt&apiKey=becf88ff5ede4b338f8ef53ffffd0101"
    );
    setFetchedData(response.data.articles);
    // console.log(response.data.articles)
  };

  //calling data fetching function inside useEffect
  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>

      <div
        className="container d-flex align-items-center justify-content-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {fetchedData.map((item) => (
          <div
          key={Math.random()}
            className="container my-3 p-3"
            style={{
              width: "600px",
              boxShadow: "2px 2px 10px silver",
              borderRadius: "10px",
            }}
          >
            
            <h5 className="my-1">{item.title}</h5>

            <div className="d-flex align-items-center justify-content-center my-1">
              <img
                src={item.urlToImage}
                alt="image not found"
                className="img-fluid"
                style={{ width: "100%", height: "15em", objectFit: "cover" }}
              />
            </div>

            <p className="my-1">{item.content}</p>
            <Link to={item.url}>view more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
