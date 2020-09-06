---
id: audio_troubleshooting
title: Audio Troubleshooting
---

As you are using Rythm, you may encounter some issues with the audio that is played. This can be due to a few reasons: the Discord voice node you are on could have failed, or it could be an internet connection issue.

If you are encountering these issues, there are some steps below that you should follow in order to resolve these issues.

--- 

**The most common fix is:**

- Disconnect the bot using the `!disconnect` command.

- Open your server settings.

- Head to the **overview** section.

- Select a different server region (*US East works best with Rythm*).

- Summon the bot again using either the `!summon`, `!join` or `!play` commands.

*Please note that it may take several changes to different server regions to resolve this issue.*

---

If you can't hear Rythm in any servers (including the [official Rythm server](https://rythmbot.co/support)), then it's probably your local audio device settings.

- In Windows, right click the speaker icon and click `Sounds` to open the Sound properties window. In that window, click on the `Playback` tab and check to see if your preferred audio device is set as the default device. (If not, click on your audio device and then click `Set Default`.)

- In Discord, check the `Voice & Video` tab under User Settings (the gear icon ⚙️ at the bottom left) to see if your audio device settings are correct. If they're set to `Default`, try setting them specifically to your device.

- If both steps above are fine, make sure you don't have Rythm server/locally muted or the bots user volume on 0%:

![locally muted](/img/docs/audio-troubleshooting/locally-muted.png)
![volume off](/img/docs/audio-troubleshooting/volume-off.png)
![server muted](/img/docs/audio-troubleshooting/server-muted.png)

If all of these still don't fix your issue, please go to [Miscellaneous Help](/misc_help).
