# online-portfolio
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tarendra | Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-follower" id="cursor-follower"></div>

<!-- NAV -->
<nav id="navbar">
    <div class="logo">T<span class="logo-dot">.</span>HST</div>
    <ul class="nav-links" id="nav-links">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <div class="nav-social">
        <a href="https://www.linkedin.com/in/tarendra-h-s-6576b937b" target="_blank" class="nav-social-link" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/" target="_blank" class="nav-social-link" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a href="resume.pdf" download class="btn btn-primary nav-resume-btn">Resume ↓</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
    </button>
</nav>

<!-- HERO -->
<section id="home" class="hero">
    <canvas id="particle-canvas"></canvas>
    <div class="hero-content">
        <p class="hero-tag">&lt; Java Developer /&gt;</p>
        <h1 class="hero-name" data-text="TARENDRA">TARENDRA</h1>
        <p class="hero-sub">Crafting clean code &amp; bold experiences</p>
        <div class="hero-pills">
            <span>&#9749; Java</span>
            <span>&#127760; Web Dev</span>
            <span>&#129504; Problem Solver</span>
        </div>
        <div class="hero-btns">
            <a href="#projects" class="btn btn-primary">See My Work &#8599;</a>
            <a href="#contact" class="btn btn-ghost">Let's Talk</a>
            <a href="resume.pdf" download class="btn btn-ghost">Resume &#8595;</a>
        </div>
        <div class="hero-socials">
            <a href="https://www.linkedin.com/in/tarendra-h-s-6576b937b" target="_blank" class="hero-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" class="hero-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
            </a>
        </div>
    </div>
    <div class="hero-scroll-hint">scroll down &#8595;</div>
</section>

<!-- ABOUT -->
<section id="about" class="about">
    <div class="section-inner">
        <div class="about-layout">
            <div class="about-left fade-in">
                <p class="eyebrow">// about me</p>
                <h2>A developer who <em>loves</em> building things.</h2>
                <p class="about-desc">I'm Tarendra — a passionate Java developer and web enthusiast currently studying UI Design. I love turning ideas into real, functional, and beautiful projects.</p>
                <p class="about-desc">Currently in my 2nd semester, focused on crafting interfaces that feel as good as they look.</p>
                <a href="#contact" class="btn btn-primary" style="margin-top:28px;display:inline-flex;">Hire Me &#8599;</a>
            </div>
            <div class="about-right fade-in">
                <div class="about-img-wrap">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Code on dark monitor" class="about-img" />
                    <div class="about-img-badge">
                        <span class="badge-dot"></span> Available for projects
                    </div>
                </div>
                <div class="skills-box">
                    <p class="skills-title">// tech stack</p>
                    <div class="skill-bars">
                        <div class="skill-bar-item">
                            <span>Java</span>
                            <div class="bar"><div class="bar-fill" data-width="88%"></div></div>
                            <span class="pct">88%</span>
                        </div>
                        <div class="skill-bar-item">
                            <span>HTML &amp; CSS</span>
                            <div class="bar"><div class="bar-fill" data-width="82%"></div></div>
                            <span class="pct">82%</span>
                        </div>
                        <div class="skill-bar-item">
                            <span>JavaScript</span>
                            <div class="bar"><div class="bar-fill" data-width="70%"></div></div>
                            <span class="pct">70%</span>
                        </div>
                        <div class="skill-bar-item">
                            <span>UI Design</span>
                            <div class="bar"><div class="bar-fill" data-width="75%"></div></div>
                            <span class="pct">75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="projects">
    <div class="section-inner">
        <p class="eyebrow fade-in">// my work</p>
        <h2 class="fade-in">Projects that <span class="highlight">matter</span>.</h2>
        <div class="project-grid">

            <div class="project-card fade-in" onclick="openModal('bank')">
                <div class="card-header">
                    <span class="card-num">01</span>
                    <span class="card-glyph">&#11041;</span>
                </div>
                <h3>Bank Management System</h3>
                <p>Full-featured Java banking app with account creation, deposits, withdrawals, and transaction history — clean OOP architecture throughout.</p>
                <div class="card-tags"><span>Java</span><span>OOP</span><span>File I/O</span></div>
                <div class="card-click-hint">Click to view &#8594;</div>
            </div>

            <div class="project-card fade-in featured-card" onclick="openModal('quiz')">
                <div class="featured-badge">&#9733; Featured</div>
                <div class="card-header">
                    <span class="card-num">02</span>
                    <span class="card-glyph">&#11041;</span>
                </div>
                <h3>Online Quiz App</h3>
                <p>Dynamic quiz platform with countdown timer, score tracking, and multiple categories. Java backend, clean frontend experience.</p>
                <div class="card-tags"><span>Java</span><span>HTML</span><span>CSS</span><span>JS</span></div>
                <div class="card-click-hint">Click to view &#8594;</div>
            </div>

            <div class="project-card fade-in" onclick="openModal('portfolio')">
                <div class="card-header">
                    <span class="card-num">03</span>
                    <span class="card-glyph">&#11041;</span>
                </div>
                <h3>Portfolio Website</h3>
                <p>This very site — handcrafted with particle animations, glitch effects, scroll interactions, and form validation. Built from scratch.</p>
                <div class="card-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
                <div class="card-click-hint">Click to view &#8594;</div>
            </div>

        </div>
    </div>
