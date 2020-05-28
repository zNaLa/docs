---
id: permissions
title: Understanding Rythm's Permissions
---

## What users can use what command?

Rythm's built-in permission system can be divided into the following groups:

### Normal Users / Users without any special roles
 - Are able to add songs to the queue but can't remove other's songs. <!--Word it better?-->
 - Are able to use commands that don't interfere with other people's music.
   - `lyrics`, `np`, `queue`, etc.
 - Can't skip a song without voting.
 - Don't have access to control the music in any way.

### Users alone with Rythm, with a DJ role or the Manage Channel permission
*This includes all other users in the voice chat being deafened.*
 - Have full access to all music commands.
 - Can't change Rythm's settings.

**Note**: If there isn't a role named '**DJ**' in your server, once can be created with no special permissions assigned and they will still be able to access these features.

### Users with Manage Server permission
 - Are able to change Rythm's settings
 - Are limited to normal user's music commands, unless they have Manage Channel or the DJ role.

### Users with Administrator permission
 - Are able to change Rythm's settings
 - Have full access to all music commands.

## How can I make Rythm only respond to Admins/specific roles?
In order to make Rythm commands just available to specific roles, you can do the following...

### Blacklisting Channels
Perfect for if you want to let other roles have access without allowing them to interfere with other people's music.
 1. Make a channel that can only be seen by users with the specific role.
 2. Blacklist all other text channels with Rythm's blacklist function.
 
To blacklist channels, use the following command: 
`!settings blacklist #channel`

**Example**: `!settings blacklist #general #`

### DJ Only Mode
Perfect for if you don't want to blacklist every channel, or only allow staff to use music commands.
**Note**: If they are alone with the bot, they will still be able to use music commands if there is a channel they can access.
 1. Give everyone 

Write a detailed explanation of discord's permission system. be sure to include how to allow/deny users voice perms.
