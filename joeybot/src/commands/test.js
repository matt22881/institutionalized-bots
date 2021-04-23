exports.run = (client, message, args, user, channel, self) => {

client.say(channel, `Aye-Aye ${user.username}! ${client.username} reporting for duty.`)
}
