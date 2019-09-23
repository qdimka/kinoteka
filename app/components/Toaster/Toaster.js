import React from 'react';
import {Toast, ToastBody, ToastHeader} from "reactstrap";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        show: state.toasts.title,
        title: state.toasts.title,
        message: state.toasts.message
    };
};

const Toaster = (props) => (
    <Toast isOpen={props.show}>
        <ToastHeader icon="danger">
            {props.title}
        </ToastHeader>
        <ToastBody>
            {props.message}
        </ToastBody>
    </Toast>
);

export default connect(mapStateToProps, null)(Toaster);