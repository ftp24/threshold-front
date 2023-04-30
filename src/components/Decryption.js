import React, { useState } from 'react'

const Decryption = () => {

  const [keys, setKeys] = useState([{ x: '', y: '' }])
  const [showData, setShowData] = useState(false)
  const [resp, setResp] = useState('')
  function onAdd(e) {
    e.preventDefault()
    setKeys([...keys, { x: '', y: '' }])
  }

  function onSub(e) {
    e.preventDefault()
    let new_keys = [...keys]
    new_keys.pop()
    setKeys(new_keys)
    console.log(keys)
  }

  function changeX(e, index) {
    e.preventDefault()
    let new_keys = [...keys]
    new_keys[index].x = e.target.value;
    setKeys(new_keys)
  }

  function changeY(e, index) {
    e.preventDefault()
    let new_keys = [...keys]
    new_keys[index].y = e.target.value;
    setKeys(new_keys)
  }

  function submit(e) {
    e.preventDefault()
    let input = {}
    for (let i = 0; i < keys.length; i++) {
      input[(keys[i].x)] = parseInt(keys[i].y)
    }
    
    decryptSend(input)
    
  }
  async function decryptSend(request) {
    const response = await fetch('https://threshold.naveensd.com/decrypt', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' // The type of data you're sending
      },
      body: JSON.stringify(request) // The data
    })
    const data = await response.json();
    console.log(data);
    setResp("The secret message is "+ data)
    setShowData(true)
    console.log("resp ",resp)

  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8 mt-5">
          <h3 className="mb-3">Decryption</h3>
          <form className="form card p-3 bg-light">
            <div className="form-group">
              <h6>Enter the key value pairs</h6>
              {keys.map((element, index) => (
                <div className="row justify-content-center mb-2" key={index}>

                  <input type="text" className="col-4" onChange={event => changeX(event, index)}></input>
                  <input type="number" className="col-4 offset-1" onChange={event => changeY(event, index)}></input>
                </div>
              ))}

              <div className="row justify-content-center mt-3">
                <div className="col-1 ml-5">
                  <button className="btn col-12 btn-dark" onClick={onAdd}>+</button>
                </div>
                <div className="col-1 mb-5">
                  <button className="btn col-12 btn-secondary" onClick={event => onSub(event)}>-</button>
                </div>
                <h5 className="text-center">{resp}</h5>
                <div className="row justify-content-center">
                  <button type="submit" className=" col-3 mt-4 btn btn-info" onClick={submit}>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Decryption
