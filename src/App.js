import React, {Fragment, useState, useEffect} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Weather from "./components/Weather"
import Error from "./components/Error"


function App() {

  // Form state
  const [search, setSearch] = useState({
    city: "",
    country: ""
  })
  const [consume, setConsume] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const {city, country} = search

  useEffect(() => {
    const consumeAPI = async () => {
      if(consume) {
        const appId = "0d3064435475c02bb9be82aaba10ce6b"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
  
        const api = await fetch(url)
        const result = await api.json()

        setResult(result)
        setConsume(false)

        // Confirm successful response
        if(result.cod === "404") {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consumeAPI()
    // eslint-disable-next-line
  }, [consume])

  let component
  if(error) {
    component = <Error message="No results" />
  } else {
    component = <Weather result={result} />
  }

  return (
    <Fragment>
      <Header 
        title="React Weather App"
      />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSearch={setSearch}
                setConsume={setConsume}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
