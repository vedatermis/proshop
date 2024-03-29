import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.ORDER_CREATE_SUCCESS
        });

        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/orders`, order, config);

        dispatch({
            type: actionTypes.ORDER_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}