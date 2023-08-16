import PropTypes from 'prop-types';

function Header({title, enableBgColor}) {
  return (
    <div className={`fs-4 ${enableBgColor ? 'bg-info' : 'bg-white'} d-flex justify-content-center fw-bold rounded-1 px-2 py-1`}>{title}</div>
  )
}
//props defaultProps
Header.defaultProps = {
  enableBgColor: true
};

//props types
Header.propTypes = {
    title: PropTypes.string,
    enableBgColor: PropTypes.bool
  };
export default Header