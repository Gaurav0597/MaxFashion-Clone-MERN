import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchData, getDatabyColor, getDatabyPrie, getDatabySize, getDatabyType } from '../../../Redux/Action'
// import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector } from "react-redux"

const MensAppendData = () => {
  const data1= useSelector(state=>state.maxFashion.products)
  console.log(data1)
  const dispatch=useDispatch()
  const [ColorOrder, setColorOrder] = useState('')
  const [Type, setTypeOrder] = useState('')
  const [Size, setSizeOrder] = useState('')
  const [Prize, setPrizeOrder] = useState('')

  useEffect(() => {
    dispatch(fetchData())
  },[])
  useEffect(()=>{
     dispatch(getDatabyPrie(Prize))
  },[Prize])
  useEffect(()=>{
    dispatch(getDatabyType(Type))
 },[Type])
 useEffect(()=>{
  dispatch(getDatabyColor(ColorOrder))
},[ColorOrder])
useEffect(()=>{
  dispatch(getDatabySize(Size))
},[Size])
  function handlePrizeChange(event) {
    setPrizeOrder(event.target.value)
  }
  function handleColorChange(event) {
    setColorOrder(event.target.value)
  }
  function handleTypeChange(event) {
    setTypeOrder(event.target.value)
  }
  function handleSizeChange(event) {
    setSizeOrder(event.target.value)
  }

 
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-4xl mb-7 mt-7">Mens Products</h1>
      <div>
        {/* <button onClick={()=>{lowtohigh()}}>sort</button>
        <button onClick={()=>{hightolow()}}>sort by desc</button> */}
        <select name="" id="" onChange={handlePrizeChange}>
          <option value="">Sort By Prize</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <select onChange={handleColorChange}>
          <option value="">Filter By color</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
        </select>
        <select onChange={handleSizeChange}>
          <option value="">Filter By size</option>
          <option value="30">30</option>
          <option value="32">32</option>
          <option value="34">34</option>
          <option value="36">36</option>
        </select>
        <select onChange={handleTypeChange}>
          <option value="">Filter By Type</option>
          <option value="Full Sleeves">Full Sleeves</option>
          <option value="Half Sleeves">Half Sleeves</option>
          <option value="Formal">Formal</option>
          <option value="Polo slim">Polo</option>
        </select>
      </div>

      <div className=" grid grid-cols-4 gap-5">
        {data1.map((data) => {
          return (
            <div className="max-w-sm bg-white">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={data.image1}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {data.ProductName}
                  </h5>
                </a>
                <div className="flex font-semibold justify-between items-center mt-6">
                  <span className="text-3xl  text-gray-900 ">
                    ${data.Price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MensAppendData
