import React from 'react';

class UpdatePageForm extends React.Component {


    lableUp(event){
        var label =  event.target.previousElementSibling;
        if(!label.classList.contains("site-inputs-label_to-top")) {
            label.className += " site-inputs-label_to-top";
        }
    }
    labelDown(event){
        var input = event.target;
        if(input.value == ""){
            input.previousElementSibling.classList.remove("site-inputs-label_to-top");
        }
    }

    render () {
        return (
            <div>
                <form className="site-pages-form padding-c-15 " id="Russian" style={{display: 'block'}}>
                    <div className="row margin-t-5">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="site-pages-form__input-wrapper">
                                <label className="site-inputs-label">Page name</label>
                                <input onFocus={this.lableUp} onBlur={this.labelDown}
                                       className="site-bouncing-input site-underline-input" type="text"/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="site-pages-form__input-wrapper">
                                <label className="site-inputs-label">Page lable</label>
                                <input onFocus={this.lableUp} onBlur={this.labelDown}
                                       className="site-bouncing-input site-underline-input" type="text"/>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="row margin-t-5">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="site-pages-form__input-wrapper">
                                <label className="site-textarea-label">Page text</label>
                                <textarea onFocus={this.lableUp} onBlur={this.labelDown}
                                       className="site-bouncing-textarea site-underline-input" type="text"/>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="site-pages-form__input-wrapper">
                                <label className="site-textarea-label">Page meta tags</label>
                                <textarea onFocus={this.lableUp} onBlur={this.labelDown}
                                       className="site-bouncing-textarea site-underline-input" type="text"/>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="row margin-t-5">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            <div className="site-pages-form__input-wrapper">
                                <label className="site-textarea-label">Page meta keywords</label>
                                <textarea onFocus={this.lableUp} onBlur={this.labelDown}
                                          className="site-bouncing-textarea site-underline-input" type="text"/>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="row margin-t-5">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            <div className="site-pages-form__input-wrapper">
                                <label className="site-textarea-label">Page scripts</label>
                                <textarea onFocus={this.lableUp} onBlur={this.labelDown}
                                          className="site-bouncing-textarea site-underline-input" type="text"/>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </form>
            </div>
        );
    }

}


export default UpdatePageForm;