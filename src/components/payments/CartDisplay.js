/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {RaisedButton, CircularProgress} from 'material-ui'

const images = {
    visa:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAOCAYAAABZ/o57AAAAAXNSR0IArs4c6QAABLJJREFUSA2tVk1sVFUUPue+9+ZHZ94wibWmBTL2tSCVxBjF8LOQhUsWmmriQsPCNGFDGlphYYiZBGOt2EwLJhhjUNxIohsShVaDRhMrMUGjFVDT6Q8goRqhPzOlPzPv+p335s5MBVZ6knfP7z333PNzZziWyWVIl5jqwLapWMjv/7NOFJJN2Xti0USDkS9O/H4t3uw12vHIOpH5ZX+hONHzk9EHOJONJfxEi7KdDHHZ98m6WsjfvEiU9VfZCdPyRipO8ZSQt4rLf9P0/qLQAiqiVHvEiRyKOpGf8Y3LZ3FkOtU6cDw0qa1ufE1v1HIm5Yso5xxRE9ux6EFFakQ+y7LfNNap9b3plJfrS9npaSviXGBFnzFbZyym0ZSXHjZ2BrvewLGUis9EFE3J5yadA0YnWM2Nd52eG+t6YXbhZmNZ65Oa9LIotKbddF9fUugAkBkmftGwMDiGrCyjFJurMp9+CeiGbEI78WFiJYe5Vb0hWE8ZUrCb6d/KzHvqZaC31fOqylzLLljEb5HmeU2Ux0aVSNmPG72rUh3ElBYe+iWfV94RGsFXA4U8CDTppvZg/xbRAwo++Z3oiy0ln57ytT5Q9vXpUBWubNs99bzQrPkJJKIan11vMJvv+sFtHfRZ6yaYTjHZcthXwUalOqu22j8pPRz3+tch0qCnAhvSQaCKeIexRYWuzI/NfijZr8jOGp1gmRFU7xmWKdH6MvxZOLtZ/Ca8dHshH16+GnFlM5KiUTKOg3CZ9SMiT7b0bwB6smJDpZI/KLRDqpZNRDRXXLkY2vCYsUXGN7leejTRMtBhZPU4YnMXgkRwOJnpAyD0fghMulr+fweK0dVDYobNaa11MM2K7Vo2SX+zMNXzo9jourLjUhNmSvVSuRdxXxIbAfjaYCn+xPUGv403960NpVgx5UjkS8LjLH+5XDrua/rO6BXX+vS2QP2FW5+jFEioHMDb4s1H1uKmu81m9FeQzUBfN0jYEw4SFHNXu2/MjeUfxdmH4GjJ7EXA251Y9EuivVGRJTmKBLAZ2C8WJ17GkOlqRpGIu2e0cP2Vv2B8XhyhbLYT06/j1uHbqWmqMD5ySnQCkNdKXxmkUCPr0aW5/L5XV3SpDZcIqiRSXL7NbfV2omdt9PJekQnA12Vk/HmQbYFAFk0b5ZkT8raMihBQ55iqTxKm922ij8uhSTCRm0I6uNRoQGdya4xM8K18zxUEcbBehjIX0LfPIur1VTlzJzL+kWL1vpGBZ+3Etgq/auqNASo/BJtVznG94nyZ3jM2bkvaQxrihsfPTFB611bD7A1iOPyzWvN19O4DaJ0OBBsAfN+Yz1/63vXac0EejYO7Yyn/mTsGOp8fOZfydszgxtXsoNdO0OS+GeMPh2+uHU4rhfyF36BDEvTDWO9FsR4DIyIpawBogUXt+08nH3xIHnjzzlK5VN5ZwnNYMaOIxbugPyo8kwr69I6BSnk1bUcv8i5kEjFiLdMRwQbQMw1Q/BrwWo8TvbtCjYcRIA1hh7yjjUHp5I+E5j+QyVPLZZ1bnOyexM/lCfTfbOhLny9Mdn8d0pU1k/s0avFrFf1GYHPXVWb/E5O1E97h+4meC97I/+r0H2FHmUxT7+LTAAAAAElFTkSuQmCC",
    masterCard:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAUCAYAAAB1aeb6AAAAAXNSR0IArs4c6QAABABJREFUSA2VlW1ollUYx3/3NqduavlSyy3TTNecLy1RyxXMhBl9iJFazrcIIjKhzH2Q8MMMkdbLB0n60AsUZUQg+EItNPBjTjBMRytCnVubiZuxTXHNbe7ud/bwPDhm7dkFF+c+53r7n/+5zrkj/kNiiDQtUB9QJ6pX1HoX/3a8o8TfkEcmxWQ4xlxngGYqaTDGdMMlFBgiek1z4S11gzp9iBHTQZ36gYFHkrb4AM+bfrtwH3dtaM6YS658TS/vRRvpSMaEcYijhde49rk6KRhHkGM8y5ts5mOzlI3gG/beIfQXo0q+T/qmilt4q4sfqam1pNMdx4h2auhjFvlSnZ7Elo95JVo3uMFEIQuvNPpHNd00A2SbJkP/h43aqWao6Ugs4JinBPBTZOEsY35VQ5r0pJAT7KA05TzGr5zUbOSPmLP8xuJQfJ3e344ckfIY4C6xR7exdI+2d1L29D5iKsKuVzNvHpSX22r22qZN0NQER48OT5KbC1MnNLLjypxhxpuu3LdMfRrajnshTwxzSS3Mtr0ufvJc2Hkj1dUPsmuXMFbDwYOwd69n6CGGYnv2wNq1sHAhXLjgffBCrF8PVVVw3CKtrbDMoouuwsYPoXm/hetgymMeqGdx3h7Or4DO03D3Yui/7gF7k2vzGzLfhnfZujWLMR5cXp4BklFbK6RGWLUKiopgyxaoqYEVK6ChwQazw+osUF0NN91yZaVAvZ03vtOurftPW1fgecZPmAuzX/WF6JU1AY0vEECX7H6VFXq0h/nz4bTIZs6Evj4o0GHbtsRYXw8nTybm4XgOHYI5sh6YCDsvLobduwUt+O4m0yn3vwBzjQ+FMsfBJdnMMXfjp9BxCq79Hrx6MsjObmW6D9m5c3D4cCJxfr40dYp0KsyYAe3tMHlyYl5WlqC/pycREwCdOQN/GFuyD0rd/RSPobcDxk6zuNR3au9Si2Vq7na4bq3MiX9FcU7OPtG/TlubtN2AwsIEtWFHYR4kgDsl4gCqvz8m93LEo6Xu6KKF7oVfbK43bpl4aWKnnWd9I43vNz6SkX9aZLRL3yWO1zwq+6Pvxvuh4TwI5HUUstkmncXsVIQEIcOjkPDUlAw+pQKQMypGEXyLRd7z5EO8xkjZT1vizAOXx5e8lCwun8ir73S6spyfWc4SigywHUYhzXSPf+J8V8HVJHafLEpM8IPqAacpj0j/TukPdyYdiWmhn2eiDTQE91SYKGxH7JhBAMH2f9Kp8bXoLA85VoncLhpRjlh4abJw8E7t/PZQWXjSue8s5ap3DVt2sEAA6F3iMwNt34TEXzLVH8vLzioEssCskxx7nbc4HlP3+x8fXVOH1AIJN2Js+E5X4i8YF+JG8v8X5UMlkwCffwoAAAAASUVORK5CYII=",
    generic: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDYwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMTAsLmNscy0xMSwuY2xzLTIsLmNscy02LC5jbHMtN3tmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0yLC5jbHMtNXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtNXtmaWxsOiNmZTg2NTc7fS5jbHMtMTAsLmNscy0xMSwuY2xzLTZ7c3Ryb2tlOiNmZTg2NTc7fS5jbHMtMTAsLmNscy02e3N0cm9rZS1saW5lY2FwOnJvdW5kO30uY2xzLTEwLC5jbHMtMTEsLmNscy02LC5jbHMtN3tzdHJva2UtbGluZWpvaW46cm91bmQ7fS5jbHMtNntzdHJva2Utd2lkdGg6NHB4O30uY2xzLTd7c3Ryb2tlOiNlMDZjM2U7fS5jbHMtMTEsLmNscy03e3N0cm9rZS1saW5lY2FwOnNxdWFyZTt9LmNscy0xMCwuY2xzLTExLC5jbHMtN3tzdHJva2Utd2lkdGg6MnB4O30uY2xzLTh7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTQpO30uY2xzLTl7ZmlsbDojZmZkYzgyO308L3N0eWxlPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xLDQ2VjE4YTUsNSwwLDAsMSw1LTVINTRhNSw1LDAsMCwxLDUsNVY0NmE1LDUsMCwwLDEtNSw1SDZBNSw1LDAsMCwxLDEsNDZabTIsMGEzLDMsMCwwLDAsMywzSDU0YTMsMywwLDAsMCwzLTNWMThhMywzLDAsMCwwLTMtM0g2YTMsMywwLDAsMC0zLDNWNDZaTS0xOSw3MUg3OVYtN0gtMTlWNzFaIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yLDQ2YTQsNCwwLDAsMCw0LDRINTRhNCw0LDAsMCwwLDQtNFYxOGE0LDQsMCwwLDAtNC00SDZhNCw0LDAsMCwwLTQsNFY0NloiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTksMjlhMiwyLDAsMCwwLDIsMkgyMmEyLDIsMCwwLDAsMi0yVjIzYTIsMiwwLDAsMC0yLTJIMTFhMiwyLDAsMCwwLTIsMnY2WiIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZS8+PGcgY2xhc3M9ImNscy0zIj48ZyBjbGFzcz0iY2xzLTQiPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTIsNDZhNCw0LDAsMCwwLDQsNEg1NGE0LDQsMCwwLDAsNC00VjE4YTQsNCwwLDAsMC00LTRINmE0LDQsMCwwLDAtNCw0VjQ2WiIvPjwvZz48L2c+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yLDQ2YTQsNCwwLDAsMCw0LDRINTRhNCw0LDAsMCwwLDQtNFYxOGE0LDQsMCwwLDAtNC00SDZhNCw0LDAsMCwwLTQsNFY0NloiLz48L2c+PGxpbmUgY2xhc3M9ImNscy03IiB4MT0iOSIgeDI9IjI4IiB5MT0iMzkiIHkyPSIzOSIvPjxsaW5lIGNsYXNzPSJjbHMtNyIgeDE9IjMyIiB4Mj0iNTEiIHkxPSIzOSIgeTI9IjM5Ii8+PGcgY2xhc3M9ImNscy04Ij48cmVjdCBjbGFzcz0iY2xzLTkiIGhlaWdodD0iMjAiIHdpZHRoPSIyNSIgeD0iNCIgeT0iMTYiLz48L2c+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTksMjlhMiwyLDAsMCwwLDIsMkgyMmEyLDIsMCwwLDAsMi0yVjIzYTIsMiwwLDAsMC0yLTJIMTFhMiwyLDAsMCwwLTIsMnY2WiIvPjxsaW5lIGNsYXNzPSJjbHMtMTEiIHgxPSIxOCIgeDI9IjE4IiB5MT0iMzEiIHkyPSIyMSIvPjxsaW5lIGNsYXNzPSJjbHMtMTEiIHgxPSI5IiB4Mj0iMTciIHkxPSIyNyIgeTI9IjI3Ii8+PGxpbmUgY2xhc3M9ImNscy0xMSIgeDE9IjE4IiB4Mj0iMjQiIHkxPSIyNSIgeTI9IjI1Ii8+PC9zdmc+"

};

