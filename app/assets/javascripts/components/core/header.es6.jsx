
class Header extends React.Component {

    isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    }

    renderDesktop() {
        return (
            <header className='header-container'>
                <div className='site-name'>
                    <a href='home'>{this.props.title} <i className="fa fa-gg"></i></a>
                </div>
                {this.renderLinks()}
            </header>
        )
    }

    renderMobile() {
        return (
            <header className='header-container'>
                <div className='site-name'>
                    <a href='home'>{this.props.title} <i className="fa fa-gg"></i></a>
                </div>
            </header>
        )
    }

    renderLinks() {
        const links = _.map(this.props.items, (item, key) => {
            return (
                <li key={key}><a href={item.href}>{item.label}</a></li>
            )
        })
        return (
            <ul className="menu menu-hover-lines">
                {links}
            </ul>
        )
    }

    render () {
        const menu = this.isMobile() ? this.renderMobile() : this.renderDesktop() ;
        return menu
    }
}

Header.propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.object
};
