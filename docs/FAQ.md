---
id: faq
title: Frequently Asked Questions
---



<!-- The start of the Introduction Section -->
## Introduction
-----
### What is Rythm Bot?
[Rythm](/start) is a feature-rich, high-performance music bot for Discord, specially designed to deliver High Quality music, stability and ease of use while also providing advanced music functionality in order to create the ultimate music bot experience.

### How can I add Rythm to my Discord Server?
Please [click here](/adding_rythm) to check out our guide on adding Rythm.

### What are the differences among the 5 Rythm bots?
- Their default prefixes are different.
- Rythm 1 & 2 are available to public for free, while the other three bots require you to [subscribe Premium](https://rythm.fm/premium).

You may find their default prefixes and their invite links [here](/adding_rythm#rythm-releases)
<!-- The end of the Introduction Section -->

<!-- The start of the Basic Information Section -->
## Basic Information
-----

### How can I change/reset Rythm's prefix in my server?
Head to the [Prefix Settings](/settings#prefix) section to learn more.

### How can I change Rythm's nickname in my server?
:::note note
Make sure you have the `Manage Nicknames` permission!
:::
1. **Right Click** Rythm's name and press `Change Nickname`. A menu will pop up looking like this:

![NicknameMenu](/img/docs/faq/nickname-menu.png)

2. Type in your desired nickname.
3. Press `Save` and you're good to go.

### What do the 3 emojis in `!ping` mean?

| Emoji  | Meaning               |
|:------:|:---------------------:|
| ⌛     | API response time     |
| ⏱️     | Message response time |
| 💓     | Websocket heartbeat   |

### Why can some normal users access moderative music commands?
1. Normal users with no special permissions are only allowed to use the `!play` command to add songs to the queue and the `!remove` command to remove their own songs in the queue.
   They can also use other commands that don't affect the playing music or the queue in any way. Example: `!queue`, `!lyrics`, `!save`.
2. However, normal users can access ALL music commands when they are alone with Rythm in the voice channel.
   This is because their commands would not affect anyone but themselves.
  - For more information about users command permissions, refer to the **[Understanding Permissions](/permissions)** section in this documentation.
<!-- The end of the Basic Information Section -->

<!-- The start of the Limitations/Restrictions Section -->
## Limitations/Restrictions
-----
### Can I change Rythm's Profile Picture/Avatar in my server?
No, Discord does not allow bots to change their profile picture/avatar per server.

### Can I save or create playlists with Rythm?
No, unfortunately Rythm doesn't have a built-in feature to store playlists. But wait, there are a few solutions to this:
  - You can do `!grab` to save the current playing song into Rythm's direct messages.
  - You can save playlists from supported music sites and play them through Rythm. (See List of supported music sites below)

### What music sites does Rythm currently support?
These are the current sites that music can be played from.

1. [YouTube](https://www.youtube.com/)
2. [SoundCloud](https://www.soundcloud.com/)
3. [Twitch](https://www.twitch.tv/)
4. [Vimeo](https://www.vimeo.com/)
5. [BandCamp](https://www.bandcamp.com)
6. [Spotify](https://www.spotify.com/)

### How is it possible for Rythm to play music from Spotify?
Rythm finds the songs from Youtube and plays them.

You can play Spotify song/playlist through Rythm by just simply doing `!play <Song/Playlist url>`!

### Can I adjust the volume for everyone on my server for Rythm?
Yes, if you activate [Premium](https://rythm.fm/premium) for your server.

Rythm uses the default volume when using audio streams. In order to change the volume of these audio streams we need to enable encoding. As encoding requires a lot of computing resources, only donators can access this feature.

You may set the local volume of Rythm for yourself:
1. If you are on computer, you can right-click Rythm in the voice channel and adjust the user volume slider as shown below.

![VolumeMenu](/img/docs/faq/user-volume.png)

2. If you are on phone, click on the channel you are in then click on the user. A bar will appear at the bottom with their name and role, scroll down and you will see the option to change user volume.

![PhoneVolumeMenu](/img/docs/faq/phone-user-volume.png)

#### For [Premium Users](https://rythm.fm/premium)
The volume command is `!volume <1-200>`.
- **Example:** `!volume 80`

### Can I make custom commands for Rythm?
No, we do not allow custom commands/aliases. To check available aliases, just run the command `!aliases`.
You can suggest any aliases that you can think of in the [#rythm-suggestions](https://discord.com/channels/231471142685245440/679554693403639835) channel on the [Rythm Bot Discord server](https://discord.com/invite/3r3b99Q4My).

### Can Rythm stream the video of the song that is being played?
No, Discord does not allow bots to use the `Go Live` feature.

### How is it possible for Rythm to be in so many servers all in once?
Discord allows bots in over `2,000` servers to use a feature called `Sharding`.
In Rythm's case, we are known as the largest music bot on Discord, so we require lots of shards to maintain uptime.
For more detail, [click here](https://discord.com/developers/docs/topics/gateway#sharding) to view more about Discord's Sharding feature.

### Can Rythm play 24/7 Music?
Yes, if you activate [Premium](https://rythm.fm/premium) for your server.

### Can Rythm execute commands given by other bots?
No, Rythm doesn't respond to commands issued by other bots as it can be easily abused. This restriction will not be removed, nor will any exceptions be made.

## Rythm Links
-----
### I have encountered an issue with Rythm!
Encounter freaky issues? You can use the links below to help you fix any of those issues:
+ [Invite Troubleshooting](/invite_troubleshooting)
+ [Basic Troubleshooting](/basic_troubleshooting)
+ [Audio Troubleshooting](/audio_troubleshooting)
+ [Mobile Troubleshooting](/mobile_troubleshooting)
+ [Dashboard Troubleshooting](/dashboard_troubleshooting)
### None of these solutions solved my problem!
If you couldn't find an answer to your question in either this FAQ or in the troubleshooting pages, please go to [Get Support](/get_support) section for further support.

### What is Rythm's Discord Server used for?
Rythm's Discord Server is a place built for everything related to Rythm!
1. Get help and support from our lovely Staff Members!
2. You will be informed about Rythm's new features and updates.
3. Stay up-to-date with news and announcements.
4. Make new feature suggestions for Rythm.
5. Hang out with our amazing growing community members and staff!
6. Join and enjoy our events that take place!

To join our server, click [here](https://discord.com/invite/3r3b99Q4My).
