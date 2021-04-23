exports.run = (client, message, args, user, channel, self) => {

client.say(channel, `Aye-Aye Captain ${user.username}! ${client.username} reporting for duty.`)
}
