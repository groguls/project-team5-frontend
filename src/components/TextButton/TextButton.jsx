import { TextButtonStyled } from './TextButton.styled';

export const TextButton = ({ icon, onClick, children }) => {
  return (
    <TextButtonStyled onClick={onClick}>
      <div>
        {icon}
        <p>{children}</p>
      </div>
    </TextButtonStyled>
  );
};
