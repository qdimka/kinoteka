import React, {useEffect} from 'react';
import {Toast, ToastBody, ToastHeader} from "reactstrap";
import {connect} from "react-redux";
import {closeToast} from "../../actions/toasts";

const mapStateToProps = (state) => ({
  show: state.toasts.title,
  title: state.toasts.title,
  message: state.toasts.message
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeToast())
});

const Toaster = ({show, title, message, close}) => {
  useEffect(() => {
    const timer = setTimeout(close, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <Toast isOpen={show}>
      <ToastHeader icon="danger" toggle={close}>
        {title}
      </ToastHeader>
      <ToastBody>
        {message}
      </ToastBody>
    </Toast>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
