import { useEffect, useState } from 'react'

function App() {

  const [lib, setLib] = useState([])

  useEffect(() => {

    fetch("http://localhost:4000/", {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ "query": "query {\n libraries {\n   branch\n }\n}", "variables": {} })
    })
      .then(response => response.json())
      .then(result => {
        setLib(result.data.libraries)
      })


  }, [])


  return (
    <div className="App">
      {
        lib.map((lib, idx) => {
          return (
            <h1 key={idx}>{lib.branch}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
