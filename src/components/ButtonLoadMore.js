import React from 'react';
import PropTypes from 'prop-types';

import {ButtonLoad} from './Styled/ButtonLoad.styled'


function ButtonLoadMore({ onClick, disabled }) {
  //const hidden = { display: disabled ? "none" : "inherited" };
  return (
    <ButtonLoad type="button" onClick={onClick}
       style={{ display: disabled ? "none" : "inherited" }}>
      Load more
    </ButtonLoad>
  );
}

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};