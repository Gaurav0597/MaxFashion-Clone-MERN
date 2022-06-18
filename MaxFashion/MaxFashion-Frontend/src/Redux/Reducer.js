import * as types from './ActionType.js'

const initState = {
  products: [],
  error: '',
  loading: false,
  currentProduct: {},
  cart: [],
  userId:""
}

const ProductReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    //get all products
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: '',
        loading: false,
      }
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

    //get single product

    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: payload,
        error: '',
        loading: false,
      }
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

    //add to cart

    case types.ADD_PRODUCT_CART_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, payload],
        error: '',
        loading: false,
      }
    case types.ADD_PRODUCT_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

    // get product from cart

    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: [...payload],
        error: '',
        loading: false,
      }
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }
      //userId
      case types.GETUSERID:
        return {
          ...state,
          userId:payload
        }

        //GetCart
        case types.GETCARTDATA:
          return {
            ...state,
            cart:[...payload]
          }
    default:
      return state
  }
}
export default ProductReducer
