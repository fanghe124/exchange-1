import axios from 'axios'
import { LOAD_ALL_PAYMENT_SYSTEMS, START, SUCCESS, FAIL } from '../constants'

export function loadAllPaymentSystems() {
  return dispatch => {
    dispatch({ type: LOAD_ALL_PAYMENT_SYSTEMS + START })

    axios.post(
        '/api/CryptoCurrencies/list'
    )
    .then(function (response) {
      const {Data, Errors, Info, Type} = response.data
        if (!Errors) {
            dispatch({
                type: LOAD_ALL_PAYMENT_SYSTEMS + SUCCESS,
                payload: Data
            })
        } else {
            dispatch({
                type: LOAD_ALL_PAYMENT_SYSTEMS + FAIL,
                errorMessage: Errors
            })
        }
    })
    .catch(function (error) {
      dispatch({
        type: LOAD_ALL_PAYMENT_SYSTEMS + FAIL,
        errorMessage: error
      })
    });
  }
}