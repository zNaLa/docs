---
id: permissions
title: Understanding Rythm's Permissions
---

## What users can use what command?

Rythm's built-in permission system can be divided into the following groups:

### Normal user without any special roles
 - Is able to add songs to the queue but can't remove other user's songs (can remove their own)
 - Is able to use commands that don't interfere with other people's music.
   - `lyrics`, `np`, `queue`, etc.
 - Can't skip a song without voting.
 - Doesn't have access to control the music in any way.

### User alone with Rythm, with a `DJ` role or the `Manage Channel` permission
:::info note
This includes all other users in the voice chat being deafened.
:::
 - Has full access to all music commands.
 - Can't change Rythm's settings.

**Note**: If there isn't a role named `DJ` in your server, one can be created with no special permissions assigned and they will still be able to access these features.

### User with `Manage Server` permission
 - Is able to change Rythm's settings.
 - Is limited to normal user's music commands, unless they have Manage Channel or the DJ role.

### User with `Administrator` permission
 - Is able to change Rythm's settings.
 - Has full access to all music commands.

## How can I make Rythm only respond to Admins/specific roles?
In order to make Rythm commands just available to specific roles, you can do the following:

### DJ Only Mode
:::info
If someone is alone with Rythm, they are able to use Rythm regardless of having a `DJ` role/`Manage Channel` permission.
:::

 1. Give those you want to have access a role named `DJ`
 2. Run `!settings djonly on`
 
### Blacklisting Channels
 1. Make a channel that can only be seen by users with the specific role.
    <details>
        <summary>Click here for how.</summary>
        <ol>
            <li><img src="/img/docs/perms/role-1.png" alt="role 1"/></li>
            <li><img src="/img/docs/perms/role-2.png" alt="role 2"/></li>
        </ol>
        <ul>
            <li>More information on how to do this can be found at <a href="https://support.discord.com/hc/en-us/articles/206029707">Discord's support page.</a></li>
        </ul>
    </details>
 2. Blacklist all other text channels with Rythm's blacklist function.
    <details>
    <summary>Alternatively, you can use Discord's permission system if you don't want any blacklisted channel messages.</summary>
    <img src="/img/docs/perms/deny-rythm.png" alt="deny rythm"/>
    </details>
 
To blacklist channels, use the following command: 
`!settings blacklist #channel #channel2...`

**Example**: `!settings blacklist #chat #gaming #international...`<br/>
![blacklist example](/img/docs/settings/blacklist-text-channel-example.png)

## How can I give all users access to all music commands?
There is currently no setting that will apply DJ to all users. You will have to either give them the `Manage Channel` permission or the DJ role.

If you do not want users having the `Manage Channel` permission to use commands, you can follow the steps below to give them permissions using a couple of ways.

1. Go to **Server Settings** ➠ **Roles** ➠ Make a new role called `DJ`.
2. You can use the following command to set another DJ Role: `!settings djrole <Role name> / <@Role>`.
    + **Example:** `!settings djrole NewDJRole`
    + **Example:** `!settings djrole @NewDJRole`
3. The DJ role has to be assigned manually to users you want to have extra permissions

:::info note
Users alone in a voice channel with Rythm will be treated as though they have the DJ role until another user joins the voice channel with them even if they have no roles. Members with the `DJ` role will not be able to change any of Rythm's settings.
:::

## How can I block music commands in a specific text channel?
You can use `!settings blacklist #channels` to blacklist a specific  text channel.

<details>
<summary>Alternatively, you can use Discord's permission system if you don't want any blacklisted channel messages.</summary>
<img src="/img/docs/perms/deny-rythm.png" alt="deny rythm"/>
</details><br/>

**Example**: `!settings blacklist #chat #gaming #international...`
![Blacklist example](/img/docs/settings/blacklist-text-channel-example.png)

## How can I limit the number of songs that one user can add to the queue?
You can use `!settings maxusersongs <1-10000>` to set how many songs that one user can add to a queue.

**Example**: `!settings maxusersongs 1`<br/>
![Max user songs example](/img/docs/settings/max-user-songs-example.png)

## How can I prevent duplicate songs from being added to the queue?
You can use `!settings preventduplicates on` to prevent any duplicates from being queued.

**Example**: <br/>
![Prevent duplicates example](/img/docs/settings/prevent-duplicates-example.png)

## How can I limit the number of songs that can be added to the queue?
You can use `!settings maxqueuelength <10-10000>` to limit the length of the queue.

**Example**: `!settings maxqueuelength 25`<br/>
![Max queue length example](/img/docs/settings/max-queue-length-example.png)

## How do I restrict Rythm from joining a voice channel?
To disallow Rythm from being used within certain voice channels, you must use the Discord permission system.

1. Go to your server's settings and select `Roles`.
2. Find Rythm, revoke its `Administrator` permission and grant the `Read Text Channels & See Voice Channels`, `Send Messages`, `Embed Links`, `Connect` and `Speak` permissions.
   - If you have any other roles Rythm is assigned to, repeat this step for each role.
3. Save and close out of server settings.
4. Go to each voice channel you want to restrict Rythm from connecting to.
5. Click `Edit Channel` ➠ `Permissions` ➠ `Add` ➠ `Rythm`
6. Deny the `Connect` permission on the Rythm override.
7. Save and close out of channel settings.
