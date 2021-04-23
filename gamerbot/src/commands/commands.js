exports.run = (client, message, args, user, channel, self) => {

    client.say(channel, 
        `
        API Commands: ~mom, ~dad  ||  Chat Commands: ~ily, ~salt || Admin Commands: ~commands, ~test  ||  Shoutout Command:  ~so <(@)user>  (shouts out the user specified, mention the user with or without the "@")     
        `
        )        
    }
    