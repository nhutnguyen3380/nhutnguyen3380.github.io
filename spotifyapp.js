const SPOTIFY_USERNAME = "nhutnguyen3380"

fetch(`https://api.spotify.com/v1/users${SPOTIFY_USERNAME}`)
.then(response=>response.json())
.then(users=> {
    for(const user of users)
    {
        const userName = user.display_name
        const userFollower = user.followers


        const spotifyContainer = document.createElement('div')
        cardContainer.className = "image center"


        const userImage = document.createElement('img')
        userImage.src = "https://i.scdn.co/image/ab6775700000ee850e9da93dd005d21c273a540e"
        userImage.className = "user-image"
        spotifyContainer.appendChild(userImage)

        const spotifyInfoContainer = document.createElement('div')
        spotifyInfoContainer.className = 'spotify-info-container'

        const spotifyName = document.createElement('h3')
        spotifyName.textContent = userName
        
        const spotifyFollower = document.createElement('h3')
        spotifyFollower.textContent = userFollower

        spotifyInfoContainer.appendChild(spotifyName)
        spotifyInfoContainer.appendChild(spotifyFollower)

        spotifyContainer.appendChild(spotifyInfoContainer)

        const spotifysContainer = document.getElementById("spotifys_container")

        spotifysContainer.appendChild(spotifyContainer)

    }

})




/*
var client_id = 'CLIENT_ID';
var redirect_uri = 'http://localhost:8888/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
})*/