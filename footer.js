class Footer {
    constructor() {
        this.render();
    }

    render() {
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <div class="footer-container">
                <img src="Assets\logos\dev-angela-light.svg" alt="Footer Logo">
                <p>&copy; 2024 Dev Angela. All rights reserved.</p>
            </div>
        `;
        document.body.appendChild(footer);
    }
}

new Footer();
