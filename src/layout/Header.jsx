function Header() {
    return (
        <nav className="deep-purple darken-2">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    React Movies
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Кино и поиск</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
