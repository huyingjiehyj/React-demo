import React from 'react';

import { SearchBar, Button, WingBlank,useState} from 'antd-mobile';

const Search=(props)=>{
    return <div>
        <SearchBar
        placeholder="宝贝"
        onCancel={() =>props.history.goBack()}
        showCancelButton='true'
        />
    </div>
}

export default Search;

