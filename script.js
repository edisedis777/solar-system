// Solar System data with real relative sizes and orbit periods
const celestialBodies = [
  {
    name: "sun",
    type: "star",
    diameter: 30, // em
    color: "#FFA500",
    info: "The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions. The Sun radiates energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
    hasImage: true,
  },
  {
    name: "mercury",
    type: "planet",
    diameter: 0.4, // em
    orbitRadius: 20, // em
    orbitPeriod: 88, // days (animation seconds)
    orbitEccentricity: 0.205,
    color: "#A9A9A9",
    info: "Mercury is the smallest and innermost planet in the Solar System. It has no natural satellites and no substantial atmosphere. It has a large iron core that generates a magnetic field about 1% as strong as Earth's.",
    hasImage: true,
  },
  {
    name: "venus",
    type: "planet",
    diameter: 0.95,
    orbitRadius: 30,
    orbitPeriod: 225,
    orbitEccentricity: 0.007,
    color: "#FFD700",
    info: "Venus is the second planet from the Sun. It has the densest atmosphere of the four terrestrial planets, consisting mostly of carbon dioxide. Venus has no natural satellite and is named after the Roman goddess of love and beauty.",
    hasImage: true,
  },
  {
    name: "earth",
    type: "planet",
    diameter: 1,
    orbitRadius: 40,
    orbitPeriod: 365,
    orbitEccentricity: 0.017,
    color: "#1E90FF",
    info: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered with water. Earth's atmosphere consists mostly of nitrogen and oxygen.",
    hasImage: true,
    moons: [
      {
        name: "moon",
        diameter: 0.27,
        orbitRadius: 2.5,
        orbitPeriod: 27.3,
        color: "#D3D3D3",
        info: "The Moon is Earth's only natural satellite. It is the fifth-largest satellite in the Solar System and the largest and most massive relative to its parent planet.",
        hasImage: true,
      },
    ],
  },
  {
    name: "mars",
    type: "planet",
    diameter: 0.53,
    orbitRadius: 50,
    orbitPeriod: 687,
    orbitEccentricity: 0.094,
    color: "#FF4500",
    info: 'Mars is the fourth planet from the Sun. It has a thin atmosphere and surface features reminiscent of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth. It is often referred to as the "Red Planet".',
    hasImage: true,
    moons: [
      {
        name: "phobos",
        diameter: 0.1,
        orbitRadius: 1.5,
        orbitPeriod: 0.32,
        color: "#C0C0C0",
      },
      {
        name: "deimos",
        diameter: 0.08,
        orbitRadius: 2,
        orbitPeriod: 1.26,
        color: "#A9A9A9",
      },
    ],
  },
  {
    name: "jupiter",
    type: "planet",
    diameter: 11.2,
    orbitRadius: 75,
    orbitPeriod: 4333,
    orbitEccentricity: 0.049,
    color: "#F0E68C",
    info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined. Jupiter is primarily composed of hydrogen and helium.",
    hasImage: true,
    moons: [
      {
        name: "io",
        diameter: 0.28,
        orbitRadius: 4,
        orbitPeriod: 1.77,
        color: "#FFFF00",
      },
      {
        name: "europa",
        diameter: 0.25,
        orbitRadius: 5,
        orbitPeriod: 3.55,
        color: "#F5F5DC",
      },
      {
        name: "ganymede",
        diameter: 0.41,
        orbitRadius: 6,
        orbitPeriod: 7.15,
        color: "#D3D3D3",
      },
      {
        name: "callisto",
        diameter: 0.38,
        orbitRadius: 7,
        orbitPeriod: 16.69,
        color: "#778899",
      },
    ],
  },
  {
    name: "saturn",
    type: "planet",
    diameter: 9.5,
    orbitRadius: 100,
    orbitPeriod: 10759,
    orbitEccentricity: 0.057,
    color: "#F4A460",
    info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth but is more massive. Saturn is known for its prominent ring system.",
    hasImage: true,
    hasRings: true,
    moons: [
      {
        name: "titan",
        diameter: 0.4,
        orbitRadius: 8,
        orbitPeriod: 15.95,
        color: "#FFA07A",
      },
      {
        name: "enceladus",
        diameter: 0.15,
        orbitRadius: 6,
        orbitPeriod: 1.37,
        color: "#FFFFFF",
      },
    ],
  },
  {
    name: "uranus",
    type: "planet",
    diameter: 4,
    orbitRadius: 125,
    orbitPeriod: 30687,
    orbitEccentricity: 0.046,
    color: "#ADD8E6",
    info: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from those of Jupiter and Saturn.",
    hasImage: true,
    moons: [
      {
        name: "titania",
        diameter: 0.12,
        orbitRadius: 4,
        orbitPeriod: 8.71,
        color: "#D3D3D3",
      },
      {
        name: "oberon",
        diameter: 0.11,
        orbitRadius: 5,
        orbitPeriod: 13.46,
        color: "#A9A9A9",
      },
    ],
  },
  {
    name: "neptune",
    type: "planet",
    diameter: 3.9,
    orbitRadius: 150,
    orbitPeriod: 60190,
    orbitEccentricity: 0.011,
    color: "#1E90FF",
    info: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than Uranus.",
    hasImage: true,
    moons: [
      {
        name: "triton",
        diameter: 0.21,
        orbitRadius: 5,
        orbitPeriod: 5.88,
        color: "#E0FFFF",
      },
    ],
  },
  {
    name: "pluto",
    type: "dwarf",
    diameter: 0.18,
    orbitRadius: 175,
    orbitPeriod: 90560,
    orbitEccentricity: 0.244,
    color: "#DEB887",
    info: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first Kuiper belt object to be discovered and is the largest known dwarf planet. Pluto was discovered by Clyde Tombaugh in 1930 and was considered the ninth planet from the Sun until 2006.",
    hasImage: true,
    moons: [
      {
        name: "charon",
        diameter: 0.09,
        orbitRadius: 1,
        orbitPeriod: 6.39,
        color: "#D3D3D3",
      },
    ],
  },
];

