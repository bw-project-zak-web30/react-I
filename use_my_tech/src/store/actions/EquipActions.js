import AxiosWithAuth from '../../Utils/AxiosWithAuth';

export const fetchFriends = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_EQUIP_START'})
        authorize().get(`/api/users/${userId}/equipment`)
        .then(res =>{
            console.log("fetched API: ", res.data);
            dispatch({type:'FETCH_EQUIP_SUCCESS', payload:res.data});
        })
        .catch(err => {
            console.log('fetched API ERROR: ', err);
            dispatch({type:'FETCH_EQUIP_FAIL', payload:err})
        })
    }
}