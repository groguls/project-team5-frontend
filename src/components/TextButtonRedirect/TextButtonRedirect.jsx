import { ContainerRedirect } from "./TextButtonRedirect.styled";

export const TextButtonRedirect = ({ redirectLink, children }) => {
  console.log(children);
  return (
    <ContainerRedirect>
      <a href={redirectLink}>
        {children}
      </a>
    </ContainerRedirect>
  );
};
