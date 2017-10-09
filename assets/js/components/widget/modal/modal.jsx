import React from 'react';
import {Link} from 'react-router-dom';




class Modal extends React.Component {




    render () {
        return (
            <div className="site-notification">
                <i className="material-icons site-notification__question-icon">live_help</i>
                <button type="button" aria-hidden="true" className="site-notification__close">×</button>
                <span className="site-notification_txt">
                    This is a notification with close button and icon and have many lines. You can see that the
                    icon and the close button are always vertically aligned.</span>
                <div className="site-notification__btn-container">
                    <button type="button" aria-hidden="true" className="site-notification__btn-container-btn">
                        <i className="material-icons site-notification__btn-container-icon">done</i> Yes
                    </button>
                    <button type="button" aria-hidden="true" className="site-notification__btn-container-btn">
                        <i className="material-icons site-notification__btn-container-icon">clear</i> No
                    </button>
                </div>
            </div>
        );
    }


}

export default Modal;