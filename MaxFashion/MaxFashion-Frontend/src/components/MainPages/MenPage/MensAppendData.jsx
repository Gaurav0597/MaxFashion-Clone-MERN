import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/react'

const MensAppendData = () => {
    const [data,setData]=useState([])
  const getData = () => {
    axios
      .get('http://localhost:8080/Mens')
      .then((res) => {
        // console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(data)
  return( <div className="w-4/5 m-auto">
        <h1 className="text-4xl mb-7 mt-7">Mens Products</h1>
      <div className=" grid grid-cols-4 gap-5">
      {data.map(data =>{
        return (
            <div className="max-w-sm bg-white">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={data.image1} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{data.ProductName}</h5>
                </a>
                <div className="flex font-semibold justify-between items-center mt-6">
                    <span className="text-3xl  text-gray-900 ">${data.Price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
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
