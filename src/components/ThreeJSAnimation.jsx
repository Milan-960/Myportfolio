// import React, { useRef, useEffect, useState } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const ThreeJSAnimation = () => {
//   const mountRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);
//   const rendererRef = useRef(null); // To store the renderer

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(200, 200);
//     mountRef.current.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Add ambient and point lighting
//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     pointLight.position.set(10, 10, 10);
//     scene.add(pointLight);

//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     // Create a sphere with standard material
//     const geometry = new THREE.SphereGeometry(1, 64, 64);
//     const material = new THREE.MeshStandardMaterial({
//       color: 0xff007f,
//       metalness: 0.5,
//       roughness: 0.2,
//     });

//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     // Position the camera
//     camera.position.z = 3;

//     // Add controls to rotate the sphere
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false; // Disable zoom for smoother interactions

//     // Create an array to store the original positions
//     const positions = geometry.attributes.position.array;
//     const originalPositions = positions.slice(); // Make a copy of the original positions

//     // Animation function for bumping effect
//     let animationId;
//     const animate = (time) => {
//       // Apply wave-like movement by updating vertices
//       const timeFactor = time * 0.002;
//       for (let i = 0; i < positions.length; i += 3) {
//         const x = originalPositions[i];
//         const y = originalPositions[i + 1];
//         const z = originalPositions[i + 2];

//         // Create wave-like effect using sine and time
//         positions[i] = x + Math.sin(timeFactor + x * 5) * 0.05; // Bumping effect
//         positions[i + 1] = y + Math.sin(timeFactor + y * 5) * 0.05;
//         positions[i + 2] = z + Math.sin(timeFactor + z * 5) * 0.05;
//       }
//       geometry.attributes.position.needsUpdate = true; // Tell Three.js that the positions have changed

//       sphere.rotation.x += 0.005; // Slow rotation
//       sphere.rotation.y += 0.01; // Smooth rotation

//       renderer.render(scene, camera);
//       animationId = requestAnimationFrame(animate);
//     };

//     if (isPlaying) {
//       animate(0); // Start the animation
//     }

//     // Clean up when component is unmounted
//     return () => {
//       cancelAnimationFrame(animationId);
//       if (rendererRef.current) {
//         rendererRef.current.dispose(); // Dispose the renderer
//       }
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, [isPlaying]);

//   const togglePlay = () => {
//     if (isPlaying) {
//       setIsPlaying(false);
//       audioRef.current.pause();
//     } else {
//       setIsPlaying(true);
//       audioRef.current.play();
//     }
//   };

//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       <div ref={mountRef}>
//         <button
//           onClick={togglePlay}
//           style={{
//             marginTop: "10px",
//             padding: "10px 20px",
//             backgroundColor: isPlaying ? "#ff007f" : "#333",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           {isPlaying ? "Stop" : "Play"}
//         </button>
//       </div>
//       <audio ref={audioRef} preload="auto">
//         <source src="/Baby.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default ThreeJSAnimation;

// import React, { useRef, useEffect, useState } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import * as Tone from "tone";

// const ThreeJSVisualizer = () => {
//   const mountRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [toneStarted, setToneStarted] = useState(false);
//   const [audioLoaded, setAudioLoaded] = useState(false); // Track if the audio is loaded
//   const rendererRef = useRef(null); // To store the renderer
//   const playerRef = useRef(null); // Store player instance across renders
//   const animationIdRef = useRef(null); // Store animation ID
//   const controlsRef = useRef(null); // To store OrbitControls
//   let particles, analyser;

//   // Initialize Tone.js player and analyser
//   useEffect(() => {
//     playerRef.current = new Tone.Player({
//       url: process.env.PUBLIC_URL + "/Baby.mp3",
//       autostart: false,
//       onload: () => {
//         setAudioLoaded(true); // Set audio as loaded when the buffer is ready
//       },
//     }).toDestination();

//     analyser = new Tone.Analyser("fft", 256); // Using FFT to get frequency data
//     playerRef.current.connect(analyser);

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose(); // Clean up player when component unmounts
//       }
//     };
//   }, []);

//   const handlePlay = async () => {
//     if (!toneStarted) {
//       await Tone.start(); // Ensure Tone.js is started (required in browser)
//       setToneStarted(true);
//     }

