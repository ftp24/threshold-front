import { getValue } from '@testing-library/user-event/dist/utils'
import React,  { useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Encryption = () => {
    function submit(e)
    {
        e.preventDefault()
        let emailcsv=document.getElementById("emailList").value.replaceAll(/\s/g,'')
        let emailList=emailcsv.split(",")
        let input =
        {
        "secret_int" : parseInt((document.getElementById("a")).value),
        "num_of_keys" : parseInt((document.getElementById("n")).value),
        "min_keys" : parseInt((document.getElementById("k")).value),
        "mail_list": emailList
        }
        alert('Please wait...')
        encryptSend(input)


    }

    async function encryptSend(request)
	{
		const response = await fetch('https://threshold.naveensd.com/encrypt', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
        alert('Emails sent succesfully!')
		console.log(data);

		}

    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8 mt-5">
                    <h3 className="mb-3">Encryption</h3>
                    <form  className="form card p-3 bg-light">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-7">
                                    <label htmlFor="n">Total number of keys (n):</label>
                                </div>
                                <div className="col-5">
                                    <input type="number" className="form-control" id="n"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <div className="row">
                                <div className="col-7">
                                    <label htmlFor="k">Minimum number of keys to unlock (k):</label>
                                <br></br><small className="form-text text-muted">At least these many keys must be present at time of decryption</small>

                                </div>
                                <div className="col-5">
                                    <input type="number" className="form-control" id="k"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3 ">
                            <div className="row">
                                <div className="col-7">
                                    <label htmlFor="a">Secret message to be encrypted (a):</label>
                                </div>
                                <div className="col-5">
                                    <input type="number" className="form-control" id="a"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3 ">
                            <div className="row">
                                <div className="col-7">
                                    <label htmlFor="emailList">Comma separated string of n emails to send the keys to:</label>
                                </div>
                                <div className="col-5">
                                    <textarea className="form-control" id="emailList" rows="3" placeholder="eg: abc@gmail.com, b@nitc.ac.in"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-3 mt-4">
                                <button type="submit" className="mt-2 btn btn-info" onClick={submit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Encryption
