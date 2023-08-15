import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

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


CustomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.array
  };
export default CustomModal