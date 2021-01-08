import React from "react"
import PropTypes from "prop-types" 


const Error = ({message}) => <p className="red darken-4 error">{message}</p>

Error.prototype = {
    message: PropTypes.string.isRequired
}
 
export default Error