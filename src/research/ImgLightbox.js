import React from "react";
import Lightbox from "react-image-lightbox";
import useMediaQuery from "@mui/material/useMediaQuery";
import "react-image-lightbox/style.css";

const customStyles = {
  content: {
    marginTop: "3.5rem",
    fontSize: "0.85rem",
  },
};

export default function ImgLightbox({
  open,
  src,
  nextSrc,
  prevSrc,
  handleClose,
  handleMovePrev,
  handleMoveNext,
}) {
  const smallScreen = useMediaQuery("(max-width:768px)");

  return open && smallScreen ? (
    <Lightbox
      reactModalStyle={customStyles}
      mainSrc={src}
      nextSrc={nextSrc}
      prevSrc={prevSrc}
      onCloseRequest={handleClose}
      onMovePrevRequest={handleMovePrev}
      onMoveNextRequest={handleMoveNext}
    />
  ) : null;
}
