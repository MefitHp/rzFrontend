import React, { Component } from 'react'
import './UserProfile.css'
import Feed from './Feed'

let inputBanner

function clickBanner() {
    inputBanner.click()
}

class UserProfile extends Component {
    state = {
        user: {
            bannerPhoto: ""
        }
    }

    handleImg = (e) => {
        let { user } = this.state;
        let field = e.target.name;

        user[field] = e.target.files[0];
        this.setState({ user });
        console.log(this.state.user.bannerPhoto);
    }
    render() {
        return (
            <div className="wrapper">
                <header className="profile-banner">
                    <i className="fa fa-camera" aria-hidden="true" title="Cambiar imagen de portada"
                        onClick={clickBanner}>
                        <input type='file' hidden ref={input => inputBanner = input} accept="image/*" name="bannerPhoto" onChange={this.handleImg} />
                    </i>

                </header>
                <div className="row">
                    <div className="info-section">
                        <div className="profile-container">
                            <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/39526443_10204606200150941_266868600390811648_n.jpg?_nc_cat=0&oh=10871406d70bb2de54b6e0a417770140&oe=5BF95C69" className="profile-picture" onClick={() => alert("Clicked")} />
                        </div>
                        <br />
                        <section>
                            <h3>David Zavala</h3>
                            <p>
                                <strong>Job: </strong> FixterGeek.
                            </p>
                        </section>
                    </div>
                    <div className="feed-section">
                        <Feed />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;
