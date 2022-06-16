import React from 'react'

const ProductDetails = () => {
  return (
    <div className="w-4/5 m-auto">
      <h1>Max men printed slim fit crew nexk t-shirt</h1>
      <div className="w-full flex">
        <div className="w-3/5">
          <div className="flex">
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011234937-Green-GREEN-1000011234937-26042022_01-2100.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011234937-Green-GREEN-1000011234937-26042022_02-2100.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011234937-Green-GREEN-1000011234937-26042022_03-2100.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011234937-Green-GREEN-1000011234937-26042022_06-2100.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="flex">
            <div className="mt-1">$</div>
            <div className="text-3xl mr-3 font-medium">299</div>
            <div className="mt-3 text-gray-500">Inclusive of all taxes</div>
          </div>
          <div className="flex justify-between mt-1">
            <div className="text-indigo-700 underline ">
              Free shippping on all orders
            </div>
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-5 mt-1 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>Earn 1 point</div>
              <div className="h-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-6 mt-1  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-5 flex">
            <div>Color:</div>
            <div className="font-medium ml-2">blue</div>
          </div>
          <div className="h-16 w-16 border-yellow-400 border-2 mt-4">
            <img
              className="h-full w-full "
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011234937-Green-GREEN-1000011234937-26042022_01-2100.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between mt-5 ">
            <div>Size:</div>
            <div className="underline">Size Guide</div>
          </div>
          <div className="flex justify-between w-full mt-4 text-center h-10">
            <div className="border-blue-200 border-2 w-1/6 mr-3">SX</div>
            <div className="border-blue-200 border-2 w-1/6  mr-3">S</div>
            <div className="border-blue-200 border-2 w-1/6  mr-3">M</div>
            <div className="border-blue-200 border-2 w-1/6  mr-3">L</div>
            <div className="border-blue-200 border-2 w-1/6  mr-3">XL</div>
            <div className="border-blue-200 border-2 w-1/6  mr-3">XXL</div>
          </div>
          <div className="w-full h-12 mt-7 bg-blue-800 text-center">
            <button className="w-full text-center py-3 text-white font-medium ">ADD TO BASKET</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
