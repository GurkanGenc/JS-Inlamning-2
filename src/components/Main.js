import React, { useState } from 'react'
import Form from './Form'
import PlayList from './PlayList'


const Main = () => {
    const [songs, setSongs] = useState([])

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col-5">
                    <Form songs={songs} setSongs={setSongs} />
                </div>
                <div className="col-7 ps-5">
                    <PlayList songs={songs} setSongs={setSongs} />
                </div>
            </div>
        </main>
    )
}

export default Main