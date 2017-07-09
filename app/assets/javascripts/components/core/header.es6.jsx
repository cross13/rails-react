
class Header extends React.Component {
    render () {
        return (
            <header className='header-container'>
                <div className='site-name'>
                    {this.props.title} <i className="fa fa-gg"></i>
                </div>
                <ul className="menu menu-hover-lines">
                    <li><a href="#">Meet the Team</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
        );
    }
}

Header.propTypes = {
    title: React.PropTypes.string
};
