---
id: commands
title: Commands
---

:::info Note
### Always remember the following!
- The default prefix of Rythm is `!`. If you have changed your prefix to something else, please use your prefix instead of `!`. If you forget your prefix, mention Rythm (`@Rythm#3722`). 
- **Never include `<>` in your messages when using a command!**
- Time can be in different formats
   + Example: `100`, `1:50`, `2m30s`
:::

---
<!-- Song-related commands -->
- **`!join`** - Summons the bot to the voice channel you are in.
--- 
- **`!play`** - Plays a song with the given name or url. [More Info](/play_song)
    - `!play <song/link>` 
---
- **`!playtop`** - Like the play command, but queues from the top. 
    - `!playtop <link/query>`
--- 
- **`!playnow`** - Skips the current song and plays the song you requested.
    - `!playnow <link/query>`
--- 
- **`!search`** - Searches YouTube for results of a URL.
    - `!search <song name>`
--- 
- **`!soundcloud`** - Searches SoundCloud for a song.
    - `!soundcloud <Search query>`
--- 
- **`!nowplaying`** - Shows what song the bot is currently playing.
--- 
- **`!grab`** - Saves the current playing song to your Direct Messages.
---
- **`!seek`** - Seeks to a certain point in the current track.
    - `!seek <time>`
--- 
- **`!rewind`** - Rewinds by a certain amount in the current track. 
    - `!rewind <time>`
--- 
- **`!forward`** - Forwards by a certain amount in the current track.
    - `!forward <time>`
--- 
- **`!replay`** - Resets the progress of the current song.
--- 
- **`!loop`** - Toggles looping for the current playing song.
--- 
- **`!skip`** - Votes to skip the currently playing song.
    - `!skip <number>` - Skip a certain amount of songs (`DJ` role/`Manage Channels` permission required)
--- 
- **`!forceskip`** - Skips the currently playing song. (`DJ` role/`Manage Channels` permission required)
--- 
- **`!pause`** - Pauses the currently playing track. 
--- 
- **`!resume`** - Resumes paused music.
--- 
- **`!lyrics`** - Gets the lyrics of the current playing song.
    - `!lyrics <song name>` - Gets the lyrics of the mentioned song.
--- 
- **`!disconnect`** - Disconnects the bot from the voice channel it is in.
---
<!-- Queue-related commands -->
- **`!queue`** - Shows the queue. To view different pages, type the command with the specified page number after it.
    - `!queue <page>`
--- 
- **`!loopqueue`** - Toggles looping for the whole queue.
--- 
- **`!move`** - Moves a certain song to the first position in the queue.	 
    - `!move <old positon> <new position>` - Move a certain song to a chosen position in the queue.
--- 
- **`!skipto`** - Skips to a certain position in the queue. 
    - `!skipto <position>`
--- 
- **`!shuffle`** -  Shuffles the entire queue. 
--- 
- **`!remove`** - Removes a certain entry from the queue.
    - `!remove <numbers>`
---
- **`!clear`** - Clears the whole queue. 
    - `!clear <@user>` - Clears all songs requested by the mentioned user.
--- 
- **`!leavecleanup`** - Removes absent user's songs from the Queue.
---
- **`!removedupes`** - Removes duplicate songs from the queue.
--- 
<!-- Settings-related commands -->
- **`!settings`** - Use the command format `!settings <option>` to view more info about an option. [More Info](/settings)

    - **`prefix`** - Changes Rythm's prefix. [More Info](/settings#prefix)
    - **`announcesongs`** - Allows the bot to announce every new song playing. [More Info](/settings#announce-songs)
    - **`preventduplicates`** - Prevents users from adding songs to the queue that are already in the queue. [More Info](/settings#duplicate-song-preventation)
    - **`blacklist`** - Allows you to blacklist channels you **don't** want Rythm to respond in. [More Info](/settings#blacklist)
    - **`maxqueuelength`** - Limits how many songs the queue can store. [More Info](/settings#max-queue-length)
    - **`maxusersongs`** - Limits how many songs the user can queue at one time. [More Info](/settings#max-user-songs)
    - **`djonly`** - Sets the server to run in DJ only mode. [More Info](/settings#dj-only-mode)
    - **`djrole`** - Changes which role is considered DJ. Roles named `DJ` will still work. [More Info](/settings#dj-role)
    - **`djplaylists`** - Allows only DJs to queue playlists. [More Info](/settings#dj-only-playlists)
    - **`defaultvolume`** - Sets the default volume that the bot will always start at. [**Donator Only**](https://rythmbot.co/donate?do). [More Info](/settings#default-volume)
    - **`autoplay`** - Toggles auto-playing songs from playlist when nothing else playing. [**Donator Only**](https://rythmbot.co/donate?do). [More Info](/settings#autoplay)
    - **`reset`** - Resets Rythm totally. [More Info](/settings#reset)
--- 
<!-- Donators-related commands -->
- **`!donate`** - Information about donating to Rythm.
--- 
- **`!effects`** - Shows current audio effects.  [**Donator Only**](https://rythmbot.co/donate?do)
    - `!effects help` - Shows all available audio effects.
    - `!effects clear` - Clears all audio effects.
---
- **`!speed`** - Modifies the playback speed.  [**Donator Only**](https://rythmbot.co/donate?do)
---
- **`!bass`** - Bass boosts the current song.  [**Donator Only**](https://rythmbot.co/donate?do)
---
- **`!nightcore`** - Toggles nightcore effect.  [**Donator Only**](https://rythmbot.co/donate?do)
---
- **`!slowed`** - Toggles slowed effect.  [**Donator Only**](https://rythmbot.co/donate?do)
---
- **`!volume`** - Outputs the current volume.   [**Donator Only**](https://rythmbot.co/donate?do)
    - `!volume <amount>` - Change the current volume. (Allowed Value: 1-200)
--- 
<!-- Bot-related commands -->
- **`!prune`** - Deletes the bot's messages and commands.
--- 
- **`!invite`** - Rythm's official links! 
--- 
- **`!info`** - Information about Rythm!
--- 
- **`!shard`** - Checks the server shard you are in.
--- 
- **`!ping`** - Checks the bot's response time to Discord.
---
- **`!aliases`** - Lists command aliases.
--- 
