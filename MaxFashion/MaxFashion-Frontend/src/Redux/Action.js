import * as types from "./ActionType.js";
import Axios from "axios";

//FetchData functions
const fetchDataRequest = (payload) => {
    return {
      type: types.FETCH_DATA_REQUEST,
      payload,
    }
  }
  export const fetchDataSuccess = (payload) => {
    return {
      type: types.FETCH_DATA_SUCCESS,
      payload,
    }
  }
  const fetchDataFailure = (payload) => {
    return {
      type: types.FETCH_DATA_FAILURE,
      payload,
    }
  }

  //fetData axios function
  export const fetchData = (payload) => {
    return (dispatch) => {
      dispatch(fetchDataRequest)
      Axios.get('http://localhost:1020/menproducts')
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
    }
  }
  export const getDatabyPrie = (payload) => {
    return (dispatch) => {
      dispatch(fetchDataRequest)
      Axios.get(`http://localhost:1020/menproducts/sort/${payload}`)
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
    }
  }
  export const getDatabyType = (payload) => {
    return (dispatch) => {
      dispatch(fetchDataRequest)
      Axios.get(`http://localhost:1020/menproducts/filter/type/${payload}`)
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
    }
  }
  export const getDatabyColor = (payload) => {
    return (dispatch) => {
      dispatch(fetchDataRequest)
      Axios.get(`http://localhost:1020/menproducts/filter/color/${payload}`)
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
    }
  }
  export const getDatabySize = (payload) => {
    return (dispatch) => {
      dispatch(fetchDataRequest)
      Axios.get(`http://localhost:1020/menproducts/filter/size/${payload}`)
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
    }
  }

  //getSingleProduct function
  const getSingleProductRequest = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_REQUEST,
      payload,
    }
  }
  const getSingleProductSuccess = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      payload,
    }
  }
  const getSingleProductFailure = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_FAILURE,
      payload,
    }
  }

  //getSingleProduct axios functionality

  //addToCart functions
  const addProductCartRequest = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_REQUEST,
      payload,
    }
  }
  const addProductCartSuccess = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_SUCCESS,
      payload,
    }
  }
  const addProductCartFailure = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_FAILURE,
      payload,
    }
  }

  //add to cart axios functionality

  //Fetch from cart functions 
  const fetchCartRequest = (payload) => {
    return {
      type: types.FETCH_CART_REQUEST,
      payload,
    }
  }
  const fetchCartSuccess = (payload) => {
    return {
      type: types.FETCH_CART_SUCCESS,
      payload,
    }
  }
  const fetchCartFailure = (payload) => {
    return {
      type: types.FETCH_CART_FAILURE,
      payload,
    }
  }

  //fetch from cart axios functionality
 
 //Remove from cart funcitons
 const deleteProductCartRequest = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_REQUEST,
      payload,
    }
  }
  const deleteProductCartSuccess = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_SUCCESS,
      payload,
    }
  }
  const deleteProductCartFailure = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_FAILURE,
      payload,
    }
  }

  //Remove from cart axios functionality
