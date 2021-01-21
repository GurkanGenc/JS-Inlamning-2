import React from 'react'

const Song = ({ song, songs, setSongs }) => {

    const inListHandler = () => {
        setSongs(songs.map(item => {
            if (item.id === song.id) {
                return {
                    ...item, inList: !item.inList
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setSongs(songs.filter(item => item.id !== song.id))
    }

    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${song.inList ? 'in-list' : 'out-of-list'}`}>
                    <div className="name">{song.name}</div>
                    <div className="description">{song.description}</div>
                </div>
                <div>
                    <i onClick={inListHandler} className={`fas fa-download cp ${song.inList ? 'in-list' : 'out-of-list'}`}></i>
                    <i onClick={deleteHandler} className="far fa-trash-alt cp"></i>
                </div>
            </div>
        </div>
    )
}


export default Song