import React, {useState} from 'react';

const Search = () => {

    const [value, setValue] = useState("");

    const searchHandler = e => {
        setValue(e.target.value);
    }

    return (
        <div style={{marginTop: "100px"}}>
            <input type="text" value={value} onChange={searchHandler}/>
        </div>
    );
};

export default Search;