export const CartDisplay = ({findLogo, logo, error, amount, rewardId, loading, fetched, submit, onChange}) => {
    return (
        <div>


            <form onSubmit={submit} id="form-container">
                {error && <div>Errores</div>}

                <input type="hidden" name="rewardId" value={rewardId}/>

                <div id="card-front">
                    <div id="shadow"></div>
                    <div id="image-container">
                        <span id="amount">Monto a pagar: {!fetched ?  <CircularProgress size={33} />:<strong>${amount}</strong>}</span>
                        <span id="card-image">
                            <img style={{maxWidth:"50px"}} src={images[logo]} alt="tipo de tarjeta"/>
                        </span>
                    </div>

                    <label for="card-number">
                        Número de tarjeta
                    </label>
                    <input name="number" required onChange={findLogo} type="text" id="card-number" placeholder="1234 5678 9101 1112" maxLength="16" minLength="16"/>
                        <div id="cardholder-container">
                            <label for="card-holder">Nombre de la tarjeta
                            </label>
                            <input onChange={onChange} name="name" required type="text" id="card-holder" placeholder="e.g. John Doe" />
                        </div>
                        <div id="exp-container">
                            <label for="card-exp">
                                Expiración
                            </label>
                            <input onChange={onChange} name="exp_month" required id="card-month" type="text" placeholder="MM" maxLength="2" minLength="2"/>
                                <input onChange={onChange} name="exp_year" required id="card-year" type="text" placeholder="AAAA" maxLength="4" minLength="4"/>
                        </div>
                        <div id="cvc-container">
                            <label for="card-cvc"> CVC/CVV</label>
                            <input onChange={onChange} name="cvc" required id="card-cvc" placeholder="XXX-X" type="text" minLength="3" maxLength="4"/>
                            <p>últimos 3 o 4 digitos</p>
                        </div>
                </div>
                <div id="card-back">
                    <div id="card-stripe"></div>
                </div>

                <input type="text" id="card-token" />
                <div id="card-btn">
                    <RaisedButton
                        type="submit"
                        label={loading ?  <CircularProgress size={33} />:"Pagar"}
                        disabled={loading}
                        secondary={true}
                    />
                </div>



            </form>
        </div>
        );
    };

// CartDisplay.propTypes = {
//
// };

CartDisplay.defaultProps = {
    monto:"0",
    logo:"generic",
    loading:false
};



