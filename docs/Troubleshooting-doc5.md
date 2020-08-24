---
id: basic_troubleshooting
title: Basic Troubleshooting
---

## When adding Rythm, I can't see my server in the list!
See [I can't find my server in the list!](/adding_rythm#help-i-cant-find-my-server-in-the-list)

## Rythm won't play my playlist
Make sure the playlist is either `Unlisted` or `Public`. If it is set to `Private` Rythm won't be able to play that specific playlist.

If you recently made a private playlist public or unlisted, you should wait a short while until Rythm realizes that it is public.

## Rythm left the voice channel while not playing anything
For performance reasons, Rythm leaves after a while of being alone or unused in a voice channel.
This helps Rythm save resources while no one is listening to it and keeps the music quality consistent for all users at any given time!

Don't worry though, as long as you are in a voice channel, just type !summon to make Rythm rejoin your channel!

## Rythm forgets the playlist I queued after it leaves
For performance reasons, Rythm will clear/reset the queue when it leaves the voice channel.

To get around this we suggest creating a YouTube/Spotify playlist of the songs you wish to re-queue.

## Rythm sends blank messages
Rythm uses embeds to post messages. You might have disabled website previews on your client. Please make sure you enable it!

1. Go to your user settings, which is the gear in the bottom left corner.
2. Click **Text & Images**
3. Enable **Show website preview info from links pasted into chat**

![Embeds](/img/docs/basic-troubleshooting/embeds.png)

## Rythm isn't responding to my commands!
*If Rythm isn't responding to commands, try the following:*
- Make sure you're using the correct prefix. You can mention Rythm to get the prefix.<br/>
![Mention to get prefix](/img/docs/settings/prefix.png)
- Make sure Rythm has the permissions to read and send messages in the channel.
  - You can give the `Administrator` permission to Rythm to make this easier.
- Take a look at our [#outages](https://discord.com/channels/231471142685245440/359311833653313546) channel on our official Rythm Bot Discord server to see if there are any issues going on.
- If the above methods do not work, please choose option 6 in our [#help-desk](https://discord.com/channels/231471142685245440/359355279004925954) channel on the Rythm Bot Discord server to receive assistance from a member of our Support Team.

[Click here to join the official Rythm Bot Discord server](https://rythmbot.co/support)

## How can I reset Rythm's prefix?
If you have changed the Rythm's default prefix to a custom one and now can’t make Rythm work or aren’t able to change the prefix back, try the following:

1. **Try to mention Rythm.** You can do this by typing: `@Rythm#3722` or `<@!235088799074484224>`.
   When you mention Rythm, do it in a text channel Rythm can send messages in.

2. **Copy the Prefix response.** After mentioning Rythm, it should give you a message similar to this, but showing the prefix your Rythm is set to:

![Prefix](/img/docs/basic-troubleshooting/prefix.png)

**You must copy the part that is marked in red.**

3. **Run the prefix command.** Paste the copied text in your text channel and right next to it with **no spaces** type: `settings prefix !`

**Example**: To set the prefix back to **!** in the above picture, the command would be this:

**`DJsettings prefix !`**

:::info note 
You must have a role with the `Administrator` or the `Manage Server` permission to be able to change Rythm’s prefix! 
:::

## Rythm is responding to commands but not joining the voice channel
If you find that Rythm is responding to your commands but not joining a voice channel use the following method:

1. Move to a different voice channel.
2. `!summon` the bot into that voice channel.
3. Move back to the original voice channel.
4. `!summon` the bot back into the original voice channel.

If the above method does not work, try changing the server region of your server or kicking & reinviting Rythm to your Discord server.
