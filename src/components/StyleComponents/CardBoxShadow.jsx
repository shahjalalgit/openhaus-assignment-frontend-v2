import { css } from '@emotion/react';
import { PropTypes } from 'prop-types';

const BoxWithShadow = () => {
  const boxStyle = css`
    width: 200px;
    height: 200px;
    background-color: red;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  `;

  return <div css={boxStyle}>Hello</div>
};

BoxWithShadow.propTypes = {
    children: PropTypes.element.isRequired
}
export default BoxWithShadow