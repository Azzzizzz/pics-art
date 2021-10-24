import React, { useState } from "react";
// import img from "../img/myImage.jpg";

export default function Image() {
  const style = {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    margin: ".5rem ",
  };
  const container = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  };

  const btnContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const btn = {
    background: "dodgerblue",
    border: "none",
    padding: ".7rem 1rem",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
  };

  //   let url = "https://picsum.photos/200/300?random=1";

  function imgs() {
    let url = "https://picsum.photos/500/500?random=";
    let array = [];
    for (let i = 0; i < 10; i++) {
      // console.log(i);
      array.push(<img style={style} src={url + i} alt="" key={i} />);
    }
    //  console.log(array);
    return array;
  }
  const [refresh, setRefresh] = useState([]);
  const onFresh = () => {
    let val = imgs();
    //  setRefresh(val);
    console.log("hahah");
    //  return imgs();
    return window.location.reload();
  };
  return (
    <>
      <div style={btnContainer} className="btn-container">
        <button style={btn} onClick={onFresh}>
          Refresh
        </button>
      </div>

      <div style={container}>{imgs()}</div>

      <div style={btnContainer} className="btn-container">
        <button style={btn} onClick={onFresh}>
          Refresh
        </button>
      </div>
    </>
  );
}
