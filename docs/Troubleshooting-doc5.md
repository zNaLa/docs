---
id: basic_troubleshooting
title: Basic Troubleshooting
---


## When adding Rythm I can't see my server on the list

You must have a role with the “Administrator” or the “Manage Server” permission to be able to add Rythm to a Discord Server. 
*If you are able to change the name of the server, you have one of these permissions.*

If you have the correct permission and still can’t see your server in the list, make sure you’re logged into the correct Discord account in your web browser which you can check by going [here](https://discord.com/channels/@me).

Note: If that still doesn't work, we suggest trying **Incognito Mode** in your web browser or a different browser to invite Rythm to your server. An incognito guide/table will be below:

|  Browser | Windows/Linux |    macOS    |
|:--------:|:-------------:|:-----------:|
|  Chrome  |  CTRL+Shift+N | CMD+Shift+N |
|  Firefox |  CTRL+Shift+P | CMD+Shift+P |
|   Opera  |  CTRL+Shift+N | CMD+Shift+N |
|  MS Edge |  CTRL+Shift+P |     N/A     |
| Explorer |  CTRL+Shift+P |     N/A     |
|  Safari  |      N/A      | CMD+SHIFT+N |


## Rythm won't play my playlist
If when adding a playlist Rythm responds with "Failed to load, Something went wrong when looking up the track", the playlist you were trying to play is likely a YouTube Mix, which is currently not supported on Rythm.

If the playlist isn't a Mix, you should make sure the playlist isn't **private** or **unlisted** as Rythm can't play those. If you recently made a private playlist public, you should wait a short while for Rythm to understand that it is public.

## Rythm left the voice channel while not playing anything
For performance reasons, Rythm leaves after a while of being alone or unused in a voice channel.
This helps Rythm save resources while no one is listening to it and keeps the music quality consistent for all users at any given time!

Don't worry though, as long as you are in a voice channel, just type !summon to make Rythm rejoin your channel!

## Rythm forgets the playlist i queued after it leaves
For performance reasons, Rythm will clear/reset the queue when it leaves the voice channel.
To get around this we suggest creating a YouTube playlist of the songs you wish to re-queue.

## Rythm's messages come out blank
Rythm uses something called rich embeds for its messages, which is an option that might be disabled on your client. Make sure it's enabled!

To do so:

Go to your Discord User Settings > click on "Text & Images" > Enable "Show website preview info from links pasted into chat”.

![Embeds](./assets/img/basic-troubleshooting/embeds.png)

## Rythm doesn't respond to commands
If Rythm isn’t responding to commands, try the following:


1. **Ensure you’re using the correct prefix**. You can see the current prefix for Rythm by mentioning the bot.
Example: **@Rythm#3722** OR **<@!235088799074484224>**

2. **Ensure Rythm has permission to send messages in the text channel**.
You can give the “Administrator” permission to Rythm to make this easier.

3. Check the `#outages` channel on the Rythm Bot Discord server to see if there are any known issues.

4. If the above methods do not work, please choose option 7 in our `#help-desk` channel on the Rythm Bot Discord server to receive assistance from a member of our Support Team.

[Click here to join the official Rythm Bot Discord server](https://rythmbot.co/support)

## How can I reset Rythm's prefix
If you have changed the default Rythm prefix to a custom one and now can’t make Rythm work or aren’t able to change the prefix back, do the following:



1. Mention Rythm.

You can do this by typing: **@Rythm#3722** or **<@!235088799074484224>**

When you mention Rythm, do it in a text channel Rythm can send messages in.

2. __Copy the Prefix response.__

After mentioning Rythm, it should give you a message similar to this, but showing the prefix your Rythm is set to:

![Prefix](./assets/img/basic-troubleshooting/prefix.png)

**You must Copy the part that is marked in red.**

3. __Run the prefix command.__

Paste the copied text in the chat box and **right next to it** with **no spaces type**: settings prefix !

__Example__: To set the prefix back to **!** in the above picture, the command would be this:

`DJsettings prefix !`


Note: You must have a role with the “Administrator” or the “Manage Server” permission to be able to change Rythm’s prefix.

## Rythm is responding to commands but not joining the voice channel
If you find that Rythm is responding to your commands but not joining a voice channel use the following method:

1. Move to a different voice channel.
2. **!summon** the bot into that voice channel.
3. Move back to the original voice channel.
4. **!summon** the bot back into the original voice channel.

If the above method does not work:
Try changing the server region of your server or kicking & reinviting Rythm to your Discord server.
