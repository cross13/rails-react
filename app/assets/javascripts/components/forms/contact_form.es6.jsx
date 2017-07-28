class ContactForm extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.state = {
            subject: '',
            email: '',
            message: '',
            loading: false,
            formSended: false,
            error: false
        }
    }

    handleChange(event) {
         this.setState({
             [event.target.name]: event.target.value
         })
    }


    sendMessage(event) {
        event.preventDefault()
        const { subject, email, message } = this.state
        this.setState({ loading: true, error: false })
        let self = this
        axios.post('/contact', {
            subject: subject,
            email: email,
            content: message
        })
        .then(function (response) {
            self.setState({ loading: false, formSended: true })
        })
        .catch(function (error) {
            self.setState({ loading: false, formSended: false, error: true})
        });
    }

    renderForm() {
        return (
            <form className="contact-us-form">
                <input type="text" placeholder="Subject" name='subject' value={this.state.subject} onChange={this.handleChange}/>
                <input type="email" placeholder="Email" name='email' value={this.state.email} onChange={this.handleChange} />
                <textarea name="message" id="" rows="12" placeholder="Type your message here" name='message' value={this.state.message} onChange={this.handleChange}></textarea>
                <div className="contact-us-form-actions">
                    <input onClick={this.sendMessage} type="submit" className="button" value="Send it" />
                </div>
            </form>
        )
    }

    render () {
        return (
            <section className="contact-us-section">
                <div className="row medium-unstack">
                    <div className="columns small-12 medium-6 contact-us-section-left">
                        <h1 className="contact-us-header">Get In Touch</h1>
                        <ul className="contact-us-list">
                            <li className="address">Rosario, Santa Fe - Argentina  2000</li>
                            <li className="email"><a href="mailto:">blackbox.software@gmail.com</a></li>
                            <li className="phone">
                            --- no phone
                            </li>
                        </ul>
                    </div>
                    <div className="columns small-12 medium-6 contact-us-section-right">
                        <h1 className="contact-us-header">Mail Us</h1>
                        {this.renderForm()}
                    </div>
                </div>
            </section>
        )
    }
}
