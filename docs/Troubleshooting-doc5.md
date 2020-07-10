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

## Got issues while trying to listen music? 
Let's hope these options will help you! On the right top of the documentation, you're able to find your problem and what the problem might be and how to get it fixed:

### I don't see my server when adding Rythm.
Make sure you have either "**Administrator**" or "**Manage Server**" permissioins, otherwise you're unable to add Rythm to your server. 

Added Rythm correctly but still can't see it? Make sure you **logged into the right Discord account** aswell in your **web browser**.

**Sticky Note:** If none of these options worked, we highly suggest you trying <a href="https://i.imgur.com/kOtyFx5.png" target="_blank">**Incognito Mode**</a> or a **Different browser** to invite Rythm. 

## Rythm isn't playing my playlist!
When you're trying to play your playlist and Rythm responds with "**:x: Failded to load, something went wrong when looking up the track!**" it's most likely cause the playlist you were trying to play is a YouTube Mix — with that being said — Rythm currently **does not** support YouTube Mixes.

## Rythm left our voice channel while it wasn't playing anything
Because of our current performance reasons, Rythm will automatically leave tthe voice channel after **2 minutes** after a while of being alone / unused in voice channels. We do this because it allows Rythm to save recourses while no-one is listening to it and keeps the music quality consistent for all users, everywhere and alwayseverytime.

If you want Rythm to rejoin your channel, simply type **`!summon`**.

## Rythm removes my playlist I queued after it left!
Rytjm will automaticlaly clear/reset the queue when it leaves the voice channel. 

We'd advice you to create a playlist on YouTube and add all the songs you want to have. This way you can use `!play playlistURL` and Rythm will play all your songs again!

## Rythm sends blank messages. What's happening?
Rythm uses "Rich Embeds" to post messages. By this, it might be **disabled** on your client. Please make sure you enable it!

How? Easy! Go to your **Discord User Settings** > click on **"Text & Images"** > **Enable** "Show website preview info from links pasted into chat”.

![Embed Links](./static/img/embed.png)

### Rythm isn't responding to my commands!
*If Rythm isn't responding to commands, try the following:*
 - **Make sure you're using the correct prefix**. You are able to check Rythm's current prefix by mentioning it.
   - Example: **@Rythm#3722 OR <@!235088799074484224>**

 - **Make sure Rythm has permissions to send messages in the channel**. You can give Rythm's roles “**Administrator**” permission to Rythm to make this easier.

 - Take a look at our **#outages** channel on our [Official Discord Server](https://discord.gg/rythm) to see if there are any issues going on.

 - If the above methods do not work, please choose option  **`7`** in our `#help-desk` channel on the Rythm Bot Discord server to receive assistance from our Support Team.

### How can I reset Rythm's prefix?
*If you have changed the Rythm's default prefix to a custom one and now can’t make Rythm work or aren’t able to change the prefix back, try the following:*

1. **Try to mention Rythm.** You can do this by typing: **@Rythm#3722** or **<@!235088799074484224>**. When you mention Rythm, do it in a text channel Rythm can send messages in.

2. **Copy the Prefix response.** After mentioning Rythm, it should give you a message similar to this, but showing the prefix your Rythm is set to:

![Mention Rythm](./static/img/NNXTGPO.png)

**You must Copy the part that is marked in red.**

3. **Run the prefix command.** Paste the copied text in your text channel and **right next to it** with **no spaces** type: `settings prefix !`


**Example**: To set the prefix back to **!** in the above picture, the command would be this:

**`DJsettings prefix !`**


**Note:** You must have a role with the “Administrator” or the “Manage Server” permission to be able to change Rythm’s prefix.

### Rythm is responding to my commands but isn't joining the Voice Channel
1. Move to a different voice channel.
2. !summon the bot into that voice channel.
3. Move back to the original voice channel.
4. !summon the bot back into the original voice channel.

If the above method does not work:
Try changing the **Server Region** of your server or kicking & reinviting Rythm to your Discord server.