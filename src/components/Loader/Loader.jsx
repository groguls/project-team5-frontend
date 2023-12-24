import { LoaderContainer } from "./Loader.styled";

export const Loader = ({children}) => {
  return (
    <LoaderContainer>
      <div>
        <div>{children}</div>
      </div>
    </LoaderContainer>
  );
};
