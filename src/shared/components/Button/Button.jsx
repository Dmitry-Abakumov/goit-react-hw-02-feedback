import PropTypes from 'prop-types';

import StyledButton from './Button.styled';

const Button = ({ option, onClick, type }) => {
  return (
    <StyledButton onClick={() => onClick(option)} type={type}>
      {option}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