// Initialize state variables
let animationSpeed = 1;
let zoomLevel = 1;
let isDarkMode = true;
let isPaused = false;
let currentPlanetFocus = null;
let isDragging = false;
let startX, startY;
let panX = 0,
  panY = 0;

// DOM elements
const solarSystem = document.getElementById("solar-system");
const speedSlider = document.getElementById("speed-slider");
const speedValue = document.getElementById("speed-value");
const togglePlayButton = document.getElementById("toggle-play");
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");
const zoomResetButton = document.getElementById("zoom-reset");
const planetButtons = document.querySelectorAll("[data-planet]");
const planetNameElement = document.getElementById("planet-name");
const planetInfoElement = document.getElementById("planet-info");
const starsCanvas = document.getElementById("stars-canvas");
const ctx = starsCanvas.getContext("2d");

// Initialize the solar system
function initSolarSystem() {
  // Create the sun
  const sun = createCelestialBody(celestialBodies[0]);
  solarSystem.appendChild(sun);
  solarSystem.style.fontSize = "min(0.7vw, 0.7vh)";

  // Asteroid belt between Mars and Jupiter

  // Create planets and their orbits
  for (let i = 1; i < celestialBodies.length; i++) {
    const body = celestialBodies[i];

    // Create orbit
    const orbit = document.createElement("div");
    orbit.className = "orbit";
    orbit.style.width = `${body.orbitRadius * 2}em`;
    orbit.style.height = `${body.orbitRadius * 2}em`;
    orbit.style.top = `${50 - body.orbitRadius}%`;
    orbit.style.left = `${50 - body.orbitRadius}%`;

    // Apply elliptical orbit if eccentricity is significant
    if (body.orbitEccentricity > 0.05) {
      const horizontalRadius = body.orbitRadius;
      const verticalRadius = body.orbitRadius * (1 - body.orbitEccentricity);
      orbit.style.width = `${horizontalRadius * 2}em`;
      orbit.style.height = `${verticalRadius * 2}em`;
      orbit.style.top = `${50 - verticalRadius}%`;
      orbit.style.left = `${50 - horizontalRadius}%`;
    }

    // Set orbital period
    orbit.style.animationDuration = `${body.orbitPeriod / animationSpeed}s`;

    // Create planet
    const planet = createCelestialBody(body);
    planet.style.top = `0%`;
    planet.style.left = `${50 - body.diameter / 2}%`;

    // Add rings for Saturn
    if (body.hasRings) {
      const rings = document.createElement("div");
      rings.className = "saturn-rings";
      planet.appendChild(rings);
    }

    // Add moons if any
    if (body.moons && body.moons.length > 0) {
      body.moons.forEach((moon) => {
        const moonOrbit = document.createElement("div");
        moonOrbit.className = "moon-orbit";
        moonOrbit.style.width = `${moon.orbitRadius * 2}em`;
        moonOrbit.style.height = `${moon.orbitRadius * 2}em`;
        moonOrbit.style.top = `calc(50% - ${moon.orbitRadius}em)`;
        moonOrbit.style.left = `calc(50% - ${moon.orbitRadius}em)`;
        moonOrbit.style.animationDuration = `${
          moon.orbitPeriod / animationSpeed
        }s`;

        const moonElement = document.createElement("div");
        moonElement.className = "moon";
        moonElement.style.width = `${moon.diameter}em`;
        moonElement.style.height = `${moon.diameter}em`;
        moonElement.style.backgroundColor = moon.color;
        moonElement.style.top = `0%`;
        moonElement.style.left = `${50 - moon.diameter / 2}%`;

        if (moon.hasImage) {
          const moonImg = document.createElement("img");
          moonImg.src = `./images/${moon.name}.png`;
          moonImg.alt = moon.name;
          moonElement.appendChild(moonImg);
        }

        moonOrbit.appendChild(moonElement);
        planet.appendChild(moonOrbit);
      });
    }

    orbit.appendChild(planet);
    solarSystem.appendChild(orbit);

    // Add event listener for planet info
    planet.addEventListener("click", () => showPlanetInfo(body));
  }
}

