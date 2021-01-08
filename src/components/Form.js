import React, {useState} from "react"
import Error from "./Error"
import PropTypes from "prop-types" 


const Form = ({search, setSearch, setConsume}) => {

    const [error, setError] = useState(false)

    // Get city & country
    const {city, country} = search

    // Update State
    const handleChange = e => {
        // Update state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    // Form submitted
    const handleSubmit = e => {
        e.preventDefault()

        // Validate
        if(city.trim() === "" || country.trim() === "") {
            setError(true)
            return
        }
        setError(false)

        setConsume(true)
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="All fields are mandatory" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select a Country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>
            
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Search Weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4" 
                />
            </div>
        </form>
    )
}

Form.prototype = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setConsume: PropTypes.func.isRequired
}
 
export default Form