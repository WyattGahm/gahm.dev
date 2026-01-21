class BlogPost extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                
                .post-container {
                    background: rgba(31, 41, 55, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 1rem;
                    padding: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .post-title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                .post-meta {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    color: rgba(156, 163, 175, 1);
                    font-size: 0.9rem;
                }
                
                .post-content {
                    line-height: 1.6;
                    color: rgba(209, 213, 219, 1);
                }
                
                .post-content p {
                    margin-bottom: 1.5rem;
                }
                
                .post-content img {
                    max-width: 100%;
                    border-radius: 0.5rem;
                    margin: 1.5rem 0;
                    border: 1px solid rgba(55, 65, 81, 0.5);
                }
                
                .code-block {
                    background: rgba(17, 24, 39, 0.7);
                    border-radius: 0.5rem;
                    padding: 1rem;
                    margin: 1.5rem 0;
                    overflow-x: auto;
                    border: 1px solid rgba(55, 65, 81, 0.5);
                    font-family: 'Courier New', monospace;
                }
                
                @media (max-width: 768px) {
                    :host {
                        padding: 1rem;
                    }
                    
                    .post-container {
                        padding: 1.5rem;
                    }
                    
                    .post-title {
                        font-size: 2rem;
                    }
                }
            </style>
            
            <div class="post-container">
                <h1 class="post-title"><slot name="title">Post Title</slot></h1>
                <div class="post-meta">
                    <span><i data-feather="calendar"></i> <slot name="date">June 1, 2023</slot></span>
                    <span><i data-feather="clock"></i> <slot name="read-time">5 min read</slot></span>
                </div>
                <div class="post-content">
                    <slot name="content">Post content goes here...</slot>
                </div>
            </div>
        `;
    }
}

customElements.define('blog-post', BlogPost);