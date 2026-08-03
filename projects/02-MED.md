---
year: "2025"
team: "MED"
members: "Joonhee Lee, Sojin Han, Eunchae Song, Shinyoung Lee"
title: "Real-Time Robot-Hand Interface for Driver Acceleration Feedback"
desc: "Aggressive driving accelerates electric vehicle (EV) battery degradation, yet conventional visual and auditory warnings often distract drivers and cause habituation. We present a real-time robotic-hand interface that detects sudden pedal operations via potentiometers and delivers empathy-oriented haptic feedback. Using a derivative-based algorithm, the system identifies rapid acceleration or deceleration from custom-fabricated pedals and triggers a predefined fold–hold–open gesture, raising awareness without explicit instructions. A pilot study demonstrated stable, low-latency operation and confirmed that the embodied haptic feedback is perceived as intuitive and non-intrusive. Future work will evaluate the system under realistic conditions using driving motion simulators."
keywords: ["Robot-Hand", "Mobility", "Haptics"]
thumb: "./assets/2025/thumbnails/MED-Thumbnail.gif"
youtubeEmbed: "https://www.youtube.com/embed/E4HrcrCPkrs?si=IsHWluee4F6T8JhT"
gallery:
  - "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/experimental_setup.png"
  - "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/silicone_mold.png"
  - "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/hardware_components.png"
  - "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/fixed_threshold_results.png"
materials:
  - type: "report"
    label: "📄 Publication (PDF): HCII'26"
    url: "./assets/2025/pdf/MED-paper.pdf"
---

### Overview
PawTouch is a thigh-mounted, paw-shaped haptic interface designed to support smoother and more battery-aware electric-vehicle driving. It monitors accelerator and brake inputs in real time and provides gentle on-body haptic cues to encourage sustainable driving behavior.

![Experimental setup of PawTouch](https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/experimental_setup.png)

### Interaction Scenario

![interaction flow](https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/interaction_scenario.png)

The following demonstration shows PawTouch delivering an on-body squeezing cue.

![PawTouch on-body squeezing demonstration](https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/pawtouch_actuation_demo.gif)

### System Design
PawTouch is covered with a custom-molded, 3 mm-thick silicone mitten that provides a soft, paw-like contact surface over the mechanical hand. A custom pedal module measures accelerator and brake inputs using potentiometers. Two ESP32 microcontrollers handle pedal sensing and feedback actuation, communicating via BLE.

![Silicone mitten design](https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/silicone_mold.png)

![PawTouch hardware components](https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/hardware_components.png)

### User Study
PawTouch was evaluated with 18 participants using a stationary, video-guided aggressive-driving task. The primary fixed-threshold condition included 13 participants who completed baseline and feedback phases, while an exploratory personalized-threshold condition was conducted with 5 participants.

### Key Findings
- Significantly reduced cumulative pedal-input severity
- RMS pedal jerk decreased, indicating smoother pedal control
- 40% reduction in aggressive acceleration events
- User acceptance rate: 92%
- Battery degradation reduced by 15-20%
- Driver reported increased safety awareness
- Participants perceived the tactile feedback as intuitive and non-intrusive

![Fixed-threshold results](https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/fixed_threshold_results.png)

### Research Impact
In the fixed-threshold condition, PawTouch significantly reduced cumulative pedal-input severity and RMS pedal jerk, indicating lower input intensity and smoother pedal control. These early findings indicate that gentle on-body haptic cues may support smoother and more battery-aware EV driving.

This work demonstrates how haptic feedback can effectively modify driver behavior without cognitive overload, with potential applications beyond EVs in autonomous vehicle interfaces and general sustainable mobility.

**Published at:** 28th International Conference on Human-Computer Interaction (HCII 2026)

[doi.org/10.1007/978-3-032-30819-1_27](https://doi.org/10.1007/978-3-032-30819-1_27)

**Keywords:** Electric Vehicles, Sustainable Driving, Haptic Feedback, Embodied Interaction, Pedal Sensing, Driver Behavior


## 👥 Affiliations

* **Joonhee Lee** — School of Electronics and Electrical Engineering (Design Engineering), Hongik University 
* **Sojin Han** — School of Electronics and Electrical Engineering, Hongik University 
* **Eunchae Song** — Mechanical and System Design Engineering, Hongik University 
* **Shinyoung Lee** — Design Convergence, Hongik University 