import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button (props) {
  const {
    text,
    modificator,
    isVisibleText = true,
    element = null,
    onClick = null,
  } = props;

  return (
    <button className={`${styles['button']} ${styles[`button--${modificator}`]}`} onClick={onClick}>
      {
        modificator === 'card' && <span className={styles['button__icon']}></span>
      }
      {
        isVisibleText
          ? text
          : null
      }
      {
        element
          ? element
          : null
      }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  modificator: PropTypes.string,
  isVisibleText: PropTypes.bool,
  element: PropTypes.element,
  onClick: PropTypes.func
};

export default Button;
