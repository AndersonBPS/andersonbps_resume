const Header = ({ name }) => {
    return (
        <header>
            <div>
                <h1>{name}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    name: "Your Name Here"
}

export default Header
