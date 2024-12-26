---
tags: [computer]
---

# Setting up Plex Home Media Server with Docker.

![Setting up Plex Home Media Server with Docker](./goal_light.svg#light)![Setting up Plex Home Media Server with Docker](./goal_dark.svg#dark)

The final product:

- **Plex Media Server** is a a central hub for all your media files (movies, TV shows, music etc).

- **Radarr, Sonarr and Lidarr** monitor usnet to download new movie, TV show or music releases.

- **Prowlarr** manages the usenet indexer.

- **Sabnzdb** manages the usenet downloads.

- **VPN** provides a secure and encrypted connection to usenet.

:::note
Usenet is a decentralized network for file sharing.
:::

<!-- truncate -->

## Install Docker Engine

Learn how to install [Docker Engine.](https://docs.docker.com/engine/)

Remember to carry out the [post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) if installing on Linux.

Verify that you can run docker commands without sudo:

```sh
docker run hello-world
```