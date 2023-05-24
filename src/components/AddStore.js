import React, {useState} from 'react';

function AddStore(){
    const [name, setName] = useState('');
    const [foodType, setFoodType] = useState('');


    const handleNameChange =e => {
        setName(e.target.value);
    };

    const handleFoodTypeChange =e => {
        setFoodType(e.target.value);
    };

    const handleStoreSubmit =e => {
        e.preventDefault();

        const newStore = {
            name, 
            foodType
        };

        setName('');
        setFoodType('');
        };

    return (

        <form onSubmit={handleStoreSubmit}>
            <label>
                가게 이름 : 
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                음식 종류 : 
                <input type="text" value={foodType} onChange={handleFoodTypeChange} />
            </label>
            <br />
            <button type="submit">
                가게추가
            </button>
        </form>
    );

}


export default AddStore;