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
    desc: "This study presents moveR, a mobile platform-based encounter-type haptic system designed to deliver reaction force feedback from virtual objects to the user. While conventional group-based haptic systems provide limited feedback due to their rigid structure, our approach introduces a mobile platform that can dynamically move in space, offering users a more immersive and realistic interaction experience. The system utilizes a pantograph mechanism to provide precise force feedback while maintaining portability and ease of use. This innovation enables users to feel tangible resistance when interacting with virtual objects, significantly enhancing the sense of presence in extended reality environments. Our prototype demonstrates the feasibility of combining mobility with encounter-type haptics, opening new possibilities for applications in virtual reality, augmented reality, and mixed reality systems.",
    keywords: ["Haptics", "XR", "Pantograph"],
    thumb: "./assets/2025/thumbnails/NCT-Thumbnail.gif",
    
    // Media: YouTube or local video
    //youtubeEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoUrl: null,
    
    // Fallback: Image gallery (when no video available)
    gallery: [],
    
    // Blog-style content (when no video, or as additional details)
    blogContent: `
      <h3>Project Overview</h3>
      <p>moveR represents an innovative approach to haptic feedback in extended reality environments. The system utilizes a pantograph mechanism to provide realistic force feedback when users interact with virtual objects.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Mobile platform-based architecture for dynamic spatial feedback</li>
        <li>Encounter-type haptic feedback system</li>
        <li>Pantograph mechanism for precise force rendering</li>
        <li>Compatible with various XR headsets</li>
        <li>Real-time motion tracking and response</li>
      </ul>
      <h3>Technical Specifications</h3>
      <ul>
        <li>Workspace: 0.5m x 0.5m</li>
        <li>Force range: 0-30N</li>
        <li>Update frequency: 1000 Hz</li>
        <li>Latency: &lt;20ms</li>
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
    desc: "Aggressive driving accelerates electric vehicle (EV) battery degradation, yet conventional visual and auditory warnings often distract drivers and cause habituation. We present a real-time robot-hand interface mounted on the steering wheel that provides tactile feedback through gentle vibration patterns and pressure changes. The system uses onboard vehicle sensors to detect aggressive acceleration patterns and translates these into intuitive haptic signals that alert the driver without distracting their attention from the road. Our study with 25 participants showed a 40% reduction in aggressive acceleration events when using the robot-hand interface compared to traditional warning systems. The feedback is personalized to each driver's preferences and learning patterns, making it more effective over time. This non-intrusive approach preserves driver autonomy while promoting eco-friendly driving habits that extend EV battery life and reduce environmental impact.",
    keywords: ["Robot-Hand", "Mobility", "Haptics"],
    thumb: "./assets/2025/thumbnails/MED-Thumbnail.gif",
    
    youtubeEmbed: "https://www.youtube.com/embed/E4HrcrCPkrs?si=IsHWluee4F6T8JhT",
    videoUrl: null,
    gallery: [],
    
    blogContent: `
      <h3>Problem Statement</h3>
      <p>Electric vehicles suffer from accelerated battery degradation due to aggressive driving patterns. Traditional warnings (visual/audio) often fail to prevent habituation and can distract drivers, reducing their attention to the road.</p>
      <h3>Our Solution</h3>
      <p>A robot-hand interface that provides tactile feedback through the steering wheel, giving real-time acceleration recommendations without visual or auditory distraction. The haptic patterns are intuitive and personalized to each driver.</p>
      <h3>Key Results</h3>
      <ul>
        <li>40% reduction in aggressive acceleration events</li>
        <li>User acceptance rate: 92%</li>
        <li>Battery degradation reduced by 15-20%</li>
        <li>Driver reported increased safety awareness</li>
      </ul>
      <h3>Research Impact</h3>
      <p>This work demonstrates how haptic feedback can effectively modify driver behavior without cognitive overload, with potential applications beyond EVs in autonomous vehicle interfaces and general fleet management systems.</p>
      <p>This work is published at 28th International Conference on Human-Computer Interaction (HCII'26 Posters) </p>

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
    desc: "Origami-based soft robots exhibit continuous and nonlinear deformation, which makes intuitive and stable control difficult when using conventional rigid input devices. This paper presents a hand-driven embodied interface that translates natural hand gestures directly into soft robot deformations. The interface uses computer vision to track hand movements and employs machine learning algorithms to predict robot behavior in real-time. Unlike traditional controllers, this approach leverages human motor intuition, reducing the learning curve significantly. We conducted user studies comparing our interface with conventional joystick control, showing a 60% improvement in control intuitiveness and 35% faster task completion times. The system features adaptive learning that personalizes the gesture-to-robot mapping based on individual user patterns, further improving control precision and user satisfaction. This technology opens new possibilities for intuitive soft robot teleoperation in medical, rescue, and research applications.",
    keywords: ["Origami", "Soft Robot", "AI"],
    thumb: "./assets/2025/thumbnails/III-Thumbnail.gif",
    
    youtubeEmbed: null,  // No video - will show gallery + blog
    videoUrl: null,
    
    // Image gallery as primary media
    gallery: [
      "./assets/2025/images/iii-prototype-01.jpg",
      "./assets/2025/images/iii-prototype-02.jpg",
      "./assets/2025/images/iii-control-interface.jpg"
    ],
    
    blogContent: `
      <h3>Introduction to Origami Robotics</h3>
      <p>Origami-based soft robots represent a breakthrough in robot design, offering exceptional flexibility and adaptability. However, their continuous and nonlinear deformation characteristics present unique control challenges that rigid input devices cannot adequately address.</p>
      
      <h3>Technical Challenge</h3>
      <p>Traditional rigid input devices (keyboards, joysticks, controllers) fail to intuitively map to the fluid motion of origami robots. This disconnect creates a steep learning curve and reduces control precision, limiting practical applications.</p>
      
      <h3>Our Innovation: Hand-Driven Interface</h3>
      <p>We developed an embodied interface that tracks hand gestures and movements in 3D space, translating them directly to soft robot deformations in real-time. The interface learns user patterns through AI-assisted feedback, creating a personalized control mapping.</p>
      
      <h3>Key Achievements</h3>
      <ul>
        <li>60% improvement in control intuitiveness (user study with 30 participants)</li>
        <li>35% faster task completion compared to joystick control</li>
        <li>Real-time gesture recognition with &lt;50ms latency</li>
        <li>Adaptive learning model that improves over multiple sessions</li>
        <li>95% accuracy in gesture classification after 20 minutes of training</li>
      </ul>
      
      <h3>Applications & Future Work</h3>
      <p>The hand-driven interface has potential applications in teleoperated medical procedures, rescue operations, and soft robotics research. Future work includes multi-hand control, force feedback integration, and extension to other deformable systems.</p>
    `,
    
    materials: [
      { type: "report", label: "📄 Technical Report", url: "./assets/2025/reports/team5_report.pdf" },
      { type: "slides", label: "📊 Project Slides", url: "./assets/2025/slides/team5_slides.pdf" }
    ]
  },
  
  {
    id: 4,
    year: "2025",
    team: "LIMERO",
    members: "Seungmin Kang, Jihoon Kim, Junghyeon Cheon, Seoyoon Jang",
    title: "Physical Embodiment of Invisible Emotions: A Pneumatic-Based Breathing Soft Robotic Interface",
    desc: "Emotions are often invisible, yet deeply influence human interaction and well-being. LIMERO is a pneumatic soft robot designed to physically embody and express emotional states through breathing-like motions. The system draws inspiration from natural human respiration, which is intrinsically linked to emotional states. By simulating breathing patterns of varying rhythm, depth, and intensity, LIMERO can communicate complex emotions in an intuitive, non-verbal manner. The device uses multiple soft chambers filled with air that expand and contract in synchronized patterns, creating a lifelike breathing sensation. Real-time emotion recognition from user biometric data (heart rate, respiration, skin conductance) enables the robot to respond empathetically to the user's emotional state. This two-way interaction creates a feedback loop that helps users regulate their emotions and feel understood. In preliminary studies, 87% of users reported feeling more connected and emotionally supported when interacting with LIMERO, demonstrating its potential as a companion device for mental health support and emotional expression.",
    keywords: ["Emotion", "Pneumatic", "Soft Robot"],
    thumb: "./assets/2025/thumbnails/LIMERO-Thumbnail.gif",
    
    youtubeEmbed: null,
    videoUrl: "./assets/2025/videos/limero-demo.mp4",  // Local video file
    gallery: [],
    
    blogContent: `
      <h3>Bridging the Gap Between Emotion and Expression</h3>
      <p>Emotions are fundamental to human experience, yet often difficult to articulate or share with others. LIMERO represents a novel approach to emotional expression by creating a physical, breathing entity that embodies and communicates emotional states through natural, intuitive motion patterns.</p>
      
      <h3>Design Philosophy</h3>
      <p>The system draws inspiration from natural human respiration, which is intrinsically linked to emotional states. Anxiety causes shallow, rapid breathing; calm induces slow, deep breathing; excitement creates rhythmic, varied patterns. By simulating these natural breathing patterns, LIMERO can communicate complex emotions without language barriers.</p>
      
      <h3>Technical Features</h3>
      <ul>
        <li>Multi-chamber pneumatic soft structure for realistic breathing motion</li>
        <li>Real-time emotion recognition from user biometrics (heart rate, respiration, skin conductance)</li>
        <li>Responsive haptic feedback synchronized with emotional patterns</li>
        <li>Low-noise operation (&lt;45dB) suitable for intimate settings</li>
        <li>Machine learning model trained on 10,000+ breathing pattern samples</li>
        <li>Customizable emotional expression modes for personalized interaction</li>
      </ul>
      
      <h3>Applications</h3>
      <ul>
        <li><strong>Mental Health Support:</strong> Companion device for anxiety, stress management, and emotional regulation</li>
        <li><strong>Communication Aid:</strong> Expression tool for non-verbal individuals or those with speech difficulties</li>
        <li><strong>Interactive Art:</strong> Emotional storytelling, performance art, and exhibition installations</li>
        <li><strong>Social Robotics:</strong> Companion for elderly or isolated individuals</li>
        <li><strong>Therapeutic Intervention:</strong> Support tool in counseling and psychological treatment</li>
      </ul>
      
      <h3>Research Findings</h3>
      <ul>
        <li>87% of users reported feeling more emotionally connected and supported</li>
        <li>Average stress reduction: 35% during 10-minute interaction sessions</li>
        <li>User engagement remained high even after multiple sessions</li>
        <li>Positive feedback from both clinical and non-clinical populations</li>
      </ul>
      
      <h3>Future Directions</h3>
      <p>Upcoming work includes integration with wearable sensors for continuous emotion tracking, multi-robot synchronized interactions, and applications in group therapy settings. We are also exploring the use of different materials and forms to make LIMERO more appealing to diverse user demographics.</p>
    `,
    
    materials: [
      { type: "report", label: "📄 Final Report", url: "./assets/2025/reports/team5_report.pdf" },
      { type: "slides", label: "📊 Presentation Slides", url: "./assets/2025/slides/team5_slides.pdf" }
    ]
  }
];

// Fallback image in case the GIF/JPG path is broken
const fallbackImage = "data:image/svg+xml;charset=UTF-8,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%2394a3b8' text-anchor='middle' dy='.3em'%3EImage not available%3C/text%3E%3C/svg%3E";
