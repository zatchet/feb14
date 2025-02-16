import { useState, useEffect } from "react";
import "./App.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "react-photo-album/rows.css";
import MyCard from "./components/MyCard";
import LoveLetter from "./components/LoveLetter";

import photos from "./photos";

const padding = 15;
const spacing = 20;

function App() {
  const [clickedYes, setClickedYes] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const handleYesClick = () => {
    setClickedYes(true);
    setTimeout(() => {
      setIsComponentVisible(true);
    }, 2500);
    setShowPhotos(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "c") {
        setIsComponentVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={showPhotos ? "photos-fade-in" : "photos-hidden"}>
        <RowsPhotoAlbum
          photos={photos}
          padding={padding}
          spacing={spacing}
          targetRowHeight={130}
          render={{
            wrapper: ({ style, ...rest }) => (
              <div
                style={{
                  ...style,
                  backgroundColor: "white",
                  borderRadius: padding > 2 ? "4px" : 0,
                  boxShadow:
                    spacing + padding > 0
                      ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
                      : "none",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
                {...rest}
              />
            ),
          }}
        />
      </div>
      {!clickedYes && <MyCard onYesClick={handleYesClick} />}
      {clickedYes && isComponentVisible && <LoveLetter />}
    </>
  );
}

export default App;
