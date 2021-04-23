exports.run = (client, message, args, user, channel, self) => {
  let target = ''
  const arg = args[0]
  if (arg[0] === '@'){
    target = arg.slice(1)
  } else {target = arg}
  client.say(channel,
    `
    ${user.username} says you should go check out @${target}. They are really cool and stuff. You'll find them at: https://www.twitch.tv/${target}
    `
  )

}
