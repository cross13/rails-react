class Footer extends React.Component {
    render () {
        return (
            <footer className="marketing-site-footer">
                <div className="row medium-unstack">
                    <div className="medium-4 columns">
                        <h4 className="marketing-site-footer-name">Yeti Snowcone</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
                        <ul className="menu marketing-site-footer-menu-social simple">
                            <li><a><i className="fa fa-youtube-square"></i></a></li>
                            <li><a><i className="fa fa-facebook-square"></i></a></li>
                            <li><a><i className="fa fa-twitter-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="medium-4 columns">
                        <h4 className="marketing-site-footer-title">Contact Info</h4>
                        <div className="marketing-site-footer-block">
                            <i className="fa fa-map-marker"></i>
                            <p>100 W Rincon<br />San Francisco, CA 94015</p>
                        </div>
                        <div className="marketing-site-footer-block">
                            <i className="fa fa-phone"></i>
                            <p>1 (800) 555-5555</p>
                        </div>
                        <div className="marketing-site-footer-block">
                            <i className="fa fa-envelope-o"></i>
                            <p>yetirules@fakeemail.com</p>
                        </div>
                    </div>
                    <div className="medium-4 columns">
                        <h4 className="marketing-site-footer-title">Instagram</h4>
                        <div className="row small-up-3">
                            <div className="column column-block">
                                <img src="http://placehold.it/75" alt="" />
                            </div>
                            <div className="column column-block">
                                <img src="http://placehold.it/75" alt="" />
                            </div>
                            <div className="column column-block">
                                <img src="http://placehold.it/75" alt="" />
                            </div>
                            <div className="column column-block">
                                <img src="http://placehold.it/75" alt="" />
                            </div>
                            <div className="column column-block">
                                <img src="http://placehold.it/75" alt="" />
                            </div>
                            <div className="column column-block">
                                <img src="http://placehold.it/75" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="marketing-site-footer-bottom">
                    <div className="row large-unstack align-middle">
                        <div className="column">
                            <p>&copy; 2017 No rights reserved</p>
                        </div>
                        <div className="column">
                            <ul className="menu marketing-site-footer-bottom-links hide-for-small-only">
                                <li><a>Home</a></li>
                                <li><a>About</a></li>
                                <li><a>Services</a></li>
                                <li><a>Works</a></li>
                                <li><a>News</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    contact: React.PropTypes.object
};
