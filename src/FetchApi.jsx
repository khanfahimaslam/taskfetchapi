import React, { useState, useEffect } from "react";
import axios from "axios";
import "./fetchapi.css";
const FetchApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log("this is error handling", error));
  }, []);
  return (
    <div className="maindiv">
      {data.map((item) => {
        return (
          <div style={{ border: "2px solid black" }}>
            <table style={{ border: "3px solid orange" }}>
              <tr style={{ border: "1px solid black " }}>
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
              </tr>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.url} width="250px" height="300px" />
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default FetchApi;
