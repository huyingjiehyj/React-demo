const homereducer = (state={username:''},action)=>{
    switch(action.type){
        case 'LOGIN':
            return {username:action.username}
        default:
            return state;
        
    }
}

export default homereducer;