</section>

<!-- CONTACT -->
<section id="contact" class="contact">
    <div class="section-inner">
        <p class="eyebrow fade-in">// contact</p>
        <h2 class="fade-in">Let's build something <span class="highlight">together</span>.</h2>
        <div class="contact-layout fade-in">
            <div class="contact-left">
                <p>Have a project in mind or just want to say hi? I always reply.</p>
                <div class="contact-links">
                    <a href="mailto:HSTPORTFOLIO@gmail.com" class="contact-pill">&#9993; HSTPORTFOLIO@gmail.com</a>
                    <a href="tel:+918870713902" class="contact-pill">&#128222; +91 8870713902</a>
                </div>
            </div>
            <form id="contact-form" class="contact-form" novalidate>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" />
                        <span class="error-msg" id="name-error"></span>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" />
                        <span class="error-msg" id="email-error"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="4" placeholder="What's on your mind?"></textarea>
                    <span class="error-msg" id="message-error"></span>
                </div>
                <button type="submit" class="btn btn-primary">Send Message &#8599;</button>
                <p class="form-success" id="form-success">&#9989; Message sent! I'll get back to you soon.</p>
            </form>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer>
    <div class="footer-inner">
        <p class="footer-logo">T<span>.</span>HST</p>
        <div class="footer-social">
            <a href="https://www.linkedin.com/in/tarendra-h-s-6576b937b" target="_blank" class="footer-social-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/" target="_blank" class="footer-social-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
        </div>
        <p>&copy; 2026 Tarendra. Designed &amp; Built with &#10084;&#65039;</p>
    </div>
</footer>

<!-- PROJECT MODAL -->
<div class="modal-overlay" id="modal-overlay">
    <div class="modal" id="modal">
        <div class="modal-header">
            <div>
                <p class="modal-eyebrow" id="modal-eyebrow"></p>
                <h3 class="modal-title" id="modal-title"></h3>
            </div>
            <button class="modal-close" id="modal-close">&#10005;</button>
        </div>
        <div class="modal-tabs">
            <button class="tab-btn active" id="tab-btn-demo">&#9654; Live Demo</button>
            <button class="tab-btn" id="tab-btn-code">&lt;/&gt; Source Code</button>
        </div>
        <div class="modal-body">
            <div class="tab-pane active" id="tab-demo">
                <div class="demo-frame" id="demo-frame"></div>
            </div>
            <div class="tab-pane" id="tab-code">
                <div class="code-toolbar">
                    <span class="code-lang" id="code-lang"></span>
                    <button class="copy-btn" id="copy-btn">Copy Code</button>
                </div>
                <pre class="code-block"><code id="code-content"></code></pre>
            </div>
        </div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
