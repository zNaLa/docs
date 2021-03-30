---
id: adding_rythm
title: Adding Rythm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button } from '../Buttons/button';

Ready to start listening with Rythm? We currently offer 2 bots for free and 3 bots for premium users!

## Rythm releases
---
These are all official releases of Rythm Bot:

<Tabs
  defaultValue="r1"
  values={[
    {label: 'Rythm', value: 'r1'},
    {label: 'Rythm 2', value: 'r2'},
    {label: 'Rythm 3', value: 'r3'},
    {label: 'Rythm 4', value: 'r4'},
    {label: 'Rythm 5', value: 'r5'},
  ]}>
  <TabItem value="r1">
    <img src="/docs/img/docs/adding/rythm.png" alt="rythm"/><br/>
    <h2>Rythm (<code>Rythm#3722</code>)</h2>
    <ul>
      <li>Prefix: <code>!</code></li>
      <li>Rythm is our main bot used by the most servers. This bot and most of its features are available to the public <b>for free</b>.</li>
    </ul>
    <Button onClick = {() => window.open('http://rythm.fm/invite','_blank')}>Invite Rythm</Button>
  </TabItem>
  <TabItem value="r2">
    <img src="/docs/img/docs/adding/rythm-2.png" alt="rythm 2"/><br/>
    <h2>Rythm 2 (<code>Rythm 2#2000</code>)</h2>
    <ul>
      <li>Prefix: <code>&gt;</code></li>
      <li>Rythm 2 is the secondary Rythm bot, used by the second most number of servers. It is identical in functionality to Rythm 1, the only difference being the prefix. This bot and most of its features are available to the public <b>for free</b>.</li>
    </ul>
    <Button onClick = {() => window.open('http://rythm.fm/invite2','_blank')}>Invite Rythm 2</Button>
  </TabItem>
  <TabItem value="r3">
    <img src="/docs/img/docs/adding/rythm-3.png" alt="rythm 3"/><br/>
    <h2>Rythm 3 (<code>Rythm 3#0817</code> - <a href="https://rythm.fm/premium"><b>Premium only</b></a>)</h2>
    <ul>
      <li>Prefix: <code>&</code></li>
      <li>Rythm 3 is the third Rythm bot. While you can still invite Rythm 3, you need to <a href="https://rythm.fm/premium">activate Premium</a> for your server to use it.</li>
    </ul>
    <Button onClick = {() => window.open('http://rythm.fm/invite3','_blank')}>Invite Rythm 3</Button>
  </TabItem>
  <TabItem value="r4">
    <img src="/docs/img/docs/adding/rythm-4.png" alt="rythm 4"/><br/>
    <h2>Rythm 4 (<code>Rythm 4#0952</code> - <a href="https://rythm.fm/premium"><b>Premium only</b></a>)</h2>
    <ul>
      <li>Prefix: <code>%</code></li>
      <li>Rythm 4 is the fourth Rythm bot. While you can still invite Rythm 4, you need to <a href="https://rythm.fm/premium">activate Premium</a> for your server to use it.</li>
    </ul>
    <Button onClick = {() => window.open('http://rythm.fm/invite4','_blank')}>Invite Rythm 4</Button>
  </TabItem>
  <TabItem value="r5">
    <img src="/docs/img/docs/adding/rythm-5.png" alt="rythm 5"/><br/>
    <h2>Rythm 5 (<code>Rythm 5#6171</code> - <a href="https://rythm.fm/premium"><b>Premium only</b></a>)</h2>
    <ul>
      <li>Prefix: <code>-</code></li>
      <li>Rythm 5 is the fifth Rythm bot. While you can still invite Rythm 5, you need to <a href="https://rythm.fm/premium">activate Premium</a> for your server to use it</li>
    </ul>
    <Button onClick = {() => window.open('http://rythm.fm/invite5','_blank')}>Invite Rythm 5</Button>
  </TabItem>
</Tabs>


## The Authorization process
---
### Step one

Once you've chosen the release of Rythm that you would like to invite. and you are logged into the correct Discord account, you should now see a menu like this:

![Discord Authorization Screen](/img/docs/adding/discord-oauth2-1.png)

Tap or click the `Select a server` button. A pop-up should appear that will let you select where you'd like to add Rythm. In this case, we'll add the bot to `Music Lovers ❤`.

![Choose the server that you'd like and continue](/img/docs/adding/discord-oauth2-2.gif)

:::note Note
If you don't see your server in this drop-down, [click here!](/invite_troubleshooting#when-adding-rythm-i-cant-see-my-server-in-the-list)
:::

### Step two

Once you've selected the server that you'd like to add Rythm to, you can press the **Continue** button on the bottom right of the menu.

You should now see something similar to this:

![Press authorize and you'll be good to go!](/img/docs/adding/discord-oauth2-3.png)

### Final Step

Once you press the **Authorize** button and complete the Captcha, you should be redirected [here](https://rythm.fm/app). In addition, you'll also see a message like the one below in your Discord server. **Amazing!**

![A message sent by Rythm upon joining a Discord server](/img/docs/adding/thank-you-message.png)

Now let's get the party started by [playing some songs](/play_song)!

For any issues with inviting Rythm, check out the [Invite Troubleshooting](/invite_troubleshooting) section.
