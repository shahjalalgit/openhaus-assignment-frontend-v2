import PropTypes from 'prop-types';
function Header({title}) {
  return (
    <div className={'fs-3 bg-info d-flex justify-content-center fw-bold rounded-1 p-2'}>{title}</div>
  )
}

Header.propTypes = {
    title: PropTypes.string
  };
export default Header