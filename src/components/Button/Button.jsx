import { StyledButton } from './Button.styled';

const Button = ({
  type,
  label,
  icon,
  onClick,
  width,
  backgroundColor,
  textColor,
  fontSize,
  fontWieght,
  fontHeight,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      width={width}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $fontSize={fontSize}
      $fontWieght={fontWieght}
      $fontHeight={fontHeight}
    >
      {icon && <img src={icon} alt="Icon" />} {label}
    </StyledButton>
  );
};

export default Button;
