class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
        }
        nav {
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 2rem;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: bold;
          font-size: 1.25rem;
          color: white;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          color: rgba(209, 213, 219, 1);
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-links a:hover {
          color: rgba(167, 139, 250, 1);
        }
        .nav-links i {
          width: 16px;
          height: 16px;
        }
      </style>
      <nav>
        <div class="nav-container">
          <a href="/" class="logo">gahm.dev</a>
          <div class="nav-links">
            <a href="index.html"><i data-feather="home"></i> Home</a>
            <a href="#"><i data-feather="book"></i> Blog</a>
            <a href="#projects"><i data-feather="folder"></i> Projects</a>
            <a href="#contact"><i data-feather="mail"></i> Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);