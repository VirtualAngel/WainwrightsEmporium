class Header {
    constructor() {
        this.render();
    }

    render() {
        const header = document.createElement('header');
        header.innerHTML = `
            <nav>
                <div class="logo">
                    <img src="Assets/Logos/whitelogowithtext.svg" alt="logo">
                </div>
                <ul class="nav-links">
                    <li><a href="#" class="button-nav">Home</a></li>
                    <li><a href="#" class="button-nav">About</a></li>
                </ul>
            </nav>
        `;
        document.body.insertBefore(header, document.body.firstChild);
    }
}

new Header();
