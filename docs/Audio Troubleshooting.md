---
id: audio_troubleshooting
title: Audio Troubleshooting
---

As you are using Rythm, you may encounter some issues with the audio that is played. This can be due to a few reasons: the Discord voice node you are on could have failed, or it could be an internet connection issue.

Here are some steps that you can follow to troubleshoot and resolve your issues.

---
If you can't hear Rythm or receive distorted sounds from Rythm in your server:

- The most common fix to change the voice regions. See how [here](/voice_region).

- Try reloading your client by pressing both `Ctrl` and `R`, or fully close the app and open again.

---

If you can't hear Rythm or receive distorted sounds in any server (including the [Official Rythm server](https://rythmbot.co/support)), it's probably due to your local audio device settings.

1. In Discord:
  - (If you can't hear Rythm) Make sure Rythm is **not locally muted**, **not server muted** and the User Volume **is not on 0%**. Below are pictures of how your settings **should not** be configured:

    ![locally muted](/img/docs/audio-troubleshooting/locally-muted.png) ![server muted](/img/docs/audio-troubleshooting/server-muted.png) ![volume off](/img/docs/audio-troubleshooting/volume-off.png)

  - Check the `Voice & Video` tab under User Settings (the gear icon ⚙️ at the bottom left) to see if your audio device settings are correct (especially Output Volume & Output Device sections). If the Output Device is set to `Default`, try setting it specifically to your device.

    ![user settings](/img/docs/audio-troubleshooting/user-settings-icon.png) ![Output Devices and Volume](/img/docs/audio-troubleshooting/output-device-and-volume.png)

2. In Windows, right click the speaker icon and click `Sounds` to open the Sound properties window. In that window, click on the `Playback` tab and check to see if your preferred audio device is set as the default device. (If not, click on your audio device and then click `Set Default`)

3. Try following [Discord's Voice & Video Troubleshooting Guide](https://support.discord.com/hc/en-us/articles/360045138471-Discord-Voice-and-Video-Troubleshooting-Guide).

If all of these still don't fix your issue or you are struggling at any part, go to [Get Support](/get_support) section.
