function createHollywoodOcean() {
  let scene, camera, renderer, ocean, sky, clock, oceanSound;

  function init() {
    const container = document.querySelector(".page4");
    if (!container) return;

    container.style.position = "relative";
    container.style.overflow = "hidden";
    container.style.width = "100%";
    container.style.height = "100vh";

    // Scene Setup
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      window.innerWidth < 768 ? 85 : 75,
      container.clientWidth / container.clientHeight,
      1,
      2000
    );
    setCameraPosition();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Moving Skybox
    const skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
    const skyTexture = new THREE.TextureLoader().load(
      "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg"
    );
    skyTexture.wrapS = skyTexture.wrapT = THREE.RepeatWrapping;
    skyTexture.repeat.set(2, 1);

    const skyMaterial = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide,
    });

    sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);

    // Ocean Waves
    const waterGeometry = new THREE.PlaneGeometry(2000, 2000, 512, 512);
    const waterTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/waternormals.jpg"
    );
    waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;

    const waterMaterial = new THREE.ShaderMaterial({
      vertexShader: `
            varying vec2 vUv;
            varying float vWave;
            uniform float uTime;
            uniform sampler2D uNormalMap;
    
            void main() {
                vUv = uv;
                vec3 pos = position;
    
                vec3 normalTex = texture2D(uNormalMap, uv * 10.0 + vec2(uTime * 0.02)).rgb;
                float waveHeight = (normalTex.r + normalTex.g) * 1.0 - 0.5;
    
                pos.z += waveHeight;
                vWave = pos.z;
    
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
      fragmentShader: `
            varying vec2 vUv;
            varying float vWave;
            uniform sampler2D uNormalMap;
    
            void main() {
                vec3 deepWater = vec3(0.0, 0.2, 0.6);
                vec3 shallowWater = vec3(0.0, 0.7, 1.0);
                
                float depthFactor = smoothstep(-1.0, 2.0, vWave);
                vec3 waterColor = mix(shallowWater, deepWater, depthFactor);
    
                gl_FragColor = vec4(waterColor, 1.0);
            }
          `,
      uniforms: {
        uTime: { value: 0 },
        uNormalMap: { value: waterTexture },
      },
    });

    ocean = new THREE.Mesh(waterGeometry, waterMaterial);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -50;
    scene.add(ocean);

    clock = new THREE.Clock();
    animate();

    // Ocean Sound
    oceanSound = new Audio(
      "images/gentle-ocean-waves-birdsong-and-gull-7109.mp3"
    ); // High-quality ocean sound
    oceanSound.loop = true;
    // oceanSound.volume = 0.5;
    oceanSound.play().catch(() => {
      document.addEventListener("click", playOceanSoundOnce, { once: true });
    });

    // Handle Window Resize
    window.addEventListener("resize", handleResize);

    // Trigger animation after load
    gsap.to(ocean.position, {
      y: -5,
      duration: 3,
      ease: "power2.out",
    });

    gsap.to(camera.position, {
      x: 0,
      y: 40,
      z: 120,
      duration: 4,
      ease: "power3.out",
    });

    gsap.to(ocean.rotation, {
      z: 0.05,
      duration: 3,
      ease: "power2.out",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(ocean.scale, {
      y: 1.05,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  function playOceanSoundOnce() {
    oceanSound.play();
  }

  function setCameraPosition() {
    if (window.innerWidth < 768) {
      camera.position.set(0, 20, 180);
    } else {
      camera.position.set(0, 40, 150);
    }
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    setCameraPosition();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Move sky slowly
    sky.material.map.offset.x += 0.00006;

    // Keep ocean waves animating
    ocean.material.uniforms.uTime.value = elapsedTime;

    renderer.render(scene, camera);
  }

  init();
}

createHollywoodOcean();

function handleTextEffect() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = scrollY / maxScroll;

  let targetTextY = Math.sin(scrollProgress * Math.PI * 4) * 20 - 10;
  let targetTextScale = 1 + Math.sin(scrollProgress * Math.PI * 5) * 0.05;

  if (scrollProgress > 0.95) {
    targetTextY += (scrollProgress - 0.95) * 50;
  }

  gsap.to(".zest-text", {
    opacity: 1,
    y: targetTextY,
    scale: targetTextScale,
    duration: 2,
    ease: "power4.out",
  });
}

window.addEventListener("scroll", handleTextEffect);

gsap.to(".zest-text", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 2,
  ease: "power4.out",
});
