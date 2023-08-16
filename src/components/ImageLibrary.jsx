import { PropTypes } from "prop-types";
//import components
import { Image } from "react-bootstrap";

//import hooks
import { useSelector } from "react-redux";

//import img/icon
import addIcon from "../assets/add.png"
import { memo } from "react";
function ImageLibrary({onClick}) {
  const imageList = useSelector((state) => state.image.images);
  return (
    <div className="d-flex gap-2 flex-wrap">
      {/* render all images */}
      {imageList.length ?
        imageList?.map((item, index) => (
          <Image
            key={index}
            src={item?.thumbnailURL || item?.lowResURL || item?.sourceURL}
            rounded
            width={"100px"}
            height={"100px"}
            onClick={() => onClick(item)}
          /> 
        )) : <></>}
        {/* render add icon to add image */}
        <div
          className="rounded d-flex justify-content-center align-items-center "
          style={{ width: "100px", height: "100px", background: "#F5F5F5" }}
        >
        <Image
          src={addIcon}
          rounded
          width={"100px"}
          height={"100px"}
          style={{ padding: "20px" }}
          onClick={() =>onClick()}
        />
        </div>
    </div>
  );
}

// prop types
ImageLibrary.propTypes = {
    onClick: PropTypes.func,
  };
export default memo(ImageLibrary);
