import React from "react"
import PropTypes from "prop-types" 


const Weather = ({result}) => {
    // Extract values
    const {name, main} = result

    // Avoid loading Component before API returns data
    if(!name) return null

    // Kelvin degrees
    const kelvin = 273.15

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is: </h2>
                <p className="temperature">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>Maximum Temperature:&nbsp;
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>Minimum Temperature:&nbsp; 
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Weather