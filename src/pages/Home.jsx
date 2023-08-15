import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Header from "../components/common/Header";
import CustomModal from "../components/common/CustomModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setImages, removeImages } from "../redux/reducer/imageReducer";
import ImageLibrary from "../components/ImageLibrary";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [isOpenImageView, setIsOpenImageView] = useState(false);
  const [editData, setEditData] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    values: { sourceURL: "" },
  });

  const closeModal = () => {
    reset({ sourceURL: "" });
    setModalShow(false);
  };
  const closeModalImageView = () => {
    reset({ sourceURL: "" });
    setIsOpenImageView(false);
    setEditData(null)
  };
  const _handleSubmit = (data) => {
    editData ? dispatch(setImages(data)) :  dispatch(setImages(data));
    closeModal();
    reset({ sourceURL: "" });
  };
  const _handleModal = (editData) => {
    console.log(editData, "@");
    if (editData) {
      setEditData(editData);
      setIsOpenImageView(true);
    } else {
      setModalShow(true);
    }
  };
  return (
    <div>
      <Header title={"Image Library"} />

      <div className="d-flex gap-2 flex-wrap align mt-2">
        <ImageLibrary onClick={_handleModal} />
        <CustomModal show={modalShow} onClose={closeModal}>
          <Header title={"Image Details"} enableBgColor={false} />
          <Form onSubmit={handleSubmit(_handleSubmit)}>
            <Form.Group className="mb-3">
              <Row>
                <Col xs={3}>
                  <Form.Label style={{ minWidth: "40px" }}>
                    Source URL
                  </Form.Label>
                </Col>
                <Col xs={9}>
                  <Form.Control
                    type="url"
                    placeholder="https://example.com"
                    {...register("sourceURL", { required: true })}
                  />
                  {errors.sourceURL && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Col>
              </Row>
            </Form.Group>
            <Row>
              <Col xs={3}></Col>
              <Col xs={9}>
                <div className="d-flex gap-2">
                  <Button variant="primary" type="submit">
                    {editData ? 'Update' : 'Add'}
                  </Button>
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
            src={editData?.sourceURL}
            rounded
            width={"100%"}
            height={"100%"}
          />
          <div className="d-flex mt-2 justify-content-end  gap-2">
            <Button variant="primary" onClick={()=> {closeModalImageView(); setValue('sourceURL', editData?.sourceURL); setModalShow(true)}}>
              UPDATE IMAGE
            </Button>
            <Button variant="danger" onClick={() => {closeModalImageView(); dispatch(removeImages(editData))}}>
              REMOVE IMAGE
            </Button>
          </div>
        </CustomModal>
      </div>
    </div>
  );
}

export default Home;
