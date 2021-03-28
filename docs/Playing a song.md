---
id: play_song
title: Playing a Song
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Now that you have Rythm in your server, you can get the party started! To begin playing songs through Rythm, follow this guide:

## 1. Join a Voice Channel.
  - You can do that by clicking on the channel with a speaker icon.

  ![Voice Channel image](/img/docs/playing-a-song/vc.gif)

## 2. Summon Rythm into the Voice Channel
  - You can make Rythm join the Voice Channel by typing `!summon`. After so, Rythm should be in the Voice Channel with you as below:

  ![Joining a Voice Channel](/img/docs/playing-a-song/joinvc.gif)

## 3. Start your music.

  - Use the command `!play` to start your music.
  <Tabs
    defaultValue="ps"
    values={[
      {label: 'Play a Song', value: 'ps'},
      {label: 'Play a Playlist', value: 'pp'},
    ]}>
    <TabItem value="ps"> To play a song, type <code>!play &lt;Song Name/Song URL&gt;</code><br/><br/>
      <img src="/docs/img/docs/playing-a-song/playsongname.png" alt="example-1"/>
      <img src="/docs/img/docs/playing-a-song/playsonglink.png" alt="example-2"/>
    </TabItem>
    <TabItem value="pp"> To play a playlist, type <code>!play &lt;PlaylistURL&gt;</code><br/><br/>
      <img src="/docs/img/docs/playing-a-song/playplaylist.png" alt="example-pl"/>
    </TabItem>
  </Tabs>

:::caution When playing a playlist:
  - Make sure the playlist is either `Unlisted` or `Public`. If it is set to `Private`, Rythm won't be able to play that specific playlist.
  - Rythm can only play the first `500 songs` from a playlist.
:::

## 4. Search for more results
  - If you need more search results, you can use `!search <song name>` and choose the option you want.

  ![Searching a song](/img/docs/playing-a-song/searchsong.png)

:::info note
Make sure that your song is not over **3 hours long** or Rythm will refuse to play it. To play songs longer than 3 hours, you need to [**activate Premium**](/premium) for your server.
:::
