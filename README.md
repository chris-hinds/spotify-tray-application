# A Tray/Menubar based Spotify Player

![Spotify Tray Application Screenshot](./assets/spotify_tray_application.png)

## Why?

For some time I have wanted a mini player for spotofy that wa accessibile from the MacOS menubar, sure I have found a few ready made apps, some native, some web based but none to my liking, thus enter **insert cool app name here** my very own Tray/Menubar Spotify Player.

## How?

This application is built using React and Electron, this is my first application using electron and so far the process has gone reasonably well. FYI I am using a fork of Electron [Castlabs Electron Fork](https://github.com/castlabs/electron-releases). the reason for us9ng this fork is that as of right now Electron does not yet support playback of DRM content.

### Why Electron?

I have been wanting to build something with Electron for a while now, I have just never had a decent enough idea of what to build. Plus the fact that I do not yet know anyother framework that enables me to build cross platform native like applications using JS. I am a fullstack JS developer so Electron seemed like the obvious choice.

### Why React?

Simply put... I love React, I am writing React on a daily basis for my fulltime career, I find it easy to work with/develop on. It seems pretty endless in what you can do with it. And It's fast (both in terms of performance and developer experience)

# Installation & Useage

One of the reasons behind choosing Electron is that I can package this application up to deleiver and installable .dmg or .exe. However right now I ma having trouble packaging the app due to the use of fork of Electron.

I have temorarily removed the electron package scrips form the package,json until I can get this sorted.

For now you can clone this repo and run the application locally.

## Installing

1. Clone the repo

```
git clone https://github.com/chinds185a/spotify-tray-application
```

2. Enter the directory and installing th dependanices using YARN or NPM

```
cd spotify-tray-application && yarn install
```

3. Start the application and the dev server

```
yarn electron-dev
```

The tray application will start and will also open the chrome developer tools. If all goes well clcking on the new Spotify tray cion should open a small window with an input field to enter your Spotofy access token.

This view has no styles yet and is only here as a temporary mesaue until I have implimented an authentication server to handle the auth flow. You can get your auth token from [here](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#)

Clicking `go` should instansiate the Spotofy Web Playback SDK passing in your auth token.

Once the SDK is loaded and ready for use Spotfy playback should be transfered to the Spotify tray application and start playing, the tray application is treated as a Spotify Conect player so can be selected from your Spotify app as a playback device.

As of right now only basic playback controls have been implimented. There is very little error handling so expect this to break. Without the auth server your token is only valid for an hour so after an hour the player will fail to authenticate presenting you with the token input screen again for a new token to be entered.