// Create a celestial body element
function createCelestialBody(body) {
  const element = document.createElement("div");
  element.className = "celestial-body";
  element.id = body.name;
  element.style.width = `${body.diameter}em`;
  element.style.height = `${body.diameter}em`;

  if (body.hasImage) {
    const img = document.createElement("img");
    img.src = `./images/${body.name}.png`;
    img.alt = body.name;
    element.appendChild(img);
  } else {
    element.style.backgroundColor = body.color;
  }

  return element;
}

// Show planet information
function showPlanetInfo(body) {
  planetNameElement.textContent =
    body.name.charAt(0).toUpperCase() + body.name.slice(1);
  planetInfoElement.textContent =
    body.info || `No information available for ${body.name}.`;

  // Add additional info if needed
  if (body.moons && body.moons.length > 0) {
    const moonNames = body.moons
      .map((moon) => moon.name.charAt(0).toUpperCase() + moon.name.slice(1))
      .join(", ");
    planetInfoElement.textContent += ` Moons: ${moonNames}.`;
  }

  focusOnPlanet(body.name);
}

// Focus on a specific planet
function focusOnPlanet(planetName) {
  // Reset previous focus
  if (currentPlanetFocus) {
    document
      .querySelector(`button[data-planet="${currentPlanetFocus}"]`)
      .classList.remove("active");
  }

  currentPlanetFocus = planetName;
  document
    .querySelector(`button[data-planet="${planetName}"]`)
    .classList.add("active");

  // Get the planet's orbit radius and position to determine zoom level
  const planet = celestialBodies.find((b) => b.name === planetName);
  if (planet) {
    let targetZoom;
    let targetX, targetY;

    if (planet.name === "sun") {
      // For the sun, just reset to default view
      targetZoom = 1;
      targetX = 0;
      targetY = 0;
    } else {
      // For planets, zoom to an appropriate level and center
      targetZoom = Math.min(Math.max(100 / (planet.orbitRadius * 2), 0.2), 3); // Keep zoom within reasonable limits

      // Calculate target center (position) based on orbit and eccentricity
      targetX = -planet.orbitRadius; // Start at left side of orbit
      targetY = 0; // Center vertically
      //adjust the position if the orbit have eccentricity
      if (planet.orbitEccentricity > 0.05) {
        targetY =
          planet.orbitRadius * (1 - planet.orbitEccentricity) -
          planet.orbitRadius;
      }
      // Add the transform: translate to move the center of the planet
      const planetOrbit = document
        .querySelector(`#${planet.name}`)
        .closest(".orbit");
      if (planetOrbit) {
        const computedStyle = window.getComputedStyle(planetOrbit);
        const matrix = new DOMMatrix(computedStyle.transform);
        targetX = matrix.m41 / zoomLevel; // Translate x of the orbit
        targetY = matrix.m42 / zoomLevel; // Translate Y of the orbit
      }
    }
    // Apply transform
    solarSystem.style.transition = "transform 0.5s ease"; // Add transition for smooth effect
    solarSystem.style.transform = `translate(calc(-50% + ${targetX}em), calc(-50% + ${targetY}em)) scale(${targetZoom})`;

    // Remove transition after it finishes
    setTimeout(() => {
      solarSystem.style.transition = "none";
    }, 500);
  }
}

