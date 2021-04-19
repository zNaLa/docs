---
id: permissions
title: Understanding Rythm's Permissions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This article will give you a clear view of Rythm's permission system and help you set up Rythm in your server.
## What users can use what command?
---
Rythm's built-in permission system can be divided into the following groups:

### Normal users
By default, all users can only:
- Add songs to the queue and remove their own songs.
- Use commands that don't interfere with the music playing or the queue.
  - Example: `lyrics`, `queue`, `grab`.
- Skip a song through voting.

### Users with Special Permissions

| Type of Users                                                                                                                      | Music Control* | Rythm Setting Control  |
|:-----------------------------------------------------------------------------------------------------------------------------------|:--------------:|:----------------------:|
| Users with DJ permissions<br/>(Either:<br/>- Listening alone with Rythm<br/>- Have `DJ` role<br/>- Have `Manage Channels` permission)  |       ✅  |                        |
| Users with `Manage Server` permission                                                                                         |                |         ✅             |
| Users with `Administrator` permission                                                                                         |      ✅        |        ✅              |

*Also bypass `Max User Songs` setting limit. [**More Info**](/settings#max-user-songs)

:::info Note
If `DJ Only mode` is enabled, normal users **will not** be able to play songs with Rythm. [**More Info**](/settings#dj-only-mode)
:::

## Why does Rythm ask for `Administrator` permission when I invite it?
## What permissions do I need to grant if I don't want the bot to have `Administrator` permission?
---
Upon inviting, Rythm asks for `Administrator` permission because it will make things easier for you to use the bot without any setup required. Make sure Rythm has all of these permissions to work properly if you revoke its `Administrator` permission: `Read Text Channels & See Voice Channels`, `Send Messages`, `Manage Messages`, `Embed Links`, `Add Reactions`, `Use External Emoji`, `Connect`, `Speak`.


## How can I make Rythm only respond to Admins/specific roles?
---
In order to lock Rythm's commands to a specific role, you can try one of the following:

### DJ Only Mode
 1. Give users you want to have access a role named `DJ` or a role which is considered as DJ from the `!settings djrole` command. ([More info on DJ Role setting](/settings#dj-role))
 2. Run `!settings djonly on` ([More info on DJ Only mode](/settings#dj-only-mode))

### Blacklisting Channels
 1. Make a channel that can only be seen by users with the specific role.
    <details>
        <summary>Click here for how.</summary>
        <ul>
            <img src="/docs/img/docs/perms/role.png" alt="role"/>
            <li>More information on how to do this can be found at <a href="https://support.discord.com/hc/en-us/articles/206029707">Discord's support page.</a></li>
        </ul>
    </details>
 2. Blacklist other text channels by following [here](/permissions#how-do-i-restrict-rythm-from-being-used-in-a-specific-textvoice-channel)

:::caution Note   
WIth this method, users are still able to queue songs via the web dashboard.
:::
## How can I give all users access to all music commands?
---
There is currently no setting that will apply DJ to all users. You will have to either give them the `Manage Channels` permission or the DJ role manually.

If every member in your server has a common role, you can use the following settings command to set that role to be DJ Role: `!settings djrole <Role name> / <@Role>`. To learn more, head to the [DJ Role section](/dj_role).

## How do I restrict Rythm from being used in a specific text/voice channel?
---
### Block music commands from specific text channels.
You can use `!settings blacklist #channels` to blacklist specific text channels.

**Example**: `!settings blacklist #chat #gaming #international...`

![Blacklist example](/img/docs/settings/blacklist-text-channel-example.png)

If you don't want Rythm respond with the blacklist message, you can follow the guide below.

### Block Rythm completely from text/voice channels.
To disallow Rythm from being used within certain text/voice channels, you must use the Discord's permission system as described below:

<Tabs
  defaultValue="text"
  values={[
    {label: 'Text Channels', value: 'text'},
    {label: 'Voice Channels', value: 'voice'},
  ]}>
  <TabItem value="text">
    <ol type="1">
      <li>Go to your server's settings and select <code>Roles</code>.</li>
      <li>Find Rythm, revoke its <code>Administrator</code> permission and grant the <code>Read Text Channels & See Voice Channels</code>, <code>Send Messages</code>, <code>Manage Messages</code>, <code>Embed Links</code>, <code>Add Reactions</code>, <code>Use External Emoji</code>, <code>Connect</code> and <code>Speak</code> permissions.
  <ul><li>If you have any other roles Rythm is assigned to, repeat this step for each role.</li></ul></li>
      <li>Save and close out of server settings.</li>
      <li>Go to each text channel settings you want to restrict Rythm from responding in.</li>
      <li>Head to the <code>Permissions</code> section ➠ Click <code>+</code> ➠ <code>Rythm</code></li>
      <li>On the Rythm override, deny the <code>Read Messages</code> and <code>Send Messages</code> permissions.</li>
      <li>Save and close out of channel settings.</li>
    </ol>
  </TabItem>
  <TabItem value="voice">
    <ol type="1">
      <li>Go to your server's settings and select <code>Roles</code>.</li>
      <li>Find Rythm, revoke its <code>Administrator</code> permission and grant the <code>Read Text Channels & See Voice Channels</code>, <code>Send Messages</code>, <code>Manage Messages</code>, <code>Embed Links</code>, <code>Add Reactions</code>, <code>Connect</code> and <code>Speak</code> permissions.
  <ul><li>If you have any other roles Rythm is assigned to, repeat this step for each role.</li></ul></li>
      <li>Save and close out of server settings.</li>
      <li>Go to each voice channel settings you want to restrict Rythm from connecting to.</li>
      <li>Head to the <code>Permissions</code> section ➠ Click <code>+</code> ➠ <code>Rythm</code></li>
      <li>On the Rythm override, deny the <code>Connect</code> permissions.</li>
      <li>Save and close out of channel settings.</li>
    </ol>
  </TabItem>
</Tabs>
