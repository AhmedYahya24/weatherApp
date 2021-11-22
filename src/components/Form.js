import React  from 'react'

const Form = (props) => {

    const handleChange = (e) => {
        [e.target.id] = e.target.value; 
    }

    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" id="city" placeholder="City..." onChange={handleChange} />
                <input type="text" name="country" id="country" placeholder="Country..." onChange={handleChange} />
                <button>Get Weather</button>
            </form>
        </div>
    )
    
}

export default Form;
