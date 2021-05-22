import React from 'react';

function SelectInput({filter, name, categories}){

    return (
        <select name={name} onChange={filter}>
            {categories.map((i) => {
                return <option value={i}>{i}</option>
            })}
        </select>
    )

}

export default SelectInput;