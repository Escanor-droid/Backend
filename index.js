// console.log('Hello, World!');
require('dotenv').config()
const express = require('express')
const app = express()
const gihubData = {
  "login": "Escanor-droid",
  "id": 115442353,
  "node_id": "U_kgDOBuGCsQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/115442353?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Escanor-droid",
  "html_url": "https://github.com/Escanor-droid",
  "followers_url": "https://api.github.com/users/Escanor-droid/followers",
  "following_url": "https://api.github.com/users/Escanor-droid/following{/other_user}",
  "gists_url": "https://api.github.com/users/Escanor-droid/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Escanor-droid/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Escanor-droid/subscriptions",
  "organizations_url": "https://api.github.com/users/Escanor-droid/orgs",
  "repos_url": "https://api.github.com/users/Escanor-droid/repos",
  "events_url": "https://api.github.com/users/Escanor-droid/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Escanor-droid/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-10-10T03:54:26Z",
  "updated_at": "2025-10-03T06:00:05Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('This is login page');
})

app.get('/chai' ,(req,res) => {
    res.send('<h1>Chai page</h1>');
})

app.get('/gihub' , (req,res) => {
    res.json(gihubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
