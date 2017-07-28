class Services extends React.Component {

    constructor(props) {
        super(props)
    }

    renderItems() {
        if (!this.props.services || this.props.services.length === 0) {
            return ''
        }

        const items = this.props.services.map((item, index) =>{
            return <ServiceItem item={item} index={index} key={index}></ServiceItem>
        });

        return (
            <div className="row medium-unstack">
                {items}
            </div>
        )
    }

    render () {
        return (
            <section className="marketing-site-three-up">
                <h2 className="marketing-site-three-up-headline">{this.props.title}</h2>
                {this.renderItems()}
            </section>
        );
    }
}

Services.propTypes = {
    title: React.PropTypes.string,
    services: React.PropTypes.array
};
