import React from 'react'
import Song from './Song'

const PlayList = ({ songs, setSongs }) => {

    if (songs.length === 0) {
        return (
            <div id="play-list" className="mb-5 text-center">
                No item found. Please add an item.
            </div>
        )
    }

    return (
        <div id="play-list" className="mb-5">
            {
                songs.map(song => (
                    <Song key={song.id} song={song} songs={songs} setSongs={setSongs} />
                ))
            }
        </div>
    )
}

export default PlayList