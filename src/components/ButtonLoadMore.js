import React from 'react';
import PropTypes from 'prop-types';

import {ButtonLoad} from './Styled/ButtonLoad.styled'


function ButtonLoadMore({ onClick, disabled }) {
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