let arr = []

function collect(state=arr,action){
    if(action.type=='ADD'){
        return [...state,action.value]
    }
    if(action.type=='DELETE'){
        let newarr = [...state];
        newarr.splice(action.index,1);
        return newarr;
    }
    return state;
}
export default collect;
