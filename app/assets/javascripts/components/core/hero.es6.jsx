class Hero extends React.Component {
  render () {
    return (
        <div className="marketing-site-hero">
            <div className="marketing-site-hero-content">
                <h1>{this.props.titlePrimary}</h1>
                <p className="subheader">
                    {this.props.description}
                </p>
                <a href="#" className="round button"> {this.props.contactLabel}
                    <i className={this.props.icon}></i>
                </a>
            </div>
        </div>
    );
  }
}

Hero.propTypes = {
  titlePrimary: React.PropTypes.string,
  description: React.PropTypes.string,
  icon: React.PropTypes.string,
  contactLabel: React.PropTypes.string
};
