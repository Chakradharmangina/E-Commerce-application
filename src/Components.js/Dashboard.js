import Navbar from "./Navbars/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function Dashboard() {
  const [response, setresponse] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:3001/getmobiles")
      .then((res) => {
        setresponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="card-deck">
        {response.items &&
          response.items.map((i) => (
            <div className="card dashboardcard">
              <img
                className="card-img-top dashboardimg"
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{i.MobileName}</h5>
                <p className="card-text">{i.Discription}</p>
                <p className="card-text">${i.Price}</p>
                <button className="btn-btn-secondary">Buy Now</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
