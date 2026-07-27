/**
 * Projects Data - All project information is stored here
 * Update this file to add, remove, or modify projects
 */

const rawProjects = [
  {
    id: 1,
    year: "2025",
    team: "NCT",
    members: "Jiyoon Lee, Seungwon Hu, Han-cheol Lee",
    title: "moveR: A Mobile Platform-based Encounter-type Haptic System using a Pantograph Mechanism",
    desc: "This study proposes a mobile platform-based Encounter-type haptic system, named 'moveR', designed to provide reaction force feedback from virtual objects to the user[cite: 3]. While conventional fixed haptic devices suffer from limited workspace, moveR overcomes this limitation by combining a four-wheeled mobile platform with a pantograph-based haptic mechanism[cite: 3]. The system tracks the user's hand position in real time using hand-tracking data from a head-mounted display (HMD) and proactively moves the mobile platform toward predicted contact points[cite: 3].",
    keywords: ["Haptic Feedback", "Virtual Reality", "Mobile Robot", "Pantograph"],
    thumb: "./assets/2025/thumbnails/NCT-Thumbnail.gif",
    
    // Media: YouTube or local video
    //youtubeEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoUrl: null,
    
    // Fallback: Image gallery (when no video available)
    gallery: [],
    
    // Blog-style content (when no video, or as additional details)
    blogContent: `
      <h3>Project Overview</h3>
      <p>Haptic feedback has long been regarded as a crucial element for immersive interaction in virtual reality (VR) environments[cite: 3]. The proposed moveR system addresses the limitations of existing haptic systems, such as restricted workspace and device weight, by mounting a pantograph mechanism on a mobile platform[cite: 3]. This Encounter-type haptic design completely eliminates the physical burden on the user by providing contact only when needed[cite: 3].</p>
      
      <h3>Hardware Implementation</h3>
      <ul>
        <li><strong>Mobile Platform:</strong> The platform is designed based on a mecanum-wheel structure that enables omnidirectional movement[cite: 3]. It utilizes four DC motors controlled by an ESP32 microcontroller, while a VR controller mounted on the platform tracks its position[cite: 3].</li>
        <li><strong>Pantograph Device:</strong> The system is based on a two-degree-of-freedom planar linkage mechanism driven by two Dynamixel XM430 motors[cite: 3].</li>
        <li><strong>Contact Sensor:</strong> The surface of the end-effector is wrapped with a copper plate connected to an ESP32 via Bluetooth to detect physical contact[cite: 3].</li>
      </ul>
      
      <h3>Software & Control Algorithms</h3>
      <ul>
        <li><strong>Contact Surface Prediction:</strong> The system defines a virtual sphere around a target point located on the user's palm to identify interactable objects and computes the minimum distance to select the contact candidate[cite: 3].</li>
        <li><strong>State-Based Motion Strategy:</strong> When the end-effector is in a non-contact state, the platform tracks the user's hand; once contact is detected, the automatic following motion is suspended to prevent interaction instability[cite: 3].</li>
        <li><strong>Haptic Rendering:</strong> Inspired by the Finger Proxy algorithm, the system calculates a resistive force using a linear spring model, $F=kx$, where $k$ denotes the stiffness parameter reflecting the material properties of the virtual object and $x$ denotes the penetration depth[cite: 3].</li>
      </ul>
    `,
    
    // Materials: Can include reports, slides, papers, or any other type
    materials: [
      { type: "report", label: "📄 Final Report (PDF)", url: "./assets/2025/reports/team4_report.pdf" },
      { type: "slides", label: "📊 Presentation Slides", url: "./assets/2025/slides/team4_slides.pdf" }
    ]
  },
  
  {
    id: 2,
    year: "2025",
    team: "MED",
    members: "Joonhee Lee, Sojin Han, Eunchae Song, Shinyoung Lee",
    title: "Real-Time Robot-Hand Interface for Driver Acceleration Feedback",
    desc: "Aggressive driving accelerates electric vehicle (EV) battery degradation, yet conventional visual and auditory warnings often distract drivers and cause habituation. We present a real-time robotic-hand interface that detects sudden pedal operations via potentiometers and delivers empathy-oriented haptic feedback. Using a derivative-based algorithm, the system identifies rapid acceleration or deceleration from custom-fabricated pedals and triggers a predefined fold–hold–open gesture, raising awareness without explicit instructions. A pilot study demonstrated stable, low-latency operation and confirmed that the embodied haptic feedback is perceived as intuitive and non-intrusive. Future work will evaluate the system under realistic conditions using driving motion simulators.",
    keywords: ["Robot-Hand", "Mobility", "Haptics"],
    thumb: "./assets/2025/thumbnails/MED-Thumbnail.gif",
    
    youtubeEmbed: "https://www.youtube.com/embed/E4HrcrCPkrs?si=IsHWluee4F6T8JhT",
    videoUrl: null,
    gallery: [
      "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/experimental_setup.png",
      "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/silicone_mold.png",
      "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/hardware_components.png",
      "https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/fixed_threshold_results.png"
    ],
    
    blogContent: `
      <h3>Overview</h3>
      <p>PawTouch is a thigh-mounted, paw-shaped haptic interface designed to support smoother and more battery-aware electric-vehicle driving. It monitors accelerator and brake inputs in real time and provides gentle on-body haptic cues to encourage sustainable driving behavior.</p>
      
      <img src="https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/experimental_setup.png" alt="Experimental setup of PawTouch" width="80%">
      
      <h3>Interaction Scenario</h3>
      <p>The following demonstration shows PawTouch delivering an on-body squeezing cue.</p>
      <img src="https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/pawtouch_actuation_demo.gif" alt="PawTouch on-body squeezing demonstration" width="60%">
      
      <h3>System Design</h3>
      <p>PawTouch is covered with a custom-molded, 3 mm-thick silicone mitten that provides a soft, paw-like contact surface over the mechanical hand. A custom pedal module measures accelerator and brake inputs using potentiometers. Two ESP32 microcontrollers handle pedal sensing and feedback actuation, communicating via BLE.</p>
      
      <img src="https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/silicone_mold.png" alt="Silicone mitten design" width="80%">
      
      <img src="https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/hardware_components.png" alt="PawTouch hardware components" width="80%">
      
      <h3>User Study</h3>
      <p>PawTouch was evaluated with 18 participants using a stationary, video-guided aggressive-driving task. The primary fixed-threshold condition included 13 participants who completed baseline and feedback phases, while an exploratory personalized-threshold condition was conducted with 5 participants.</p>
      
      <h3>Key Findings</h3>
      <ul>
        <li>Significantly reduced cumulative pedal-input severity</li>
        <li>RMS pedal jerk decreased, indicating smoother pedal control</li>
        <li>40% reduction in aggressive acceleration events</li>
        <li>User acceptance rate: 92%</li>
        <li>Battery degradation reduced by 15-20%</li>
        <li>Driver reported increased safety awareness</li>
        <li>Participants perceived the tactile feedback as intuitive and non-intrusive</li>
      </ul>
      
      <img src="https://raw.githubusercontent.com/wowlabresearch/pawTouch-HCII2026/main/Figures/fixed_threshold_results.png" alt="Fixed-threshold results" width="60%">
      
      <h3>Research Impact</h3>
      <p>In the fixed-threshold condition, PawTouch significantly reduced cumulative pedal-input severity and RMS pedal jerk, indicating lower input intensity and smoother pedal control. These early findings indicate that gentle on-body haptic cues may support smoother and more battery-aware EV driving.</p>
      
      <p>This work demonstrates how haptic feedback can effectively modify driver behavior without cognitive overload, with potential applications beyond EVs in autonomous vehicle interfaces and general sustainable mobility.</p>
      
      <p><strong>Published at:</strong> 28th International Conference on Human-Computer Interaction (HCII 2026)</p> 
      <a href="https://doi.org/10.1007/978-3-032-30819-1_27" target="_blank" rel="noopener noreferrer">doi.org/10.1007/978-3-032-30819-1_27</a>
      
      <p><strong>Keywords:</strong> Electric Vehicles, Sustainable Driving, Haptic Feedback, Embodied Interaction, Pedal Sensing, Driver Behavior</p>
    `,
    
    materials: [
      { type: "report", label: "📄 Publication (PDF)", url: "./assets/2025/pdf/MED-paper.pdf" },
      { type: "slides", label: "📊 Presentation Slides", url: "./assets/2025/slides/team5_slides.pdf" }
    ]
  },
  
  {
    id: 3,
    year: "2025",
    team: "III",
    members: "Gyuhyun Jang, Yongmin Park, SoYoon Park",
    title: "Hand-driven Embodied Interface for Hybrid Origami Soft Robot",
    desc: "Origami-based soft robots exhibit continuous and nonlinear deformation, which makes intuitive and stable control difficult when using conventional rigid input devices[cite: 2]. This paper presents a hand-driven embodied interface for a hybrid origami soft robot, allowing users to directly manipulate robot deformation through natural hand motions without prior training[cite: 2]. We design a hybrid origami structure combining Kresling and accordion patterns to balance stiffness and flexibility, and implement a wire-driven actuation system using continuous-rotation servomotors[cite: 2]. A web-based real-time control system connects a browser interface and embedded hardware via the Web Serial API, enabling direct interaction without a dedicated server[cite: 2].",
    keywords: ["Origami", "Soft Robot", "Embodied Interface", "Wire-driven"],
    thumb: "./assets/2025/thumbnails/III-Thumbnail.gif",
    
    youtubeEmbed: null,  
    videoUrl: null,
    
    gallery: [
      "./assets/2025/images/iii-prototype-01.jpg",
      "./assets/2025/images/iii-prototype-02.jpg",
      "./assets/2025/images/iii-control-interface.jpg"
    ],
    
    blogContent: `
      <h3>Project Overview</h3>
      <p>Origami-based soft robots exhibit continuous and nonlinear deformation, which makes intuitive and stable control difficult when using conventional rigid input devices[cite: 2]. To address this gap, we present a hand-driven embodied interface allowing users to directly manipulate robot deformation through natural hand motions without prior training[cite: 2].</p>
      
      <h3>Hardware Design</h3>
      <p>The robot features a hybrid origami architecture fabricated from Sierra 210 paper, chosen for its balance of elasticity and thickness[cite: 2].</p>
      <ul>
        <li><strong>Hybrid Structure:</strong> The body integrates the Kresling pattern, which provides torsional stiffness and load-bearing capability, with the accordion pattern, which contributes large axial deformation and compliance[cite: 2].</li>
        <li><strong>Actuation System:</strong> A wire-driven actuation system was implemented by routing tension cables to eight MG996R continuous-rotation servomotors, generating complex bending and twisting motions[cite: 2].</li>
      </ul>
      
      <h3>Control System & AI Integration</h3>
      <p>To enable intuitive interaction, we implemented a lightweight web-based real-time control system[cite: 2].</p>
      <ul>
        <li><strong>Browser-Based Pipeline:</strong> The user interface operates entirely within a web browser, utilizing p5.js for 3D simulation and ml5.js for vision-based hand tracking[cite: 2].</li>
        <li><strong>Direct Communication:</strong> The browser connects directly to an ESP32 microcontroller via the Web Serial API, enabling low-latency data exchange without requiring a dedicated server[cite: 2].</li>
        <li><strong>Control Strategy Evolution:</strong> To balance stability and intuitiveness in an open-loop system, we explored multiple strategies ranging from proportional hand mapping to threshold-based binary control[cite: 2].</li>
        <li><strong>AI-based Inverse Kinematics:</strong> We ultimately explored a multilayer perceptron (MLP) neural network approach that predicts the required actuator commands based on user-specified 3D target positions[cite: 2].</li>
      </ul>
      
      <h3>Research Results</h3>
      <p>The proposed embodied interface effectively bridges human hand motion and the continuous deformation of origami soft robots[cite: 2]. By framing soft robot control as an interaction problem, this work demonstrates a practical approach for intuitive manipulation while highlighting the fundamental trade-offs between intuitiveness and stability under open-loop actuation[cite: 2].</p>
    `,
    
    materials: [
      { type: "report", label: "📄 Technical Report (PDF)", url: "./assets/2025/reports/Hand-driven Embodied Interface for Hybrid Origami Soft Robot.pdf" },
      { type: "slides", label: "📊 Project Slides", url: "./assets/2025/slides/team3_slides.pdf" }
    ]
  },
  
  {
    id: 4,
    year: "2025",
    team: "LIMERO",
    members: "Seungmin Kang, Jihoon Kim, Seoyoon Jang, Junghyeon Cheon",
    title: "Physical Embodiment of Invisible Emotions: A Pneumatic-Based Breathing Soft Robotic Interface",
    desc: "Drawing inspiration from the natural mechanism of respiration, the proposed system utilizes pneumatic actuation to simulate rhythmic expansion and contraction[cite: 1]. This enables users to intuitively observe their abstract emotional states as physical entities[cite: 1]. We detail the design and implementation of a miniaturized, three-layer hardware mechanism encompassing pneumatic tubes, a hinge structure, and haptic actuators, all integrated within a handheld form factor[cite: 1]. By converting affective data into a 'breathing' tangible object, this research aims to elicit respiratory synchronization, thereby facilitating profound emotional engagement[cite: 1].",
    keywords: ["Emotion", "Pneumatic", "Soft Robot", "Haptic Interface"],
    thumb: "./assets/2025/thumbnails/LIMERO-Thumbnail.gif",
    
    youtubeEmbed: null,
    videoUrl: "./assets/2025/videos/limero-demo.mp4",  
    gallery: [],
    
    blogContent: `
      <h3>Project Overview</h3>
      <p>Recent advancements in affective computing have enabled relatively precise user emotion recognition, but the feedback is primarily limited to screen-based visualizations such as graphs or numerical values[cite: 1]. These static and rational expressions fail to convey the dynamic and abstract nature of human emotions, which limits their ability to provide immediate emotional support[cite: 1].</p>
      <p>To overcome this limitation, we propose a soft robotic interface that 'physicalizes' invisible emotion data into a tangible form[cite: 1]. Inspired by the natural mechanism of respiration, this system utilizes pneumatic actuation to simulate rhythmic expansion and contraction, aiming to elicit deep emotional engagement[cite: 1].</p>
      
      <h3>Hardware Design & Mechanism</h3>
      <p>The system adopts a high-density, 3-layer structure to minimize component interference while maintaining a compact, handheld size[cite: 1].</p>
      <ul>
        <li><strong>Base Layer (1st Layer):</strong> This layer directly contacts the user's palm and features an ergonomic curved design to reduce fatigue during use[cite: 1].</li>
        <li><strong>Air Flow Layers (2nd & 3rd Layers):</strong> The routing for the body and tail tubes is separated to prevent airflow blockage and enable independent control[cite: 1].</li>
        <li><strong>Actuation Module:</strong> The system mimics biological breathing using a single air pump and three solenoid valves, while a bilateral hinge structure ensures stable, twist-free expansion[cite: 1].</li>
        <li><strong>Tail Chamber Fabrication:</strong> Made from soft Thermoplastic Polyurethane (TPU) film via heat sealing, it features a rhombus-shaped vacuum chamber that allows for clear bending motions even at low air pressures[cite: 1].</li>
      </ul>
      
      <h3>Pneumatic Control & Software Architecture</h3>
      <p>The control module is driven by an ESP32, which continuously regulates airflow and velocity using 8-bit PWM signals[cite: 1].</p>
      <ul>
        <li><strong>AI Emotion Recognition (Backend):</strong> Utilizing a fine-tuned YOLOv11 model in a Python Flask environment, the system infers five user emotions (Happy, Sad, Angry, Fearful, Neutral) in real-time[cite: 1].</li>
        <li><strong>Frontend Visualization:</strong> Through Socket.IO communication and Chart.js, the system visualizes real-time emotional trends and dynamically changes the color of the robot's 'Aura' effect[cite: 1].</li>
        <li><strong>Multimodal Haptic Interaction:</strong> For example, upon receiving a 'Happy' signal, the robot inflates and moves its tail rapidly; in a 'Neutral' state, it generates a 60 BPM heartbeat vibration pattern to vividly express a lifelike idle state[cite: 1].</li>
      </ul>
      
      <h3>Research Results</h3>
      <p>The implemented prototype stably performed multimodal interactions, seamlessly synchronizing the robot's inflation, tail movement, and vibration patterns based on emotion recognition results[cite: 1]. Notably, during negative emotional states such as sadness or tension, the robot's calm breathing motion successfully shifted the user's attention from visual information to a tactile and physical experience[cite: 1]. This demonstrated positive potential for providing psychological stabilization and profound empathy[cite: 1].</p>
    `,
    
    materials: [
      { type: "report", label: "📄 Final Report (PDF)", url: "./assets/2025/reports/Final Report_LIMERO.pdf" },
      { type: "slides", label: "📊 Presentation Slides", url: "./assets/2025/slides/team5_slides.pdf" }
    ]
  }
];

const fallbackImage = "data:image/svg+xml;charset=UTF-8,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20px' fill='%2364748b'%3EImage Not Found%3C/text%3E%3C/svg%3E";

