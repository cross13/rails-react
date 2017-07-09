class ServiceItem extends React.Component {
    render () {
        return (
            <div className="small-12 medium-4 columns" key={this.props.index}>
                <i className={this.props.item.logo}></i>
                <h4 className="marketing-site-three-up-title">{this.props.item.title}</h4>
                <p className="marketing-site-three-up-desc">{this.props.item.content}</p>
            </div>
        );
    }
}

ServiceItem.propTypes = {
    item: React.PropTypes.object,
    index: React.PropTypes.number
};
