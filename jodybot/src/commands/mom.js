import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.yomomma.info/'
});

exports.run = (client, message, args, user, channel, self) => {
  // console.log('user: ', user)
  // console.log('args: ', args)
    const fname = args[0] || user.username
    const lname = args[1] || ''
// console.log('fname: ', fname)
// console.log('lname: ', lname)
    instance.get()

    .then((res) => {
      // console.log('res.data: ', res.data)
    client.say(channel, res.data.joke)
  })
    .catch((err) => {
      console.log('err: ', err)
    })
  }
