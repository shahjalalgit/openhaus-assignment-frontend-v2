import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import addIcon from "../assets/add.png"
import { PropTypes } from "prop-types";
function ImageLibrary({onClick}) {
  const imageList = useSelector((state) => state.image.images);
  console.log({imageList});
  return (
    <div className="d-flex gap-2 flex-wrap">
      {imageList.length &&
        imageList?.map((item, index) => (
          <Image
            key={index}
            src={item?.sourceURL}
            rounded
            width={"100px"}
            height={"100px"}
            onClick={() => onClick(item)}
          />
        ))}
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

ImageLibrary.propTypes = {
    onClick: PropTypes.function,
  };
export default ImageLibrary;
