import React, { Component } from 'react'
import { RaisedButton, TextField } from 'material-ui'
import './DonationPage.css'
import Payment from 'payment';
import Cards from 'react-credit-cards';

class DonationPage extends Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: '',
    }

    componentDidMount() {
        Payment.formatCardNumber(document.querySelector('[name="number"]'));
        Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
        Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
    }


    // onCardChange = (paymentForm) => {
    //     var field = document.querySelector('[name="payment.cardNumber"]');
    //     field.addEventListener('keypress', event => {
    //         let key = event.keyCode;
    //         if (key === 32) {
    //             event.preventDefault();
    //         }
    //     });
    //     this.setState({ paymentForm })
    //     console.log(this.state.paymentForm)
    // }

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            this.setState({
                [target.name]: target.value.replace(/ /g, ''),
            });
        }
        else if (target.name === 'expiry') {
            this.setState({
                [target.name]: target.value.replace(/ |\//g, ''),
            });
        }
        else {
            this.setState({
                [target.name]: target.value,
            });
        }
    };

    handleCallback(type, isValid) {
        console.log(type, isValid); //eslint-disable-line no-console
    }

    render() {
        const campaignName = this.props.match.params.id
        const { name, number, expiry, cvc, focused } = this.state;
        return (
            <section>
                <h2 className="text-center">Donar a {campaignName}</h2>
                <div className="donation-body">
                    <div className="donation-left">
                        <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                            callback={this.handleCallback}
                        />
                    </div>
                    <div className="donation-right">
                        <div>
                            <TextField
                                name="number"
                                floatingLabelText="Número de tarjeta"
                                hintText="Ej. 5111 1234 5678 9001"
                                floatingLabelFixed={true}
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div>
                            <TextField
                                name="name"
                                floatingLabelText="Nombre de la tarjeta."
                                hintText="Ej. Juan Sánchez"
                                floatingLabelFixed={true}
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div>
                            <TextField
                                name="expiry"
                                floatingLabelText="Fecha de expiración."
                                hintText="Ej. 02/2020"
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <TextField
                                name="cvc"
                                floatingLabelText="Código de seguridad CVV"
                                hintText="Ej. 123"
                                floatingLabelFixed={true}
                                onKeyUp={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <RaisedButton
                            primary
                            onSubmit={() => alert(this.state)}
                            label="Donar"
                        />
                    </div>
                </div>


            </section>
        )
    }
}


export default DonationPage