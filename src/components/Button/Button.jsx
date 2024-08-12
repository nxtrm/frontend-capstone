import React from 'react'
import PropTypes from 'prop-types';

function Button({ onClick, children, variant, style }) {
    const baseStyle = 'font-body font-bold text-paragraph rounded-xl max-w-fit p-2';
    const primaryStyle = 'bg-primaryYellow text-primaryGreen';
    const secondaryStyle = 'bg-primaryGreen text-primaryYellow';
    const disabledStyle = 'bg-gray-400 text-gray-700 cursor-not-allowed';
  
    const hoverStyle = 'hover:shadow-primaryGreen hover:shadow-lg';

    let buttonStyle = baseStyle;
  
    switch (variant) {
      case 'primary':
        buttonStyle += ` ${primaryStyle} ${hoverStyle}`;
        break;
      case 'secondary':
        buttonStyle += ` ${secondaryStyle} ${hoverStyle}`;
        break;
      case 'disabled':
        buttonStyle += ` ${disabledStyle}`;
        break;
      default:
        buttonStyle += ` ${primaryStyle} ${hoverStyle}`;
    }
  
    return (
      <button
        className={buttonStyle}
        onClick={variant !== 'disabled' ? onClick : undefined}
        style={style}
      >
        {children}
      </button>
    );
  }
  
  Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
    style: PropTypes.object,
  };
  
  Button.defaultProps = {
    onClick: () => {},
    variant: 'primary',
    style: {},
  };
  
  export default Button;