//     // Only start playing if the audio is loaded
//     if (isPlaying && audioLoaded && playerRef.current) {
//       playerRef.current.start(); // Start playback
//       if (controlsRef.current) controlsRef.current.autoRotate = true; // Start rotating on play
//     } else if (!isPlaying && playerRef.current) {
//       playerRef.current.stop(); // Stop playback
//       if (controlsRef.current) controlsRef.current.autoRotate = false; // Stop rotating on stop
//     }
//   };

//   useEffect(() => {
//     handlePlay();
//   }, [isPlaying, audioLoaded]); // Trigger handlePlay when play state changes

//   // Set up Three.js scene
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(150, 150); // Updated size
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setClearColor(0x000000, 0); // Set background color to black
//     mountRef.current.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Create particle system
//     const particleCount = 500;
//     const geometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);
//     const sphericalRadius = 5; // Set a spherical radius

//     for (let i = 0; i < particleCount; i++) {
//       // Generate random positions within a sphere
//       const phi = Math.random() * Math.PI * 2;
//       const theta = Math.acos(Math.random() * 2 - 1);

//       positions[i * 3] = sphericalRadius * Math.sin(theta) * Math.cos(phi);
//       positions[i * 3 + 1] = sphericalRadius * Math.sin(theta) * Math.sin(phi);
//       positions[i * 3 + 2] = sphericalRadius * Math.cos(theta);
//     }

//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     const material = new THREE.PointsMaterial({
//       color: 0xcd5ff8, // Color updated to #cd5ff8
//       size: 0.1,
//     });

//     particles = new THREE.Points(geometry, material);
//     scene.add(particles);

//     // Camera and controls
//     camera.position.z = 10; // Move the camera back for better viewing of the sphere
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;
//     controls.autoRotate = false; // Rotation starts only when the song is playing
//     controlsRef.current = controls; // Store controls in ref for later access

//     // Animation loop
//     const animate = () => {
//       if (isPlaying && analyser) {
//         const frequencyData = analyser.getValue(); // Get frequency data from Tone.js
//         const positions = particles.geometry.attributes.position.array;

//         // Update particle positions based on frequency data
//         for (let i = 0; i < particleCount; i++) {
//           // Ensure frequencyData is valid (not NaN)
//           const audioFactor =
//             Math.abs(frequencyData[i % frequencyData.length]) || 0; // Default to 0 if invalid
//           if (!isNaN(audioFactor)) {
//             positions[i * 3] += Math.sin(audioFactor) * 0.02; // Bump particles slightly
//             positions[i * 3 + 1] += Math.sin(audioFactor) * 0.02;
//             positions[i * 3 + 2] += Math.cos(audioFactor) * 0.02;
//           }
//         }

//         particles.geometry.attributes.position.needsUpdate = true; // Update positions
//       }

//       controls.update(); // Update OrbitControls
//       renderer.render(scene, camera);
//       animationIdRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     // Clean up
//     return () => {
//       cancelAnimationFrame(animationIdRef.current); // Cancel animation loop
//       if (rendererRef.current) {
//         rendererRef.current.dispose(); // Clean up renderer
//       }
//     };
//   }, []); // Note: This runs only once

//   // Toggle play/pause
//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         width: "150px",
//         height: "150px",
//         position: "fixed", // Keep the visualizer at the bottom of the viewport
//         zIndex: 10,
//         bottom: 0,
//         left: 0, // Fixed to bottom left corner
//         margin: "10px", // Some margin for spacing
//       }}
//     >
//       <button
//         onClick={togglePlay}
//         disabled={!audioLoaded} // Disable button until audio is loaded
//         style={{
//           position: "absolute", // Make the button positioned inside the parent div
//           top: "50%", // Center vertically
//           left: "50%", // Center horizontally
//           transform: "translate(-50%, -50%)", // Adjust position to be truly centered
//           padding: "5px 5px",
//           backgroundColor: audioLoaded
//             ? isPlaying
//               ? "#cd5ff8"
//               : "#333"
//             : "#ccc", // Adjust color if not loaded
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: audioLoaded ? "pointer" : "not-allowed", // Disable cursor until audio is ready
//         }}
//       >
//         {isPlaying ? "Stop" : audioLoaded ? "Play" : "Loading..."}
//       </button>
//     </div>
//   );
// };

