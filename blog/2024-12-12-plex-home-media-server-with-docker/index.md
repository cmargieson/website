---
tags: [computer]
---

# Plex and Docker

![Setting up Plex Home Media Server with Docker](./goal_light.svg#light)![Setting up Plex Home Media Server with Docker](./goal_dark.svg#dark)

The final product:

- **Plex Media Server** is a a central streaming hub for all your media files (movies, TV shows, music etc).

- **VPN** provides a secure and encrypted connection to usenet.

- **Lidarr, Radarr and Sonarr** monitor usnet to download new movie, TV show or music releases.

- **Prowlarr** manages the usenet indexer.

- **Sabnzdb** manages the usenet downloads.

:::note
Usenet is a decentralized network for file sharing.
:::

<!-- truncate -->

## Docker Engine

Learn how to install [Docker Engine.](https://docs.docker.com/engine/)

Remember to carry out the [post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) if installing on Linux.

Verify that you can run docker commands without sudo:

```sh
docker run hello-world
```

### Docker Compose

Docker Compose is a tool that lets you define and run multi-container Docker applications with a single command.

Create a file called `compose.yaml` in your project directory.

You define individual software components as **services.** Services interact with each other through **networks.** **Volumes** allow services to store and share data, effectively mounting external filesystems.

## Plex Media Server

```yaml title="compose.yaml"
services:
  plex:
    # The package that includes everything you need to run Plex.
    image: lscr.io/linuxserver/plex:latest

    # The name of your service
    container_name: plex

    # Set your service's network mode.
    # "host" gives your service direct access to your server's network.
    network_mode: host

    # Define your service's environment variables.
    environment:
      - PUID=1000 # UserID
      - PGID=1000 # GroupID
      - TZ=Etc/UTC # Specify a timezone
      - VERSION=docker # Whether to update plex or not

    # Define host paths accessible to your service. host/path:docker/path
    volumes:
      - /docker/appdata/plex:/config # Plex configuration data
      - /data:/data # Media
```

Add your timezone from the list of [TZ Identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).

Start Plex by running `docker compose up`

Plex can be found at `<your-ip>:32400/web`

## VPN

[Gluetun](https://github.com/qdm12/gluetun) helps you set up a VPN connection within Docker. It supports various VPN providers.

Usenet provider [NEWSHOSTING](https://www.newshosting.com/) includes a VPN.

```yaml title="compose.yaml"
gluetun:
  image: qmcgaw/gluetun

  container_name: gluetun

  hostname: gluetun

  # Add container capabilities.
  cap_add:
    - NET_ADMIN # Allow this container to configure your service's network.

  # Device mappings
  devices:
    - /dev/net/tun # See https://github.com/qdm12/gluetun-wiki/blob/main/errors/tun.md

  environment:
    # See https://github.com/qdm12/gluetun
    - VPN_SERVICE_PROVIDER=
    - OPENVPN_USER=
    - OPENVPN_PASSWORD=

  ports:
    - 8686:8686 # lidarr
    - 7878:7878 # radarr
    - 8989:8989 # sonarr

  restart: unless-stopped
```

Start your VPN by running `docker compose up`

## Lidarr, Radarr and Sonarr

Add the Lidarr, Radarr and Sonarr containers following the same pattern as for Plex.

```yaml title="compose.yaml"
lidarr:
  image: lscr.io/linuxserver/lidarr:latest
  container_name: lidarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Etc/UTC
  volumes:
    - /docker/appdata/lidarr:/config
    - /data:/data
  network_mode: "service:gluetun" # Connect through VPN
  restart: unless-stopped

radarr:
  image: lscr.io/linuxserver/radarr:latest
  container_name: radarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Etc/UTC
  volumes:
    - /docker/appdata/radarr:/config
    - /data:/data
  network_mode: "service:gluetun"
  restart: unless-stopped

sonarr:
  image: lscr.io/linuxserver/sonarr:latest
  container_name: sonarr
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Etc/UTC
  volumes:
    - /docker/appdata/sonarr:/config
    - /data:/data
  network_mode: "service:gluetun"
  restart: unless-stopped
```

Start your Lidarr, Radarr and Sonarr by running `docker compose up`

- Lidarr can be found at `<your-ip>:8686`
- Radarr can be found at `<your-ip>:7878`
- Sonarr can be found at `<your-ip>:8989`
