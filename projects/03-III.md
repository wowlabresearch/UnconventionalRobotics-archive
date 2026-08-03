---
year: "2025"
team: "III"
members: "Gyuhyun Jang, Yongmin Park, SoYoon Park"
title: "Hand-driven Embodied Interface for Hybrid Origami Soft Robot"
desc: "Origami-based soft robots exhibit continuous and nonlinear deformation, which makes intuitive and stable control difficult when using conventional rigid input devices. This paper presents a hand-driven embodied interface for a hybrid origami soft robot, allowing users to directly manipulate robot deformation through natural hand motions without prior training. We design a hybrid origami structure combining Kresling and accordion patterns to balance stiffness and flexibility, and implement a wire-driven actuation system using continuous-rotation servomotors. A web-based real-time control system connects a browser interface and embedded hardware via the Web Serial API, enabling direct interaction without a dedicated server."
keywords: ["Origami", "Soft Robot", "Embodied Interface", "Wire-driven"]
thumb: "./assets/2025/thumbnails/III-Thumbnail.gif"
videoUrl: "./assets/2025/video/III-demo.mp4"
---

### Project Overview
Origami-based soft robots exhibit continuous and nonlinear deformation, which makes intuitive and stable control difficult when using conventional rigid input devices. To address this gap, we present a hand-driven embodied interface allowing users to directly manipulate robot deformation through natural hand motions without prior training.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/III-01.png" width="80%">
</div>

### Hardware Design
The robot features a hybrid origami architecture fabricated from Sierra 210 paper, chosen for its balance of elasticity and thickness.

- **Hybrid Structure:** The body integrates the Kresling pattern, which provides torsional stiffness and load-bearing capability, with the accordion pattern, which contributes large axial deformation and compliance.
- **Actuation System:** A wire-driven actuation system was implemented by routing tension cables to eight MG996R continuous-rotation servomotors, generating complex bending and twisting motions.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/III-03.png" width="80%">
<img src="./assets/2025/fig/III-02.png" width="80%">
</div>

### Control System & AI Integration
To enable intuitive interaction, we implemented a lightweight web-based real-time control system.

- **Browser-Based Pipeline:** The user interface operates entirely within a web browser, utilizing p5.js for 3D simulation and ml5.js for vision-based hand tracking.
- **Direct Communication:** The browser connects directly to an ESP32 microcontroller via the Web Serial API, enabling low-latency data exchange without requiring a dedicated server.
- **Control Strategy Evolution:** To balance stability and intuitiveness in an open-loop system, we explored multiple strategies ranging from proportional hand mapping to threshold-based binary control.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/III-method1.gif" width="80%">
<img src="./assets/2025/fig/III-method2.gif" width="80%">
</div>

- **AI-based Inverse Kinematics:** We ultimately explored a multilayer perceptron (MLP) neural network approach that predicts the required actuator commands based on user-specified 3D target positions.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/III-method3.gif" width="80%">
<img src="./assets/2025/fig/III-method4.gif" width="80%">
<img src="./assets/2025/fig/III-demo2.gif" width="60%">
</div>

### Research Results
The proposed embodied interface effectively bridges human hand motion and the continuous deformation of origami soft robots. By framing soft robot control as an interaction problem, this work demonstrates a practical approach for intuitive manipulation while highlighting the fundamental trade-offs between intuitiveness and stability under open-loop actuation.


## 👥 Affiliations

* **Gyuhyun Jang** — Mechanical and System Design Engineering, Hongik University 
* **Yongmin Park** — Computer Engineering, Hongik University 
* **SoYoon Park** — Mechanical and System Design Engineering, Hongik University 
