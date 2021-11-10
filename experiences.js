
const ARTIST_ID = "4V8LLVI7PbaPR0K2TGSxFF?si=DFDuKBAfTr-LjEHBpV97VQ"

fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks`)
.then(response => response.json())
.then(songs=> {
    for (const song in songs)
    {
        const songName = song.song
        const songDescription = song.songDescription
        const songURL = song.html_url


    }
    
})