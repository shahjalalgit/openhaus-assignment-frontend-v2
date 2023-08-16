import PropTypes from 'prop-types';
//import components
import Modal from 'react-bootstrap/Modal';
function CustomModal({show, onClose, children}) {

  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={'px-2 pb-0 pt-2 border-0'} closeButton/>
        <Modal.Body className='mt-n1'>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}

//props types
CustomModal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.array
  };
export default CustomModal