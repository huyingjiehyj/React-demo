const datareducer = (state={datalist:[]},action)=>{
    switch(action.type){
        case 'GETDATA':
            return {datalist:action.datalist}
        default:
            return state;
        
    }
}

export default datareducer;