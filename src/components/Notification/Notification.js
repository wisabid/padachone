

import React, { useContext, useState } from "react";
import { UserContext } from "../../store/context/userContext";
import DialogModal from "../Modal";





const Notification = props => {
  const {
    setModal,
    setNotification
  } = useContext(UserContext);
  const initialState = {
    description: "",
    title: props.title,
    primaryButton: props.primaryBtn?props.primaryBtn:"Okay",
    secondaryButton: "",
    error: false,
    loading: false
  };
  const [modalConfig, setModalConfig] = useState(initialState);
  // useEffect(() => {
  //   if (notification.hasOwnProperty("error")) {
  //     setModalConfig({
  //       ...modalConfig,
  //       description:
  //         "We are experiencing some issues. Please try after sometime.",
  //       secondaryButton: "Ok",
  //       primaryButton: "",
  //       error: true
  //     });
  //   }
  // }, [notification]);
  

  

  const handlePrimary = () => {
    setModal({ show: false, name: "" });
    setNotification({});
  };

  const handleSecondary = () => {
    setModalConfig(initialState);
  };
  return (
    <DialogModal
      {...props}
      error={modalConfig.error}
      title={modalConfig.title}
      description={modalConfig.description}
      primaryButton={
        modalConfig.primaryButton ? modalConfig.primaryButton : null
      }
      handlePrimaryAction={() => handlePrimary()}
      secondaryButton={modalConfig.secondaryButton}
      handleSecondaryAction={() => handleSecondary()}
      loading={modalConfig.loading}
    >
      {props.children}
    </DialogModal>
  );
};

export default Notification;
