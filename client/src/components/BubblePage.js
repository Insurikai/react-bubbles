import React, { useState, useEffect } from "react";
import axiosAuth from '../tools/axiosAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log(colorList)
  useEffect(() => {
    axiosAuth().get('http://localhost:5000/api/colors')
      .then(res=>{
        setColorList(res.data)
      })
      .catch(console.log)
  }, [])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
