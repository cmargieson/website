---
tags: [computer]
---

# Setting up Plex Home Media Server with Docker.

![Setting up Plex Home Media Server with Docker](./goal_light.svg#light)![Setting up Plex Home Media Server with Docker](./goal_dark.svg#dark)

The final product:

- **Plex Media Server** is a a central hub for all your media files (movies, TV shows, music etc).

- **Lidarr, Radarr and Sonarr** monitor usnet to download new movie, TV show or music releases.

- **VPN** provides a secure and encrypted connection to usenet.

- **Prowlarr** manages the usenet indexer.

- **Sabnzdb** manages the usenet downloads.

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

## Plex Media Server

```yaml title="/plex/docker-compose.yml"
plex:
  image: lscr.io/linuxserver/plex:latest
  container_name: plex
  network_mode: host
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Australia/Melbourne
    - VERSION=docker
  volumes:
    - /home/optimum/plex/appdata/plex:/config
    - /home/optimum/plex:/media
  restart: unless-stopped
```

## Lidarr, Radarr and Sonarr

```yaml title="/plex/docker-compose.yml"
lidarr:
  image: lscr.io/linuxserver/lidarr:latest
  container_name: lidarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Australia/Melbourne
  volumes:
    - /home/optimum/plex/appdata/lidarr:/config
    - /home/optimum/plex:/media
  restart: unless-stopped
```

```yaml title="/plex/docker-compose.yml"
radarr:
  image: lscr.io/linuxserver/radarr:latest
  container_name: radarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Australia/Melbourne
  volumes:
    - /home/optimum/plex/appdata/radarr:/config
    - /home/optimum/plex:/media
  restart: unless-stopped
```

```yaml title="/plex/docker-compose.yml"
sonarr:
  image: lscr.io/linuxserver/sonarr:latest
  container_name: sonarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Australia/Melbourne
  volumes:
    - /home/optimum/plex/appdata/sonarr:/config
    - /home/optimum/plex:/media
  restart: unless-stopped
```

## VPN

```yaml title="/plex/docker-compose.yml"
gluetun:
  image: qmcgaw/gluetun
  container_name: gluetun
  hostname: gluetun
  networks:
    - server_network
  cap_add:
    - NET_ADMIN
  environment:
    - VPN_SERVICE_PROVIDER=
    - SERVER_COUNTRIES=
    - OPENVPN_USER=
    - OPENVPN_PASSWORD=
  ports:
    - 8686:8686 # lidarr
    - 7878:7878 # radarr
    - 8989:8989 # sonarr
  restart: unless-stopped
```

## Prowlarr

```yaml title="/plex/docker-compose.yml"
prowlarr:
  image: lscr.io/linuxserver/prowlarr:latest
  container_name: prowlarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Australia/Melbourne
  volumes:
    - /home/optimum/plex/appdata/prowlarr:/config
  network_mode: "service:gluetun"
  restart: unless-stopped
```

## Sabnzdb

```yaml title="/plex/docker-compose.yml"
sabnzbd:
  image: lscr.io/linuxserver/sabnzbd:latest
  container_name: sabnzbd
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Australia/Melbourne
  volumes:
    - /home/optimum/plex/appdata/sabnzbd:/config
    - /home/optimum/plex:/media
  network_mode: "service:gluetun"
  restart: unless-stopped
```
