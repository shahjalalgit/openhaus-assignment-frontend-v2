import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useMemo, useState } from "react";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import defaultGalleryImages from "../helper/galleryImages.js";
import { Image } from "react-bootstrap";
function Gallery() {
  const imageList = useSelector((state) => state.image.images);
  const [index, setIndex] = useState(-1);
  const photos = useMemo(
    () =>
      imageList.map((photo, index) => ({
        src: photo?.sourceURL || photo?.lowResURL || "",
        width: photosSize[index].width,
        height: photosSize[index].height,
        srcSet: breakpoints.map((breakpoint) => {
          const height = Math.round(
            (photosSize[index].height / photosSize[index].width) * breakpoint
          );
          return {
            src: photo?.sourceURL || photo?.lowResURL || "",
            width: breakpoint,
            height,
          };
        }),
      })),
    [imageList]
  );
  return (
    <div>
      <Header title={"Gallery"} />
      <div className="p-2">
        <PhotoAlbum
          photos={photos?.length ? photos : defaultGalleryImages}
          layout="masonry"
          onClick={({ index }) => setIndex(index)}
          renderPhoto={renderPhoto}
        />
      </div>
      <Lightbox
        slides={photos?.length ? photos : defaultGalleryImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

const renderPhoto = ({ imageProps: { alt, style, ...restImageProps } }) => (
  <Image
    alt={alt}
    rounded
    style={{ ...style, width: "100%", padding: 0 }}
    {...restImageProps}
  />
);
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
const photosSize = [
  { id: "1", width: 3840, height: 2640 },
  { id: "2", width: 3840, height: 2721 },
  { id: "3", width: 3840, height: 5760 },
  { id: "4", width: 1080, height: 721 },
  { id: "5", width: 1080, height: 1620 },
  { id: "6", width: 1080, height: 607 },
  { id: "7", width: 1080, height: 608 },
  { id: "8", width: 1080, height: 720 },
  { id: "9", width: 1080, height: 1549 },
  { id: "10", width: 1080, height: 720 },
  { id: "11", width: 1080, height: 694 },
  { id: "12", width: 1080, height: 1620 },
  { id: "13", width: 1080, height: 720 },
  { id: "14", width: 1080, height: 1440 },
  { id: "15", width: 1080, height: 1620 },
  { id: "16", width: 1080, height: 810 },
  { id: "17", width: 1080, height: 610 },
  { id: "18", width: 1080, height: 160 },
  { id: "19", width: 1080, height: 810 },
  { id: "20", width: 1080, height: 720 },
  { id: "21", width: 1080, height: 1440 },
];

export default Gallery;
