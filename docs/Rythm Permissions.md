---
id: permissions
description: This article will give you a clear view of Rythm's permission system.
title: Rythm's built-in system
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Rythm's built-in permission system can be divided into the following groups:

### Normal users
By default, all users can only:
- Add songs to the queue and remove their own songs.
- Use commands that don't interfere with the music playing or the queue.
  - Example: `lyrics`, `queue`, `grab`.
- Skip a song through voting.

:::info Note
If `DJ Only mode` is enabled, normal users **will not** be able to play songs with Rythm. [**More Info**](/settings#dj-only-mode)
:::

### Users with Special Permissions

| Type of Users                                                                                                                      | Music Control* | Rythm Setting Control  |
|:-----------------------------------------------------------------------------------------------------------------------------------|:--------------:|:----------------------:|
| Users with DJ permissions<br/>(Either:<br/>- Listening alone with Rythm<br/>- Have `DJ` role<br/>- Have `Manage Channels` permission)  |       ✅  |                        |
| Users with `Manage Server` permission                                                                                         |                |         ✅             |
| Users with `Administrator` permission                                                                                         |      ✅        |        ✅              |

*Also bypass `Max User Songs` setting limit. [**More Info**](/settings#max-user-songs)

:::info
Users deafened in the voice channel are counted as not using Rythm. For instance, if you are in a voice channel with 3 other deafened users, you will have DJ permissions!
:::

## How can I give all users access to all music commands?
---
There is currently no setting that will apply DJ to all users. You will have to either give them the `Manage Channels` permission or the `DJ` role manually.

If every member in your server has a common role, you can use the following settings command to set that role to be DJ Role: `!settings djrole <Role name> / <@Role>`. To learn more, head to the [DJ Role section](/dj_role).
