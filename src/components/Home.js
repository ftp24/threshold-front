import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-7">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Threshold Cryptography</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text">A threshold cryptosystem, the basis for the field of threshold cryptography,
                                is a cryptosystem that protects information by encrypting it and distributing it among a cluster of
                                fault-tolerant computers. <br></br> <br></br>The message is encrypted using a public key, and the corresponding private key is
                                shared among the participating parties. With a threshold cryptosystem, in order to decrypt an encrypted message or to sign
                                a message, several parties (more than some threshold number) must cooperate in the decryption or signature protocol.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home