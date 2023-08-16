//import components
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import ImageLibrary from "../components/ImageLibrary";
import { CustomModal, Header } from "../components/common";

//import hooks
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//import redux state action
import {
  setImages,
  removeImages,
  updateImages,
} from "../redux/reducer/imageReducer";

function Home() {
  //dispatch hook
  const dispatch = useDispatch();
  // modal stats
  const [modalShow, setModalShow] = useState(false);
  const [isOpenImageView, setIsOpenImageView] = useState(false);

  // edit data state
  const [editData, setEditData] = useState(null);

  // boolean state for tracking is update or not
  const [isUpdateImage, setIsUpdateImage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    values: { sourceURL: "" },
  });

  // handle modal for close
  const closeModal = () => {
    reset({ sourceURL: "" });
    setModalShow(false);
    setIsUpdateImage(false);
  };

  // handle modal for close
  const closeModalImageView = () => {
    reset({ sourceURL: "" });
    setIsOpenImageView(false);
  };

  // handle new image and updated image to set redux store
  const _handleSubmit = (data) => {
    isUpdateImage
      ? dispatch(updateImages({ id: editData?.id, newImage: data }))
      : dispatch(setImages(data));
    closeModal();
    reset({ sourceURL: "" });
  };

  //set to open modal as required and useCallback for prevent reRender of ImageLibrary, because this use as ref fuc
  const _handleModal = useCallback((editData) => {
    if (editData) {
      setEditData(editData);
      setIsOpenImageView(true);
    } else {
      setModalShow(true);
    }
  }, []);

  // handle image update
  const _handleUpdateImage = () => {
    closeModalImageView();
    editData?.sourceURL && setValue("sourceURL", editData?.sourceURL);
    editData?.lowResURL && setValue("lowResURL", editData?.lowResURL);
    editData?.thumbnailURL && setValue("thumbnailURL", editData?.thumbnailURL);
    setModalShow(true);
    setIsUpdateImage(true);
  };

  // handle image remove
  const _handleRemoveImage = () => {
    closeModalImageView();
    dispatch(removeImages(editData));
  };

  return (
    <div>
      <Header title={"Image Library"} />

      <div className="d-flex gap-2 flex-wrap align mt-2">
        <ImageLibrary onClick={_handleModal} />
        <CustomModal show={modalShow} onClose={closeModal}>
          <Header title={"Image Details"} enableBgColor={false} />
          <Form onSubmit={handleSubmit(_handleSubmit)}>
            {formFields?.map((field) => (
              <Form.Group key={field?.id} className="mb-3">
                <Row>
                  <Col xs={4}>
                    <Form.Label style={{ minWidth: "40px", fontWeight: 700 }}>
                      {field?.label} :
                    </Form.Label>
                  </Col>
                  <Col xs={8}>
                    <Form.Control
                      type={field?.type}
                      placeholder="https://example.com"
                      {...register(field?.name, { required: field?.required })}
                    />
                    {errors[field?.name] && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Col>
                </Row>
              </Form.Group>
            ))}

            <Row>
              <Col xs={3}></Col>
              <Col xs={9}>
                <div className="d-flex gap-2">
                  {isUpdateImage ? (
                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  )}
                  <Button variant="danger" onClick={closeModal}>
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </CustomModal>

        <CustomModal show={isOpenImageView} onClose={closeModalImageView}>
          <Image
            src={editData?.lowResURL || editData?.sourceURL}
            rounded
            width={"100%"}
            height={"100%"}
          />
          <div className="d-flex mt-2 justify-content-end  gap-2">
            <Button variant="primary" onClick={_handleUpdateImage}>
              UPDATE IMAGE
            </Button>
            <Button variant="danger" onClick={_handleRemoveImage}>
              REMOVE IMAGE
            </Button>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}

// form fields data
const formFields = [
  {
    id: 1,
    label: "Source URL",
    name: "sourceURL",
    type: "url",
    required: true
  },
  {
    id: 2,
    label: "Low Res URL",
    name: "lowResURL",
    type: "url",
    required: false
  },
  {
    id: 3,
    label: "Thumbnail URL",
    name: "thumbnailURL",
    type: "url",
    required: false
  },
];

export default Home;
