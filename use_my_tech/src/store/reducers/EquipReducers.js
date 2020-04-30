const initialState = {
    equipment:[],
    isFetching:false,
    error:'',
}

export const EquipReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_EQUIP_START':
            return{
                ...state,
                isFetching:true
            }

        case 'FETCH_EQUIP_SUCCESS':
            return{
                ...state,
                equipment:action.payload,
                isFetching:false,
                error:''
            }
        

        case 'FETCH_EQUIP_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
    }
}

export default EquipReducer;