---
year: "2025"
team: "LIMERO"
members: "Seungmin Kang, Jihoon Kim, Seoyoon Jang, Junghyeon Cheon"
title: "Physical Embodiment of Invisible Emotions: A Pneumatic-Based Breathing Soft Robotic Interface"
desc: "Drawing inspiration from the natural mechanism of respiration, the proposed system utilizes pneumatic actuation to simulate rhythmic expansion and contraction. This enables users to intuitively observe their abstract emotional states as physical entities. We detail the design and implementation of a miniaturized, three-layer hardware mechanism encompassing pneumatic tubes, a hinge structure, and haptic actuators, all integrated within a handheld form factor. By converting affective data into a 'breathing' tangible object, this research aims to elicit respiratory synchronization, thereby facilitating profound emotional engagement."
keywords: ["Emotion", "Pneumatic", "Soft Robot", "Haptic Interface"]
thumb: "./assets/2025/thumbnails/LIMERO-Thumbnail.gif"
---

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/thumbnails/LIMERO-Thumbnail.gif" width="80%">
</div>

### Project Overview
Recent advancements in affective computing have enabled relatively precise user emotion recognition, but the feedback is primarily limited to screen-based visualizations such as graphs or numerical values. These static and rational expressions fail to convey the dynamic and abstract nature of human emotions, which limits their ability to provide immediate emotional support.

To overcome this limitation, we propose a soft robotic interface that 'physicalizes' invisible emotion data into a tangible form. Inspired by the natural mechanism of respiration, this system utilizes pneumatic actuation to simulate rhythmic expansion and contraction, aiming to elicit deep emotional engagement.

### Hardware Design & Mechanism
The system adopts a high-density, 3-layer structure to minimize component interference while maintaining a compact, handheld size.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/LIMERO-hw3.png" width="80%">
<img src="./assets/2025/fig/LIMERO-hw4.png" width="80%">
</div>

- **Base Layer (1st Layer):** This layer directly contacts the user's palm and features an ergonomic curved design to reduce fatigue during use.
- **Air Flow Layers (2nd & 3rd Layers):** The routing for the body and tail tubes is separated to prevent airflow blockage and enable independent control.
- **Actuation Module:** The system mimics biological breathing using a single air pump and three solenoid valves, while a bilateral hinge structure ensures stable, twist-free expansion.
- **Tail Chamber Fabrication:** Made from soft Thermoplastic Polyurethane (TPU) film via heat sealing, it features a rhombus-shaped vacuum chamber that allows for clear bending motions even at low air pressures.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/LIMERO-hw.png" width="80%">
</div>

### Pneumatic Control & Software Architecture
The control module is driven by an ESP32, which continuously regulates airflow and velocity using 8-bit PWM signals.

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/LIMERO-hw2.png" width="80%">
<img src="./assets/2025/fig/LIMERO-system.png" width="80%">
</div>

- **AI Emotion Recognition (Backend):** Utilizing a fine-tuned YOLOv11 model in a Python Flask environment, the system infers five user emotions (Happy, Sad, Angry, Fearful, Neutral) in real-time.
- **Frontend Visualization:** Through Socket.IO communication and Chart.js, the system visualizes real-time emotional trends and dynamically changes the color of the robot's 'Aura' effect.
- **Multimodal Haptic Interaction:** For example, upon receiving a 'Happy' signal, the robot inflates and moves its tail rapidly; in a 'Neutral' state, it generates a 60 BPM heartbeat vibration pattern to vividly express a lifelike idle state.

### Results
The implemented prototype stably performed multimodal interactions, seamlessly synchronizing the robot's inflation, tail movement, and vibration patterns based on emotion recognition results. Notably, during negative emotional states such as sadness or tension, the robot's calm breathing motion successfully shifted the user's attention from visual information to a tactile and physical experience. This demonstrated positive potential for providing psychological stabilization and profound empathy.
