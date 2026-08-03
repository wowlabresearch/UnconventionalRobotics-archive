---
year: "2025"
team: "NCT"
members: "Jiyoon Lee, Seungwon Hu, Han-cheol Lee"
title: "moveR: A Mobile Platform-based Encounter-type Haptic System using a Pantograph Mechanism"
desc: "This study proposes a mobile platform-based Encounter-type haptic system, named 'moveR', designed to provide reaction force feedback from virtual objects to the user. While conventional fixed haptic devices suffer from limited workspace, moveR overcomes this limitation by combining a four-wheeled mobile platform with a pantograph-based haptic mechanism. The system tracks the user's hand position in real time using hand-tracking data from a head-mounted display (HMD) and proactively moves the mobile platform toward predicted contact points."
keywords: ["Haptic Feedback", "Virtual Reality", "Mobile Robot", "Pantograph"]
thumb: "./assets/2025/thumbnails/NCT-Thumbnail.gif"
---

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/thumbnails/NCT-Thumbnail.gif" width="80%">
</div>

### Project Overview
Haptic feedback has long been regarded as a crucial element for immersive interaction in virtual reality (VR) environments. The proposed moveR system addresses the limitations of existing haptic systems, such as restricted workspace and device weight, by mounting a pantograph mechanism on a mobile platform. This Encounter-type haptic design completely eliminates the physical burden on the user by providing contact only when needed.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/NCT-01.png" width="80%">
<img src="./assets/2025/fig/NCT-02.png" width="80%">
</div>

### Hardware Implementation

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/NCT-05.png" width="80%">
</div>

- **Mobile Platform:** The platform is designed based on a mecanum-wheel structure that enables omnidirectional movement. It utilizes four DC motors controlled by an ESP32 microcontroller, while a VR controller mounted on the platform tracks its position.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/NCT-handTrack.gif" width="80%">
</div>

- **Pantograph Device:** The system is based on a two-degree-of-freedom planar linkage mechanism driven by two Dynamixel XM430 motors.
- **Contact Sensor:** The surface of the end-effector is wrapped with a copper plate connected to an ESP32 via Bluetooth to detect physical contact.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/NCT-panto.gif" width="80%">
</div>

### Software & Control Algorithms

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/NCT-03.png" width="80%">
<img src="./assets/2025/fig/NCT-04.png" width="80%">
</div>

- **Contact Surface Prediction:** The system defines a virtual sphere around a target point located on the user's palm to identify interactable objects and computes the minimum distance to select the contact candidate.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/NCT-prediction.gif" width="80%">
</div>

- **State-Based Motion Strategy:** When the end-effector is in a non-contact state, the platform tracks the user's hand; once contact is detected, the automatic following motion is suspended to prevent interaction instability.
- **Haptic Rendering:** Inspired by the Finger Proxy algorithm, the system calculates a resistive force using a linear spring model, F=kx, where k denotes the stiffness parameter reflecting the material properties of the virtual object and x denotes the penetration depth.


## 👥 Affiliations

* **Jiyoon Lee** — Visual Communication Design & Computer Engineering, Hongik University 
* **Seungwon Hu** — Computer Engineering, Hongik University 
* **Han-cheol Lee** — Mechanical and System Design Engineering, Hongik University 