// export default ThreeJSVisualizer;

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Tone from "tone";

const ThreeJSVisualizer = () => {
  const mountRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toneStarted, setToneStarted] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false); // Track if the audio is loaded
  const rendererRef = useRef(null); // To store the renderer
  const playerRef = useRef(null); // Store player instance across renders
  console.log("🚀 ~ ThreeJSVisualizer ~ playerRef:", playerRef);
  const animationIdRef = useRef(null); // Store animation ID
  const controlsRef = useRef(null); // To store OrbitControls
  let particles, analyser;

  // Initialize Tone.js player and analyser
  useEffect(() => {
    playerRef.current = new Tone.Player({
      // Ensure correct URL from the public folder
      url: process.env.PUBLIC_URL + "/assets/sounds/tada.mp3",
      autostart: false,
      onload: () => {
        setAudioLoaded(true); // Set audio as loaded when the buffer is ready
      },
    }).toDestination();

    analyser = new Tone.Analyser("fft", 256); // Using FFT to get frequency data
    playerRef.current.connect(analyser);

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose(); // Clean up player when component unmounts
      }
    };
  }, []);

  const handlePlay = async () => {
    if (!toneStarted) {
      await Tone.start(); // Ensure Tone.js is started (required in browser)
      setToneStarted(true);
    }

    // Only start playing if the audio is loaded
    if (isPlaying && audioLoaded && playerRef.current) {
      playerRef.current.start(); // Start playback
    } else if (!isPlaying && playerRef.current) {
      playerRef.current.stop(); // Stop playback
    }
  };

  useEffect(() => {
    handlePlay();
  }, [isPlaying, audioLoaded]); // Trigger handlePlay when play state changes

  // Set up Three.js scene
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(150, 150); // Updated size
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Set background color to black
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particle system
    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sphericalRadius = 5; // Set a spherical radius

    for (let i = 0; i < particleCount; i++) {
      // Generate random positions within a sphere
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = sphericalRadius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = sphericalRadius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = sphericalRadius * Math.cos(theta);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xcd5ff8, // Color updated to #cd5ff8
      size: 0.1,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Camera and controls
    camera.position.z = 10; // Move the camera back for better viewing of the sphere
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true; // Rotation starts by default
    controlsRef.current = controls; // Store controls in ref for later access

    // Animation loop
    const animate = () => {
      if (analyser && isPlaying) {
        const frequencyData = analyser.getValue(); // Get frequency data from Tone.js
        const positions = particles.geometry.attributes.position.array;

        // Update particle positions based on frequency data
        for (let i = 0; i < particleCount; i++) {
          const audioFactor =
            Math.abs(frequencyData[i % frequencyData.length]) || 0; // Default to 0 if invalid
          if (!isNaN(audioFactor)) {
            positions[i * 3] += Math.sin(audioFactor) * 0.02; // Bump particles slightly
            positions[i * 3 + 1] += Math.sin(audioFactor) * 0.02;
            positions[i * 3 + 2] += Math.cos(audioFactor) * 0.02;
          }
        }

        particles.geometry.attributes.position.needsUpdate = true; // Update positions
      }

      controls.update(); // Update OrbitControls
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationIdRef.current); // Cancel animation loop
      if (rendererRef.current) {
        rendererRef.current.dispose(); // Clean up renderer
      }
    };
  }, []); // Note: This runs only once

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      ref={mountRef}
      style={{
        width: "150px",
        height: "150px",
        position: "fixed", // Keep the visualizer at the bottom of the viewport
        zIndex: 10,
        bottom: 0,
        left: 0, // Fixed to bottom left corner
        margin: "10px", // Some margin for spacing
      }}
    >
      <button
        onClick={togglePlay}
        disabled={!audioLoaded} // Disable button until audio is loaded
        style={{
          position: "absolute", // Make the button positioned inside the parent div
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust position to be truly centered
          padding: "5px 5px",
          backgroundColor: audioLoaded
            ? isPlaying
              ? "#cd5ff8"
              : "#333"
            : "#ccc", // Adjust color if not loaded
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: audioLoaded ? "pointer" : "not-allowed", // Disable cursor until audio is ready
        }}
      >
        {isPlaying ? "Stop" : audioLoaded ? "Play" : "Loading..."}
      </button>
    </div>
  );
};

export default ThreeJSVisualizer;
