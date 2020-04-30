import AxiosWithAuth from '../../Utils/AxiosWithAuth';
import Axios from 'axios';

export const fetchEquipment = () =>{
    const userId =parseInt(localStorage.getItem('userId'));
    console.log("EquipAction user: ",userId)
    return dispatch =>{
        AxiosWithAuth().get(`/api/users/${userId}/equipment`)
        .then(res =>{
            console.log("fetched API: ", res);
            dispatch({type:'FETCH_EQUIP_SUCCESS', payload:res});
        })
        .catch(err => {
            console.log('fetched API ERROR: ', err);
            dispatch({type:'FETCH_EQUIP_FAIL', payload:err})
        })
    }
}

export const deleteEquipment = () =>{
    const userId =parseInt(localStorage.getItem('userId'));
}