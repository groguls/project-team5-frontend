import { StyledButton } from './Button.styled';

const Button = ({
  label,
  icon,
  onClick,
  width,
  backgroundColor,
  textColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      width={width}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
    >
      {icon && <img src={icon} alt="Icon" />} {label}
    </StyledButton>
  );
};

export default Button;
