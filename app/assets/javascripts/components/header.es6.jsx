class Header extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string
};
