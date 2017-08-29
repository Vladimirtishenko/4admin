import React from 'react';
import ReactDOM from 'react-dom';

class UserForm extends React.Component {


    lableUp(event){
        var label =  event.target.previousElementSibling;
        if(!label.classList.contains("site-inputs-label-to-top")) {
            label.className += " site-inputs-label-to-top";
        }
    }
    labelDown(event){
        var input = event.target;
        if(input.value == ""){
            input.previousElementSibling.classList.remove("site-inputs-label-to-top");
        }
    }

    render () {
        return (
            <div>
                <div className="container-fluid site-user-form">
                    <div className="row site-row-md-revers">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="site-user-form__form-wrapper">
                                <div className="site-user-form__title">
                                    <h4 className="site-user-form__title-head">Edit Profile</h4>
                                    <p className="site-user-form__title-description">Complete your profile</p>
                                </div>
                                <div className="row margin-t-5">
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="site-user-form-input-wrapper">
                                            <label className="site-inputs-label">Fist Name</label>
                                            <input onFocus={this.lableUp} onBlur={this.labelDown}
                                                   className="site-bouncing-input site-underline-input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="site-user-form-input-wrapper">
                                            <label className="site-inputs-label">Last Name</label>
                                            <input onFocus={this.lableUp} onBlur={this.labelDown}
                                                   className="site-bouncing-input site-underline-input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="site-user-form-input-wrapper">
                                            <label className="site-inputs-label">E-mail</label>
                                            <input onFocus={this.lableUp} onBlur={this.labelDown}
                                                   className="site-bouncing-input site-underline-input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="site-user-form-input-wrapper">
                                            <label className="site-inputs-label">Position</label>
                                            <input onFocus={this.lableUp} onBlur={this.labelDown}
                                                   className="site-bouncing-input site-underline-input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="site-user-form-input-wrapper">
                                            <label className="site-inputs-label">Role</label>
                                            <input onFocus={this.lableUp} onBlur={this.labelDown}
                                                   className="site-bouncing-input site-underline-input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="site-user-form-input-wrapper">
                                            <label className="site-inputs-label">Superpower</label>
                                            <input onFocus={this.lableUp} onBlur={this.labelDown}
                                                   className="site-bouncing-input site-underline-input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="site-user-form__btn-wrapper">
                                    <button className="site-user-form__btn-wrapper-button">UPDATE PROFILE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 ">
                            <div className="site-user-form__card">
                                <div className="site-user-form__card-wrapper">
                                    <label className="site-user-form__card-label"
                                           htmlFor="site-user-form__card-input">
                                        <img src="http://demos.creative-tim.com/material-kit-pro/assets/img/faces/marc.jpg"
                                             alt="profile avatar" className="site-user-form__card-avatar"/>
                                        <i className="material-icons site-user-form__card-icon">file_upload</i>
                                    </label>
                                    <input type="file" id="site-user-form__card-input"/>
                                    <div className="clear"></div>
                                </div>
                                <h4 className="site-user-form__card-mail">some-mail@gmail.com</h4>
                                <p className="site-user-form__card-name">
                                    <span className="site-user-form__card-name-first">Alec</span>
                                    <span className="site-user-form__card-name-second">Thompson</span></p>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <p className="site-user-form__card-position">Position</p>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <p className="site-user-form__card-role">Role</p>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>


            </div>
        );
    }

}


export default UserForm;