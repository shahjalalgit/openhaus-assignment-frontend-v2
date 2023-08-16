import PropTypes from 'prop-types';

function CustomHeader({title, enableBgColor}) {
  return (
    <div className={`fs-4 ${enableBgColor ? 'bg-info' : 'bg-white'} d-flex justify-content-center fw-bold rounded-1 px-2 py-1`}>{title}</div>
  )
}

//props defaultProps
CustomHeader.defaultProps = {
  enableBgColor: true
};

//props types
CustomHeader.propTypes = {
    title: PropTypes.string,
    enableBgColor: PropTypes.bool
  };
export default CustomHeader