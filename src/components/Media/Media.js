import React, { useContext, useEffect, useState, useRef } from "react";
import { useWhatsapplogger } from "../../hooks/api-hooks";
import { UserContext } from "../../store/context/userContext";
import DialogModal from "../Modal";
import CardMedia from "@material-ui/core/CardMedia";
import Slide from "@material-ui/core/Slide";

import Skeleton from "@material-ui/lab/Skeleton";
import Fade from "@material-ui/core/Fade";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CloseIcon from "@material-ui/icons/Close";
// import { Link } from "prismic-reactjs";
import { PRISMIC_MEDIALIB_DOC } from "../../utils/constants";

const MediaTitleComp = ({ children, setModal }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "60px"
      }}
    >
      {children}
      <CloseIcon
        color="primary"
        onClick={() => {
          return setModal({ show: false, name: "" });
        }}
      />
    </div>
  );
};

const Media = props => {
  // All you need for loggin
  // Whatsapp Logger
  const [log, setLogs] = useWhatsapplogger({});

  const iframeRef = useRef(null);
  const { cmsContents, setModal } = useContext(UserContext);
  useEffect(() => {
    if (
      cmsContents &&
      cmsContents.data &&
      cmsContents.data.hasOwnProperty(PRISMIC_MEDIALIB_DOC)
    ) {
      console.log(
        cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaUrl
      );
      // setMedialibrary({
      //     type : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaType,
      //     url : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaUrl,
      //     title : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaTitle,
      //     allowfs : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.allowFullScreen
      //   })
    }
  }, [cmsContents]);
  useEffect(() => {
    setLogs({
      action: "MEDIA",
      message: `just launched media modal for watching video`
    });
  }, []);
  // load  skeleton and hide iframe
  const [iframeloading, setIframeloading] = useState(true);
  const [iframestyles, setIframestyles] = useState({
    visibility: "hidden",
    position: "absolute"
  });
  // setMedialibrary({
  //   type : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaType,
  //   url : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaUrl,
  //   title : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.mediaTitle,
  //   allowfs : cmsContents.data[PRISMIC_MEDIALIB_DOC].edges[0].node.allowFullScreen
  // })
  const initialState = {
    description: "",
    title: (
      <MediaTitleComp setModal={setModal}>
        <Skeleton width="100%" />
      </MediaTitleComp>
    ),
    primaryButton: <ThumbUpIcon />,
    secondaryButton: <ThumbDownIcon />,
    error: false,
    loading: false
  };
  const [modalConfig, setModalConfig] = useState(initialState);
  useEffect(() => {
    if (!iframeloading) {
      setIframestyles({ visibility: "visible", position: "static" });
      setModalConfig({
        ...modalConfig,
        title: (
          <MediaTitleComp setModal={setModal}>
            <span>Staying Positive After Hardships</span>
          </MediaTitleComp>
        )
      });
    }
  }, [iframeloading, modalConfig]);

  // useEffect(() => {
  //   if (methods.hasOwnProperty("error")) {
  //     setModalConfig({
  //       ...modalConfig,
  //       description:
  //         "We are experiencing some issues. Please try after sometime.",
  //       secondaryButton: "Ok",
  //       primaryButton: "",
  //       error: true
  //     });
  //   }
  // }, [methods]);

  const handlePrimary = () => {
    setModalConfig({ ...modalConfig, loading: true });

    setLogs(() => {
      setModal({ show: false, name: "" });
      return {
        action: "Likes",
        message: `just liked the media content`
      };
    });
  };

  const handleSecondary = () => {
    setLogs({
      action: "Sucks",
      message: `just Disliked the media content`
    });
  };
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <div>
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
        fullWidth={true}
        fullScreen={true}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
        actionContainerStyle={{ justifyContent: "flex-start" }}
      >
        <div
          style={{
            minHeight: "155px",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100vw",
            height: "auto",
            display:'flex',
            // webkitOverflowScrolling:'touch',
            // overflow:'auto' 
          }}
        >
          {iframeloading ? (
            <div>
              <Skeleton variant="rect" width={"80vw"} height={145} />
              {/* <Skeleton width="60%" /> */}
            </div>
          ) : null}
          <Fade in={true} style={{ transitionDelay: "1200ms" }}>
            <CardMedia
              component="iframe"
              title="Staying Positive After Hardships"
              src="https://www.youtube.com/embed/RgGh2hlHbc4?enablejsapi=1&origin=https://www.padachone.com"
              ref={iframeRef}
              onLoad={() => setIframeloading(false)}
              onError={() => console.log("ERROR")}
              style={iframestyles}
              allowFullScreen
              // minHeight={'155px'}
              width={'100vw'}
              // maxWidth={'100%'}
              // maxHeight={'100%'}
              height={'auto'}
            />
          </Fade>
        </div>
      </DialogModal>
      </div>
    </Slide>
  );
};

export default Media;
