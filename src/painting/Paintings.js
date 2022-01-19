import React, { useState } from "react";
import paintingStyles from "./Paintings.module.css";
import { Helmet } from "react-helmet";
import Header from "../Header";
import { paintings } from "./paintings/patiningList";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const customStyles = {
  content: {
    marginTop: "3.5rem",
    fontSize: "0.85rem",
  },
};

export default function Paintings() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Paintings | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className={paintingStyles.paintPage}>
        <div className={paintingStyles.paintContent}>
          <div className={paintingStyles.paintRow}>
            <img
              className={paintingStyles.paintLong}
              src={paintings[0][0]}
              onClick={() => {
                setIndex(0);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintLong}
              src={paintings[1][0]}
              onClick={() => {
                setIndex(1);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintLong}
              src={paintings[2][0]}
              onClick={() => {
                setIndex(2);
                setIsOpen(true);
              }}
            />
          </div>
          <div className={paintingStyles.paintRow}>
            <img
              className={paintingStyles.paintWide}
              src={paintings[3][0]}
              onClick={() => {
                setIndex(3);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintWide}
              src={paintings[4][0]}
              onClick={() => {
                setIndex(4);
                setIsOpen(true);
              }}
            />
          </div>
          <div className={paintingStyles.paintRow}>
            <img
              className={paintingStyles.paintWide}
              src={paintings[5][0]}
              onClick={() => {
                setIndex(5);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintWide}
              src={paintings[6][0]}
              onClick={() => {
                setIndex(6);
                setIsOpen(true);
              }}
            />
          </div>
          <div className={paintingStyles.paintRow}>
            <img
              className={paintingStyles.paintLong}
              src={paintings[7][0]}
              onClick={() => {
                setIndex(7);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintLong}
              src={paintings[8][0]}
              onClick={() => {
                setIndex(8);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintWide}
              src={paintings[9][0]}
              onClick={() => {
                setIndex(9);
                setIsOpen(true);
              }}
            />
          </div>
          <div className={paintingStyles.paintRow}>
            <img
              className={paintingStyles.paintLong}
              src={paintings[10][0]}
              onClick={() => {
                setIndex(10);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintLong}
              src={paintings[11][0]}
              onClick={() => {
                setIndex(11);
                setIsOpen(true);
              }}
            />
            <img
              className={paintingStyles.paintLong}
              src={paintings[12][0]}
              onClick={() => {
                setIndex(12);
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      {isOpen ? (
        <Lightbox
          reactModalStyle={customStyles}
          mainSrc={paintings[index][0]}
          imageTitle={paintings[index][1]}
          nextSrc={paintings[(index + 1) % paintings.length][0]}
          prevSrc={
            paintings[(index + paintings.length - 1) % paintings.length][0]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((index + paintings.length - 1) % paintings.length)
          }
          onMoveNextRequest={() => setIndex((index + 1) % paintings.length)}
        />
      ) : null}
    </div>
  );
}
