const login = (username)=>{
    return (dispatch)=>{
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'LOGIN',
                    username: res.data.name
                })
            })
    }
}

const data = (username)=>{
    return (dispatch)=>{
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'GETDATA',
                    datalist: res.data
                })
            })
    }
}

export {login,data}