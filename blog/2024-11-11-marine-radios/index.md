---
tags: [sailing]
---

# Marine Radios

An introduction to marine radio communication, covering different types of marine radios (VHF, HF, EPIRBs) and their operation.

<!-- truncate -->

## Legislation

The Australian Communications and Media Authority (ACMA) regulates Australia's radio communications and telecommunications under the Radio Communications Act 1992 and other legislation.

The Radio Communications Act regulates the use of radio frequencies. Very High Frequency (VHF) equipment is licensed under the General Maritime Ship Station class, requiring no individual applications or fees. Each piece of High Frequency (HF) equipment requires an individual station license issued by ACMA.

You must hold the necessary qualifications to operate VHF or HF marine radio equipment:

- To operate a station with **VHF equipment**, you must have a **Short Range Operator Certificate of Proficiency (SROCP)**

- To operate a station with **HF equipment**, you must have a **Long Range Operator Certificate of Proficiency (LROCP)**

## Radio Waves

A hertz (Hz) is a unit of frequency that measures how often something happens per second. For example, if something vibrates 10 times per second, it has a frequency of 10 hertz.

The electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays.

The electromagnetic spectrum is organized by frequency, radio waves have lowest frequencies in the electromagnetic spectrum. The radio spectrum includes frequencies from 3 Hz to 3,000,000,000,000 Hz (3,000 GHz).

The radio spectrum is allocated by the International Telecommunication Union (ITU) for different radio technologies. Marine radio is allocated to frequencies in the Very High Frequency (VHF) and High Frequency (HF) spectrum.

| Name               | Abbreviation | Frequency       |
| ------------------ | ------------ | --------------- |
| Very High Freqency | VHF          | 30 - 300 MHz    |
| High Frequency     | HF           | 3 - 30 MHz      |
| Medium Frequency   | MF           | 300 - 3,000 kHz |

- **VHF** signals travel as **ground waves** in a straight line and can only reach as far as the line of sight between antennas. VHF has a range of about **3 nm**.
- **HF** signals travel as **sky waves** bouncing off the ionosphere increasing their range to **100 - 400 nm**.

## Radio Equipment

### Transmitter and Receiver

A transmitter generates radio waves by converting electrical signals into electromagnetic radiation. This radiation is then emitted through an antenna. A receiver is a device that captures these radio waves and converts them back into electrical signals. More powerful transmitters can send signals further. Very High Frequency (VHF) radios generally capped at 25 watts.

To reduce background noise, VHF radios feature a squelch control. This automatically mutes the speaker when no radio signal is being received. A comparable function, termed 'mute,' serves the same purpose on High Frequency (HF) radios.

### Antenna

A VHF antenna, typically a short vertical whip or rod, is significantly smaller and simpler in design compared to a larger HF antenna.

An antenna tuning unit (ATU) on an HF radio improves power transfer by matching the impedance of the radio and its antenna. Impedance is the opposition to the flow of energy in the antenna. An antenna's impedance is different at different frequencies.

### Power Supply

**Voltage (V)** is **how strong** the electrical current is. **Ampere-Hours (Ah)** is **how much** electricity the battery can store

- Connecting batteries in **series** increases the **voltage**.
- Connecting batteries in **parallel** increases the **ampere hours**.

Fuses are safety devices that protect electrical circuits from excessive current. If your device draws too much current, the fuse will interrupt the flow of electricity to prevent overheating and fire. You should only replace a fuse with the exact one recommended by the manufacturer.

<details>
<summary>Lead Acid Batteries</summary>

The lead-acid battery was the first rechargeable battery. They have been superseded by sealed batteries that do not require maintenence.

Each cell within a lead-acid battery produces 2 volts. A typical 12-volt car battery contains six cells connected in series.

Lead-acid batteries produce hydrogen gas when being charged, which is highly flammable. Charging batteries need proper ventilation to prevent the accumulation of potentially explosive gases.

