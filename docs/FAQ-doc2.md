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

<!-- The end of the Introduction Section -->

<!-- The start of the Basic Information Section -->
## Basic Information
-----
### How can I play a song or a playlist with Rythm?
When using Rythm you can either play a song or a playlist. To play a song or a playlist with Rythm use the commands below.

1. To play a song `!play <Song Name/Song URL>`
    + **Example:** `!play Wanted by OneRepublic`
    
    ![PlayMusicName](/img/docs/faq/play-music-name.png)

    + **Example:** `!play https://www.youtube.com/watch?v=N_qFfQ3xHCw`

    ![PlayMusicLink](/img/docs/faq/play-music-link.png)

:::info note
Make sure that your song is not over **3 hours long** or Rythm will refuse to play it. To play songs longer than 3 hours, you can consider [**donating**](https://rythmbot.co/donate?do) to Rythm!
:::

2. To play a playlist `!play <Playlist URL>`
    + **Example:** `!play https://www.youtube.com/watch?v=oygrmJFKYZY&list=PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10`

![PlayMusicPlaylist](/img/docs/faq/play-music-playlist.png)

:::caution note
Make sure the playlist is either `Unlisted` or `Public`. If it is set to `Private` Rythm won't be able to play that specific playlist. Rythm will play up to `500 songs` from a playlist.
:::

### How can I change Rythm's Prefix?
Changing Rythm's prefix is as simple as using a command. You can change the prefix by using the settings command `!settings prefix <New Prefix>`
- **Example:** `!settings prefix $`

![SetPrefix](/img/docs/faq/set-prefix.png)

:::caution note
You must have the permissions `Administrator` or `Manage Server` to change Rythm's Prefix in your server.
Do **not** include `<>` when setting the prefix
:::

### But wait! I don't know my prefix!
If you don't know or forget Rythm's prefix, don't stress. We have you covered. You can view the prefix simply by mentioning the bot.

1. For Rythm
    + **Example:** `@Rythm#3722` OR `<@!235088799074484224>`

![MentionPrefix](/img/docs/faq/rythm-1.png)

2. For Rythm 2:
    + **Example:** `@Rythm 2#2000` OR `<@252128902418268161>`

![MentionPrefix2](/img/docs/faq/rythm-2.png)

3. For Rythm Canary:
    + **Example:** `@Rythm Canary#8406` OR `<@415062217596076033>`

![MentionPrefixC](/img/docs/faq/rythm-c.png)

:::tip note
Rythm's default prefix is `!`, Rythm 2's prefix is `>`, Rythm Canary's prefix is `*`.
:::

### How can I change Rythm's nickname in my server?
1. Make sure you have the `Manage Nickname` permission.
2. Then you will have to **Right Click** Rythm's name and press `Change Nickname`
3. A menu will pop up looking like this:

![NicknameMenu](/img/docs/faq/nickname-menu.png)

4. Type in your desired nickname.
5. Finally you can press `Save` and you're good to go.

### How can I donate to Support Rythm?
Do you enjoy/love Rythm? You can donate to us today!

- You can donate by [clicking here](https://rythmbot.co/donate?d)
  + You will get awesome perks such as **Volume control**, , **Audio Effects**, **Autoplay**, **Songs longer than 3 hours**, **Role(s) in our Discord server** and more!

### How can I change the location of Rythm Announcing Songs?
Rythm will announce songs in the channel the first command is used.

1. Let's say you used the `!play <Song>` or the `!summon` command in the channel `#music`. Rythm will start announcing songs in that channel.
2. If you would like to change the location of the song announcements, you can do `!join` the desired channel.

### How can I view more than one page using the `queue` command?
You can view more than one queue page by doing the following below.

1. To view more queue pages `!queue <Page Number>`.
    + **Example:** `!queue 2`
    + **Example:** `!queue 3`

![QueueNumber](/img/docs/faq/queue-number.png)

### How can I remove duplicate songs from the queue?
To remove duplicate songs you can use the command `!removedupes`

Rythm will then remove all duplicates of any songs within your servers queue.

### Why can some normal users access moderative music commands?
1. Normal users with no special permissions are only allowed to use the `!play` command to add songs to the queue by default.
   They can also use other commands that don't affect the playing music in any way. Example: `!queue` and `!lyrics`.
2. However, normal users can access ALL music commands when they are alone with Rythm in the voice channel.
   This is because their commands would not affect anyone but themselves.
    + For more information about users command permissions, refer to the **[Permissions](/permissions)** section in this FAQ.

### How many votes are required for a song to be vote skipped?
For a vote skip to take effect, `75%` of the people in the voice chat need to vote to skip.

**__Here's an example:__**
1. Let's assume there are `10` users in a voice chat.
2. The threshold for skipping is calculated as `75% of 10 = 7.5`, then rounded down, so `7`.
3. For the vote skip to take effect, you would then need `7 vote skips.`

:::caution note
Vote skip will not be active until there are **3 or more people** in the voice channel.
(As with one person, insta-skip is enabled and with two the threshold for skipping is 1).
:::
<!-- The end of the Basic Information Section -->

<!-- The start of the Limitations/Restrictions Section -->
## Limitations/Restrictions
-----
### Can I have more than one Rythm in the same server?
Yes! You can invite up to 3 releases by [clicking here](https://rythmbot.co/releases).

### Can I change Rythm's Profile Picture/Avatar in my server?
No, Discord does not allow bots to change their profile picture/avatar per server.

### Can Rythm play Spotify?
Yes! All three Rythm bots support Spotify.

### What music sites does Rythm currently support?
These are the current sites that music can be played from.

1. [YouTube](https://www.youtube.com/)
2. [SoundCloud](https://soundcloud.com/)
3. [Twitch](https://www.twitch.tv/)
4. [Vimeo](https://vimeo.com/)
5. [BandCamp](https://bandcamp.com)
6. [Spotify](https://www.spotify.com/)

### Can I adjust the volume for everyone on my server for Rythm?
Yes, if you [donate](https://rythmbot.co/donate?do)

Rythm uses the default volume when using audio streams. In order to change the volume of these audio streams we need to enable encoding. As encoding requiring a lot of compute resources, only donators can access this feature.

You may set the local volume of Rythm for yourself:
1. If you are on PC, you can right-click Rythm in the voice channel and adjust the user volume slider as shown below.
![VolumeMenu](/img/docs/faq/user-volume.png)
2. If you are on phone, click on the channel you are in then click on the user. A bar will appear at the bottom with their name and role, scroll down and you will see the option to change user volume.
    <!-- I can't make example of this as I don't have a phone. ):< -->

#### Donators
For donators, the volume command is `!volume <number>` (Allowed Values: `1 - 200`).

- **Example:** `!volume 80`

### Can I make custom commands for Rythm?
No, we do not allow custom commands/aliases. You can check any alias avaiable by doing `!aliases`
However, you can suggest any aliases that you can think of in the `#rythm-suggestions` channel on the [Rythm Bot Discord server](https://rythmbot.co/support).

### Can Rythm play 24/7 Music?
No, Rythm is not a 24/7 music bot.
The reason behind this decision is because music bots require a lot of resources.
So when the bot is by itself, and not being used by anyone, these resources are still being used, leaving less available for other people. 
If you do want a bot that plays music 24/7, you can host one with [Moosic](https://github.com/Repulser/Moosic).
Instructions on how to host this is on [Moosic's wiki](https://github.com/Repulser/Moosic/wiki).

### How is it possible for Rythm to be in so many servers all in once?
Discord allows bots in over `2,000` Servers to use a feature called `Sharding`.
In Rythm's case, we are known as the largest music bot on Discord, so we require lots of shards to maintain uptime.
For more detail, please [click here](https://discord.com/developers/docs/topics/gateway#sharding) to view more about Discords Sharding feature.

## Roles/Permissions
---
See [Understanding Permissions](/permissions) for information on how permissions work with Rythm and how to set them up. 

## Settings/Configuration
---
See [Settings & How They Work](/settings) for information on how to use Rythm's settings.

## Rythm Links
-----
### I have encountered an issue with Rythm!
If you have encountered an issue with Rythm, you can use the links below to help you fix any of those issues.
+ [Basic Troubleshooting](/basic_troubleshooting)
+ [Audio Troubleshooting](/audio_troubleshooting)
+ [Mobile Troubleshooting](/mobile_troubleshooting)
+ [Miscellaneous Help Options](/misc_help)

### None of these solutions solved my problem!
Sorry that your issue has not been fixed with the FAQ and Troubleshooting Page. 
+ If you find that your question was not answered by this FAQ Page or the Troubleshooting Page, please visit our support server by [clicking here](https://rythmbot.co/support)!

### What is Rythm's Discord Server used for?
Rythm's Discord Server is a place built for everything related to Rythm!
1. Get help and support form our lovely Support Members!
2. You will be informed about Rythm's new features and updates.
2. Stay Up-to-Date with news and announcements.
3. Hang out with our amazing growing community members and staff!
4. Join and enjoy our events that take place!
5. Make new feature suggestions for Rythm.
