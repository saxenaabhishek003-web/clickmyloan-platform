/**
 * ABHISHEK SAXENA — 3D CINEMATIC PORTFOLIO ENGINE
 * 
 * Features:
 * 1. Global WebGL Starfield & Neon Ember Cloud (Three.js)
 * 2. Hero Dragon Eyes Cinematic Fade-In, Ocular Pulse & Parallax
 * 3. Astronaut Deep Space Parallax Zoom
 * 4. Panda Breathing & 3D Mouse Tilt
 * 5. Continuous Lemniscate Infinity Light Trail Particle Engine (Canvas)
 * 6. Challenge & Analytics 3D Specular Tilt Cards
 * 7. Purple Wave Visual Portal Inter-Discipline Warper
 * 8. Campaign Lab Interactive 3-Station Pipelines & Match Type Simulator
 * 9. Skills Universe Interactive HUD Inspector
 * 10. Soft Skills Neural Constellation Canvas (Interactive physics)
 * 11. 3D Rotating Toolkit Cards
 * 12. Fullscreen Campaign Lightbox Inspector
 * 13. Custom Neon Red Dual-Ring Cursor
 * 14. Responsive Navigation & Fast Contact Dispatcher
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Custom Neon Red Dual-Ring Cursor (Desktop Only)
  // ==========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');
  const ambientGlow = document.getElementById('ambient-glow');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice && cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      if (ambientGlow) {
        ambientGlow.style.left = `${mouseX}px`;
        ambientGlow.style.top = `${mouseY}px`;
      }
    });

    function renderCursor() {
      const speed = 0.18;
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactiveSelectors = 'a, button, input, textarea, .station-tab, .cmd-tab-btn, .btn-match, .neg-tag, .skill-node-pill, .tool-3d-card, .metric-glass-card, .challenge-chip, .c-pill, .infinity-node, .proof-img-wrap, .proof-thumb-box, .proof-display-frame, .pipeline-step-item, .btn-open-case, .case-modal-close';
    const hoverElements = document.querySelectorAll(interactiveSelectors);

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
      el.addEventListener('mousedown', () => cursorOutline.classList.add('click'));
      el.addEventListener('mouseup', () => cursorOutline.classList.remove('click'));
    });
  }

  // ==========================================================================
  // 2. Global Three.js WebGL Cosmic Particles & Red Embers
  // ==========================================================================
  const webglCanvas = document.getElementById('webgl-canvas');
  if (webglCanvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      canvas: webglCanvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle geometries: Starfield + Neon Red Embers
    const particleCount = isTouchDevice ? 300 : 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const greenColor = new THREE.Color('#00ff66');
    const whiteColor = new THREE.Color('#ffffff');
    const darkGreenColor = new THREE.Color('#003b14');
    const mintColor = new THREE.Color('#00ff88');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 150;

      const mixedColor = Math.random() > 0.4 ? greenColor : (Math.random() > 0.5 ? whiteColor : (Math.random() > 0.5 ? mintColor : darkGreenColor));
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let targetRotX = 0;
    let targetRotY = 0;

    window.addEventListener('mousemove', (e) => {
      const xNorm = (e.clientX / window.innerWidth) - 0.5;
      const yNorm = (e.clientY / window.innerHeight) - 0.5;
      targetRotX = yNorm * 0.2;
      targetRotY = xNorm * 0.2;
    });

    function animateThree() {
      requestAnimationFrame(animateThree);

      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      particles.rotation.x += (targetRotX - particles.rotation.x) * 0.05;
      particles.rotation.y += (targetRotY - particles.rotation.y) * 0.05;

      renderer.render(scene, camera);
    }
    animateThree();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // ==========================================================================
  // 3. Act 1: Opening Hero Cinematic Sequence Controller (Abhishek Portrait)
  //    Timeline:
  //    0s: Blackout curtain visible
  //    0.4s: Neon green sparks canvas begins drifting
  //    0.8s: Curtain fades smoothly revealing Abhishek's portrait
  //    1.0s: Cyber neon green aura breathes behind silhouette
  //    1.3s: Subtle camera zoom on portrait
  //    1.6s: Typography reveals sequentially (ABHISHEK SAXENA, subtitle, pills)
  //    2.0s: Hero CTA buttons glow with entrance pulse
  // ==========================================================================
  const blackoutCurtain = document.getElementById('hero-blackout-curtain');
  const heroBgLayer = document.getElementById('hero-bg-layer') || document.getElementById('dragon-bg-layer');
  const heroPortraitImg = document.getElementById('hero-portrait-img') || document.getElementById('dragon-img');
  const heroNeonAura = document.querySelector('.hero-neon-aura');
  const heroContent = document.getElementById('hero-content');

  function initOpeningSequence() {
    // 0.8s: Fade out blackout curtain to reveal Abhishek's portrait
    setTimeout(() => {
      if (blackoutCurtain) {
        blackoutCurtain.classList.add('faded');
      }
      if (heroBgLayer) {
        heroBgLayer.style.opacity = '1';
      }
    }, 800);

    // 1.0s: Neon green aura pulse
    setTimeout(() => {
      if (heroNeonAura) {
        heroNeonAura.style.opacity = '1';
      }
    }, 1000);

    // 1.3s: Subtle camera zoom
    setTimeout(() => {
      if (heroPortraitImg) {
        heroPortraitImg.classList.add('cinematic-zoom');
      }
    }, 1300);

    // 1.6s: Typography reveals
    setTimeout(() => {
      if (heroContent) {
        heroContent.classList.add('revealed');
      }
    }, 1600);

    // 2.0s: Action buttons pulse
    setTimeout(() => {
      const enterBtn = document.getElementById('btn-enter-world');
      if (enterBtn) {
        enterBtn.style.boxShadow = '0 0 35px rgba(0, 255, 102, 0.85)';
        setTimeout(() => {
          enterBtn.style.boxShadow = '';
        }, 1200);
      }
    }, 2000);

    // Mouse parallax over hero section
    if (!isTouchDevice) {
      window.addEventListener('mousemove', (e) => {
        if (window.scrollY < window.innerHeight) {
          const xOffset = (e.clientX / window.innerWidth - 0.5) * 18;
          const yOffset = (e.clientY / window.innerHeight - 0.5) * 12;
          if (heroPortraitImg) {
            heroPortraitImg.style.transform = `scale(1.02) translate(${xOffset}px, ${yOffset}px)`;
          }
          if (heroNeonAura) {
            heroNeonAura.style.transform = `translate(calc(-50% + ${xOffset * 0.5}px), calc(-50% + ${yOffset * 0.5}px))`;
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOpeningSequence);
  } else {
    initOpeningSequence();
  }

  // Hero Video & Audio Controller
  const heroBgVideo = document.getElementById('hero-bg-video');
  const heroAudioBtn = document.getElementById('hero-video-audio-btn');
  const audioToggleIcon = document.getElementById('audio-toggle-icon');
  const audioToggleText = document.getElementById('audio-toggle-text');

  if (heroBgVideo) {
    heroBgVideo.muted = true;
    const playBgVideo = () => {
      heroBgVideo.play().catch(() => {});
    };
    playBgVideo();
    window.addEventListener('touchstart', playBgVideo, { once: true });
    window.addEventListener('click', playBgVideo, { once: true });

    if (heroAudioBtn) {
      heroAudioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        heroBgVideo.muted = !heroBgVideo.muted;
        if (!heroBgVideo.muted) {
          heroAudioBtn.classList.add('unmuted');
          if (audioToggleIcon) audioToggleIcon.className = 'fa-solid fa-volume-high';
          if (audioToggleText) audioToggleText.textContent = 'SOUND ON';
          heroBgVideo.play().catch(() => {});
        } else {
          heroAudioBtn.classList.remove('unmuted');
          if (audioToggleIcon) audioToggleIcon.className = 'fa-solid fa-volume-xmark';
          if (audioToggleText) audioToggleText.textContent = 'AMBIENT SOUND';
        }
      });
    }
  }

  // Hero Atmospheric Red Sparks & Embers 2D Canvas Engine
  const heroParticlesCanvas = document.getElementById('hero-particles-canvas');
  if (heroParticlesCanvas) {
    const ctx = heroParticlesCanvas.getContext('2d');
    let hWidth, hHeight;

    function resizeHeroCanvas() {
      hWidth = heroParticlesCanvas.parentElement.clientWidth;
      hHeight = heroParticlesCanvas.parentElement.clientHeight;
      heroParticlesCanvas.width = hWidth;
      heroParticlesCanvas.height = hHeight;
    }
    resizeHeroCanvas();
    window.addEventListener('resize', resizeHeroCanvas);

    const sparkCount = isTouchDevice ? 30 : 65;
    const sparks = [];

    for (let i = 0; i < sparkCount; i++) {
      sparks.push({
        x: Math.random() * (hWidth || window.innerWidth),
        y: Math.random() * (hHeight || window.innerHeight),
        radius: 0.8 + Math.random() * 2.2,
        speedY: 0.35 + Math.random() * 0.9,
        speedX: (Math.random() - 0.5) * 0.45,
        alpha: 0.2 + Math.random() * 0.7,
        alphaSpeed: 0.008 + Math.random() * 0.015,
        color: Math.random() > 0.35 ? '#00ff66' : (Math.random() > 0.5 ? '#ffffff' : '#00ff88')
      });
    }

    let sparksActive = false;
    setTimeout(() => { sparksActive = true; }, 400);

    function renderHeroSparks() {
      if (sparksActive && window.scrollY < window.innerHeight) {
        ctx.clearRect(0, 0, hWidth, hHeight);

        sparks.forEach((s) => {
          s.y -= s.speedY;
          s.x += s.speedX;
          s.alpha += s.alphaSpeed;

          if (s.alpha > 0.85 || s.alpha < 0.15) {
            s.alphaSpeed = -s.alphaSpeed;
          }

          if (s.y < -10) {
            s.y = hHeight + 10;
            s.x = Math.random() * hWidth;
          }
          if (s.x < -10) s.x = hWidth + 10;
          if (s.x > hWidth + 10) s.x = -10;

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
          ctx.shadowColor = '#00ff66';
          ctx.shadowBlur = s.radius > 1.5 ? 8 : 4;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        });
      }
      requestAnimationFrame(renderHeroSparks);
    }
    renderHeroSparks();
  }

  // ==========================================================================
  // 4. Act 2: Astronaut Scene Scroll Parallax
  // ==========================================================================
  const astronautImg = document.getElementById('astronaut-img');
  const astronautContent = document.getElementById('astronaut-content');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const journeySec = document.getElementById('journey');
    if (journeySec && astronautImg) {
      const rect = journeySec.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const factor = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        astronautImg.style.transform = `scale(${1.02 + factor * 0.08}) translateY(${factor * -20}px)`;
        if (astronautContent) {
          astronautContent.style.transform = `translateY(${factor * -15}px)`;
        }
      }
    }
  });

  // ==========================================================================
  // 5. Act 3: Panda Card 3D Tilt & Breathing
  // ==========================================================================
  const pandaStage = document.getElementById('panda-card-stage');
  if (pandaStage && !isTouchDevice) {
    pandaStage.addEventListener('mousemove', (e) => {
      const rect = pandaStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotY = (x / (rect.width / 2)) * 10;
      const rotX = -(y / (rect.height / 2)) * 10;
      pandaStage.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
    });

    pandaStage.addEventListener('mouseleave', () => {
      pandaStage.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  }

  // ==========================================================================
  // 6. Act 4: Lemniscate Infinity Trail Canvas Engine
  // ==========================================================================
  const infinityCanvas = document.getElementById('infinity-canvas');
  if (infinityCanvas) {
    const ctx = infinityCanvas.getContext('2d');
    let width, height;

    function resizeInfinityCanvas() {
      width = infinityCanvas.parentElement.clientWidth;
      height = infinityCanvas.parentElement.clientHeight;
      infinityCanvas.width = width;
      infinityCanvas.height = height;
    }
    resizeInfinityCanvas();
    window.addEventListener('resize', resizeInfinityCanvas);

    // Particles moving along infinity lemniscate: x = a*cos(t)/(1+sin^2(t)), y = a*sin(t)*cos(t)/(1+sin^2(t))
    const particleCount = 28;
    const trails = [];

    for (let i = 0; i < particleCount; i++) {
      trails.push({
        t: (i / particleCount) * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.004,
        size: 2 + Math.random() * 2.5,
        color: i % 2 === 0 ? '#00ff66' : '#ffffff'
      });
    }

    function renderInfinityTrails() {
      ctx.clearRect(0, 0, width, height);

      const a = Math.min(width * 0.35, 180);
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw faint base guide curve
      ctx.beginPath();
      for (let theta = 0; theta <= Math.PI * 2; theta += 0.04) {
        const sin = Math.sin(theta);
        const cos = Math.cos(theta);
        const denom = 1 + sin * sin;
        const x = centerX + (a * cos) / denom;
        const y = centerY + (a * sin * cos) / denom;
        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(0, 255, 102, 0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw glowing moving light trail particles
      trails.forEach((p) => {
        p.t += p.speed;
        if (p.t > Math.PI * 2) p.t -= Math.PI * 2;

        const sin = Math.sin(p.t);
        const cos = Math.cos(p.t);
        const denom = 1 + sin * sin;
        const x = centerX + (a * cos) / denom;
        const y = centerY + (a * sin * cos) / denom;

        // Glowing particle head
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#00ff66';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(renderInfinityTrails);
    }
    renderInfinityTrails();
  }

  // ==========================================================================
  // 7. Act 5: Challenge Chips Interaction
  // ==========================================================================
  const challengeChips = document.querySelectorAll('.challenge-chip');
  challengeChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      challengeChips.forEach(c => {
        c.style.borderColor = 'rgba(0, 255, 102, 0.25)';
        c.style.boxShadow = 'none';
      });
      chip.style.borderColor = '#00ff66';
      chip.style.boxShadow = '0 0 25px rgba(0, 255, 102, 0.55)';
    });
  });

  // ==========================================================================
  // 8. Act 6: Analytics Cat & Metrics Cards Tilt
  // ==========================================================================
  const metricCards = document.querySelectorAll('.metric-glass-card');
  if (!isTouchDevice) {
    metricCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(600px) rotateX(${-(y / 15)}deg) rotateY(${x / 15}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // ==========================================================================
  // 9. Act 7: Practical Experience Station Switcher with Purple Wave Portal
  // ==========================================================================
  const stationTabs = document.querySelectorAll('.station-tab');
  const stationPanels = document.querySelectorAll('.station-panel');
  const wavePortalModal = document.getElementById('wave-portal-modal');

  stationTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetStation = tab.getAttribute('data-station');

      // Check if already active
      if (tab.classList.contains('active')) return;

      // Flash Purple Wave Portal Warp
      if (wavePortalModal) {
        wavePortalModal.classList.add('active');
        setTimeout(() => {
          // Switch tabs and panels
          stationTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          stationPanels.forEach(p => p.classList.remove('active'));

          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');

          const activePanel = document.getElementById(`station-${targetStation}`);
          if (activePanel) activePanel.classList.add('active');

          setTimeout(() => {
            wavePortalModal.classList.remove('active');
          }, 350);
        }, 500);
      } else {
        // Direct switch fallback
        stationTabs.forEach(t => t.classList.remove('active'));
        stationPanels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`station-${targetStation}`).classList.add('active');
      }
    });
  });

  // Pipeline Step Interactivity
  const pipelineSteps = document.querySelectorAll('.pipeline-step-item');
  pipelineSteps.forEach((step) => {
    step.addEventListener('click', () => {
      const parent = step.closest('.pipeline-flow-list');
      if (parent) {
        parent.querySelectorAll('.pipeline-step-item').forEach(s => s.classList.remove('active'));
      }
      step.classList.add('active');
    });
  });

  // ==========================================================================
  // 10. Immersive 3-Discipline Case Study Modals (Prompt Section 20)
  //     - TV Repair Google Ads Case Study
  //     - Blogwithhim.Online SEO Case Study
  //     - Meta Ads Lead Gen Funnel Case Study
  // ==========================================================================
  const openCaseButtons = document.querySelectorAll('.btn-open-case');
  const caseModals = document.querySelectorAll('.case-study-modal');

  function openCaseStudyModal(caseType) {
    const modalId = `modal-case-${caseType}`;
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('open');
      targetModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllCaseModals() {
    caseModals.forEach((modal) => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  openCaseButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseType = btn.getAttribute('data-case');
      if (caseType) {
        openCaseStudyModal(caseType);
      }
    });
  });

  caseModals.forEach((modal) => {
    const closeBtn = modal.querySelector('.case-modal-close');
    const backdrop = modal.querySelector('.case-modal-backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', closeAllCaseModals);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeAllCaseModals);
    }
  });

  // ==========================================================================
  // 11. Act 8: Skills Command Center Engine (Prompt Sections 11-15)
  //     - 3-System Switcher (Google Ads, SEO, Meta Ads)
  //     - Interactive Match Types Simulator
  //     - Negative Keywords Defense Shield
  //     - Real-Time HUD Skill Inspector
  // ==========================================================================
  const cmdTabs = document.querySelectorAll('.cmd-tab-btn');
  const cmdPanels = document.querySelectorAll('.command-system-panel');

  cmdTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const system = tab.getAttribute('data-system');
      if (!system || tab.classList.contains('active')) return;

      cmdTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      cmdPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(`sys-panel-${system}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Interactive Match Types Simulator
  const matchButtons = document.querySelectorAll('.btn-match');
  const matchQuery = document.getElementById('cmd-match-query');
  const matchBehavior = document.getElementById('cmd-match-behavior');

  const matchData = {
    exact: {
      query: '[emergency tv repair delhi]',
      behavior: '<span class="status-pass"><i class="fa-solid fa-check"></i> Triggers:</span> Exact query intent only with same meaning. Maximum commercial relevance, zero wasteful spend.'
    },
    phrase: {
      query: '"tv repair near me"',
      behavior: '<span class="status-pass"><i class="fa-solid fa-check"></i> Triggers:</span> Searches that include the core phrase meaning. Flexible volume while preserving commercial intent.'
    },
    broad: {
      query: 'tv repair technician',
      behavior: '<span class="status-warn"><i class="fa-solid fa-triangle-exclamation"></i> Triggers:</span> Wide variations, related searches & questions. High reach, but requires aggressive negative keyword defense.'
    }
  };

  matchButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      matchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.getAttribute('data-type');
      if (type && matchData[type] && matchQuery && matchBehavior) {
        matchQuery.style.opacity = '0';
        matchBehavior.style.opacity = '0';
        setTimeout(() => {
          matchQuery.textContent = matchData[type].query;
          matchBehavior.innerHTML = matchData[type].behavior;
          matchQuery.style.opacity = '1';
          matchBehavior.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Negative Keywords Defense Shield Interactivity
  const negTags = document.querySelectorAll('.neg-tag');
  negTags.forEach((tag) => {
    tag.addEventListener('click', () => {
      tag.style.transform = 'scale(0.95)';
      tag.style.borderColor = '#ffffff';
      tag.style.color = '#ffffff';
      setTimeout(() => {
        tag.style.transform = '';
        tag.style.borderColor = '';
        tag.style.color = '';
      }, 300);
    });
  });

  // Real-Time Interactive HUD Skill Inspector
  const skillPills = document.querySelectorAll('.skill-node-pill');
  const hudName = document.getElementById('hud-name');
  const hudDesc = document.getElementById('hud-desc');
  const hudFrame = document.getElementById('skills-hud');

  function updateHUD(name, desc) {
    if (hudName && hudDesc) {
      hudName.textContent = name;
      hudDesc.textContent = desc;
      if (hudFrame) {
        hudFrame.style.boxShadow = '0 0 35px rgba(0, 255, 102, 0.45)';
        setTimeout(() => { hudFrame.style.boxShadow = ''; }, 400);
      }
    }
  }

  skillPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      skillPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const name = pill.getAttribute('data-skill');
      const desc = pill.getAttribute('data-info');
      if (name && desc) updateHUD(name, desc);
    });

    pill.addEventListener('mouseenter', () => {
      const name = pill.getAttribute('data-skill');
      const desc = pill.getAttribute('data-info');
      if (name && desc) updateHUD(name, desc);
    });
  });

  // Social Ad CTA Simulation
  const adCtaBtn = document.querySelector('.btn-ad-cta');
  if (adCtaBtn) {
    adCtaBtn.addEventListener('click', () => {
      const originalText = adCtaBtn.textContent;
      adCtaBtn.textContent = 'Instant Form Loaded ✓';
      adCtaBtn.style.background = '#28a745';
      setTimeout(() => {
        adCtaBtn.textContent = originalText;
        adCtaBtn.style.background = '';
      }, 1500);
    });
  }

  // ==========================================================================
  // 11. Act 10: 3D Rotating Toolkit Cards
  // ==========================================================================
  const toolCards = document.querySelectorAll('.tool-3d-card');
  if (!isTouchDevice) {
    toolCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotY = (x / (rect.width / 2)) * 12;
        const rotX = -(y / (rect.height / 2)) * 12;
        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // ==========================================================================
  // 12. Act 11: Soft Skills Interactive Constellation Canvas
  // ==========================================================================
  const constellationCanvas = document.getElementById('constellation-canvas');
  if (constellationCanvas) {
    const ctx = constellationCanvas.getContext('2d');
    let cWidth, cHeight;

    function resizeConstellation() {
      cWidth = constellationCanvas.parentElement.clientWidth;
      cHeight = constellationCanvas.parentElement.clientHeight;
      constellationCanvas.width = cWidth;
      constellationCanvas.height = cHeight;
    }
    resizeConstellation();
    window.addEventListener('resize', resizeConstellation);

    // 8 anchor nodes corresponding to the soft skill pills
    const pillElements = document.querySelectorAll('.c-pill');
    let mousePos = { x: -1000, y: -1000 };

    constellationCanvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = constellationCanvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
    });

    constellationCanvas.parentElement.addEventListener('mouseleave', () => {
      mousePos.x = -1000;
      mousePos.y = -1000;
    });

    function getPillPositions() {
      const positions = [];
      pillElements.forEach((pill) => {
        const rect = pill.getBoundingClientRect();
        const parentRect = constellationCanvas.parentElement.getBoundingClientRect();
        positions.push({
          x: rect.left - parentRect.left + rect.width / 2,
          y: rect.top - parentRect.top + rect.height / 2
        });
      });
      return positions;
    }

    function renderConstellation() {
      ctx.clearRect(0, 0, cWidth, cHeight);
      const points = getPillPositions();

      // Connect points with glowing lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 260) {
            const alpha = 1 - (dist / 260);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(0, 255, 102, ${alpha * 0.35})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Proximity line to mouse cursor
        const mdx = points[i].x - mousePos.x;
        const mdy = points[i].y - mousePos.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 180) {
          const mAlpha = 1 - (mDist / 180);
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${mAlpha * 0.65})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      requestAnimationFrame(renderConstellation);
    }
    renderConstellation();
  }

  // ==========================================================================
  // 13. Fullscreen Lightbox Proof Inspector
  // ==========================================================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  const proofCards = document.querySelectorAll('.proof-img-wrap, .proof-thumb-box, .proof-display-frame');
  proofCards.forEach((wrap) => {
    wrap.addEventListener('click', () => {
      const img = wrap.querySelector('img') || (wrap.tagName === 'IMG' ? wrap : null);
      if (img && lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = img.alt || 'Authoritative Campaign Proof Screenshot';
        }
        lightboxModal.classList.add('open');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // Cinema Video Showcase Modal Controller
  const heroCinemaModal = document.getElementById('hero-cinema-modal');
  const cinemaVideoElement = document.getElementById('cinema-video-element');
  const cinemaCloseBtn = document.getElementById('cinema-close-btn');
  const cinemaBackdrop = document.getElementById('cinema-backdrop');
  const btnHeroVideoPlay = document.getElementById('btn-hero-video-play');

  function openCinemaModal() {
    if (!heroCinemaModal) return;
    if (heroBgVideo && !heroBgVideo.paused) {
      heroBgVideo.pause();
    }
    heroCinemaModal.classList.add('open');
    heroCinemaModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (cinemaVideoElement) {
      cinemaVideoElement.currentTime = 0;
      cinemaVideoElement.play().catch(() => {});
    }
  }

  function closeCinemaModal() {
    if (!heroCinemaModal) return;
    heroCinemaModal.classList.remove('open');
    heroCinemaModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (cinemaVideoElement) {
      cinemaVideoElement.pause();
    }
    if (heroBgVideo && heroBgVideo.paused) {
      heroBgVideo.play().catch(() => {});
    }
  }

  if (btnHeroVideoPlay) {
    btnHeroVideoPlay.addEventListener('click', openCinemaModal);
  }
  if (cinemaCloseBtn) {
    cinemaCloseBtn.addEventListener('click', closeCinemaModal);
  }
  if (cinemaBackdrop) {
    cinemaBackdrop.addEventListener('click', closeCinemaModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeCinemaModal();
      closeAllCaseModals();
    }
  });

  // ==========================================================================
  // 14. Fast Contact Dispatcher Form
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const msgInput = document.getElementById('contact-msg');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const msg = msgInput ? msgInput.value.trim() : '';

      if (formFeedback) {
        formFeedback.innerHTML = `<span style="color: #00ff88;"><i class="fa-solid fa-circle-check"></i> Thank you ${name}! Launching your mail client to reach saxenaabhishek003@gmail.com...</span>`;
      }

      // Generate mailto link
      const subject = encodeURIComponent(`Digital Marketing Opportunity from ${name}`);
      const body = encodeURIComponent(`Hi Abhishek,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n\nSent from Portfolio Command Center`);
      window.location.href = `mailto:saxenaabhishek003@gmail.com?subject=${subject}&body=${body}`;

      contactForm.reset();
    });
  }

  // ==========================================================================
  // 15. Scroll Progress, Navbar & Mobile Drawer
  // ==========================================================================
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link update
    let currentSectionId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    }

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

})();