// Create stars using canvas for better performance
function createStars() {
  // Set canvas dimensions
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;

  // Clear canvas
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

  // Draw stars
  const starCount = 1000;
  const starSizes = [0.5, 1, 1.5, 2]; // Varying star sizes for depth

  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * starsCanvas.width;
    const y = Math.random() * starsCanvas.height;
    const size = starSizes[Math.floor(Math.random() * starSizes.length)];

    // Random brightness for twinkling effect
    const brightness = 0.5 + Math.random() * 0.5;

    ctx.fillStyle = isDarkMode
      ? `rgba(255, 255, 255, ${brightness})`
      : `rgba(0, 0, 0, ${brightness})`;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Add comet that appears occasionally
function addComet() {
  if (Math.random() > 0.98) {
    // 2% chance each call
    const comet = document.createElement("div");
    comet.className = "celestial-body";
    comet.style.width = "0.5em";
    comet.style.height = "0.5em";
    comet.style.backgroundColor = "#FFFFFF";
    comet.style.boxShadow = "0 0 10px #FFFFFF, 0 0 20px #FFFFFF";
    comet.style.position = "absolute";

    // Random position and direction
    const startX = Math.random() * 200 - 50; // -50% to 150%
    const startY = Math.random() * 200 - 50; // -50% to 150%
    const endX = Math.random() * 200 - 50;
    const endY = Math.random() * 200 - 50;

    comet.style.top = `${startY}%`;
    comet.style.left = `${startX}%`;

    solarSystem.appendChild(comet);

    // Animate the comet
    const duration = 5 + Math.random() * 10; // 5-15 seconds
    comet.style.transition = `top ${duration}s linear, left ${duration}s linear, opacity ${duration}s linear`;

    setTimeout(() => {
      comet.style.top = `${endY}%`;
      comet.style.left = `${endX}%`;
      comet.style.opacity = 0;
    }, 10);

    // Remove comet after animation
    setTimeout(() => {
      solarSystem.removeChild(comet);
    }, duration * 1000);
  }
}

// Update animation speed
function updateSpeed() {
  animationSpeed = parseFloat(speedSlider.value);
  speedValue.textContent = `${animationSpeed.toFixed(1)}x`;

  // Update all orbital periods
  document.querySelectorAll(".orbit").forEach((orbit, i) => {
    const body = celestialBodies[i + 1]; // +1 to skip the sun
    if (body) {
      orbit.style.animationDuration = `${body.orbitPeriod / animationSpeed}s`;
    }
  });

  // Update all moon orbital periods
  document.querySelectorAll(".moon-orbit").forEach((moonOrbit) => {
    // Find the corresponding planet and moon
    const planetElement = moonOrbit.closest(".celestial-body");
    if (planetElement) {
      const planetName = planetElement.id;
      const planet = celestialBodies.find((b) => b.name === planetName);
      if (planet && planet.moons) {
        const moonElement = moonOrbit.querySelector(".moon");
        if (moonElement) {
          const moon = planet.moons.find((m) => m.name === moonElement.id);
          if (moon) {
            moonOrbit.style.animationDuration = `${
              moon.orbitPeriod / animationSpeed
            }s`;
          }
        }
      }
    }
  });
}

// Toggle play/pause
function togglePlay() {
  isPaused = !isPaused;
  document.body.classList.toggle("paused", isPaused);
  togglePlayButton.textContent = isPaused ? "Play" : "Pause";
}

// Toggle dark/light mode
function toggleDarkMode() {
  createStars(); // Recreate stars with new colors
}

// Zoom in
function zoomIn() {
  zoomLevel = Math.min(zoomLevel + 0.1, 3); // Limit zoom in to 3x
  solarSystem.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
}

// Zoom out
function zoomOut() {
  zoomLevel = Math.max(zoomLevel - 0.1, 0.1); // Limit zoom out to 0.1x
  solarSystem.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
}

// Reset zoom
function resetZoom() {
  zoomLevel = 1;
  solarSystem.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
}

function handleMouseDown(event) {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  solarSystem.style.cursor = "grabbing"; // Set cursor to grabbing
}

function handleMouseMove(event) {
  if (!isDragging) return;

  const deltaX = event.clientX - startX; // Zoom level
  const deltaY = event.clientY - startY; // Zoom level

  panX += deltaX;
  panY += deltaY;

  startX = event.clientX;
  startY = event.clientY;

  solarSystem.style.transform = `translate(calc(-50% + ${panX}px), calc(-50% + ${panY}px)) scale(${zoomLevel})`;
}

function handleMouseUp() {
  isDragging = false;
  solarSystem.style.cursor = "grab"; // Reset cursor
}

function handleMouseWheel(event) {
  event.preventDefault(); // Prevent default scrolling behavior

  // Determine zoom direction
  const zoomFactor = event.deltaY > 0 ? -0.1 : 0.1; // Zoom out if deltaY is positive, zoom in otherwise

  zoomLevel = Math.min(Math.max(zoomLevel + zoomFactor, 0.1), 3); // Keep zoom within reasonable limits
  solarSystem.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
}

// Event listeners
solarSystem.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
speedSlider.addEventListener("input", updateSpeed);
togglePlayButton.addEventListener("click", togglePlay);
zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);
zoomResetButton.addEventListener("click", resetZoom);
document.addEventListener("wheel", handleMouseWheel, { passive: false });
planetButtons.forEach((button) => {
  button.addEventListener("click", () => focusOnPlanet(button.dataset.planet));
});

// Initialize
initSolarSystem();
createStars();
// Animation loop for the comet
setInterval(addComet, 1000);