Lead-acid batteries use sulfuric acid as their electrolyte. The specific gravity of the electrolyte reflects the battery's charge. A hydrometer is used to measure specific gravity. A fully charged lead-acid battery has a specific gravity of 1.250. You can replace eveporated electrolyte with distilled water - using sea water will cause the battery to self-discharge.

</details>

## Coast Stations

Australia maintains two High Frequency (HF) coast stations: Wiluna in Western Australia for the west coast and Charleville in Queensland for the east coast. Both stations are centrally managed by the Rescue Coordination Centre (RCC) in Canberra, operating under the callsign "RCC Australia".

Services provided include:

- Continuous watch of HF distress signals
- Continuous watch on HF DSC distress signnals
- HF Weather forecasts and warnings

| HF                         | Purpose                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| 4125 kHz 6215 kHz 8291 kHz | Distress and Safety. Choose the lowest frequency and move to higher ones until you find one that works. |
| 8176 kHz                   | Navigation Warnings. Broadcast 3 min prior to the hour (UTC).                                           |

## Limited Coast Stations

States and territories operate Very High Frequency (VHF) limited coast stations, identified by the callsign "Marine Radio" followed by the state's name.

| VHF Channel | Purpose                               |
| ----------- | ------------------------------------- |
| 16          | Distress, Safety and Calling.         |
| 73          | Ship to Shore - Recreational Vessels. |
| 72 & 77     | Ship to Ship - Recreational Vessels.  |

Services provided include:

- Continuous watch of VHF distress signals
- Continuous watch on VHF DSC distress signnals
- Logging on and off

## Radio Calls and Messages

Radio calls are short phrases used to initiate a communication. Radio messages are the content of the message being communicated.

### Routine Calls and Messages

To initiate a radio call:

1. **Determine the correct frequency:** Ensure you are calling the station on a frequency they are actively monitoring. For Very High Frequency (VHF) this will be channel 16 for High Frequency (HF) it will be a distress, urgency or safety channel.

2. **Check for clear frequency:** Before transmitting, listen to ensure the frequency is not in use by others.

3. **Follow the correct format:** Structure your call as follows:

   - **Call the station.** State the name or call sign of the station you are contacting.
   - **Identify yourself.** Provide your own call sign or identification.
   - **State your position.** Indicate your location (e.g. distance and bearing).
   - **Describe your request.** State the nature of your message.
   - **Suggest a working frequency.** Propose a frequency for the actual message exchange.
   - **End with "Over".** This indicates that you expect a response from the station.

Example call:

> "New South Wales Marine Radio, this is sailing boat Illusion inside Sydney Heads with logon details. Suggest channel 73. Over."

You have established communication once the station being called responds. You can now send the content of your message including your identity.

Example message:

> "Illusion, registration alpha bravo charlie one two three november, inside Sydney Heads travelling North to Broken Bay arriving 1500. Three poeple on board. Mobile number: 0412 345 678. Over."

### Distress Calls and Messages

:::warning
Do not transmit false or misleading distress, urgency, or safety messages. This is a serious offense that can result in severe penalties, including imprisonment, under the Radiocommunications Act 1992.
:::

Distress calls may be directed to a specific station or broadcast to all stations. Mayday is the most urgent, followed by Pan-Pan, and then Securite. Mayday has the highest priority and must be given immediate attention, even if other transmissions are in progress.

- **Mayday.** Used when there is an immediate threat to life.
- **Pan-Pan.** Used when there is an urgent situation that does not immediately threaten life or threatens property.
- **Securite.** Used to transmit important navigational or safety information.

Distress calls follow the same format as routine calls, but instead of naming the station, you begin with "Mayday," "Pan-Pan," or "Securite" repeated three times.

Example call:

> "Mayday, Mayday, Mayday. This is sailing boat Illusion, Illusion, Illusion.

No response is expected after making a mayday call, broadcast your message after a brief pause. All other stations must stop transmitting.

Example message:

> Mayday Illision. Three nautical miles East of Barrenjoey. Sinking. Three people on board. EPIRB activated. Over.
