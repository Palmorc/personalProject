const axios = require('axios')

module.exports = {
  auth: async (req,res) => {
    try {
      let { code } = req.query
      let payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
      }
      console.log(payload)
      let auth0Domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`

      let accessTokenResponse = await axios.post(`${auth0Domain}/oauth/token`, payload)
      console.log(accessTokenResponse)
      let accessToken = accessTokenResponse.data.access_token

      let userInfoResponse = await axios.get(`${auth0Domain}/userinfo?access_token=${accessToken}`)
      let userInfo = userInfoResponse.data
      console.log('USerinfooooooo',userInfo);

      let db = req.app.get('db')
      let users = await db.findUser(userInfo.sub)

      if(users.length){
        req.session.user = users[0]
        res.redirect('/')
      } else{
        let users = await db.createUser(userInfo)
        req.session.user = users[0]
        res.redirect('/')
      }

    } catch (e) {
      console.log('I don\'t feel so good', e)
      res.redirect('/error')
    }
  }
}
