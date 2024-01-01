import { LoaderBackdrop, LoaderContainer } from './Loader.styled';

export const Loader = ({ children }) => {
  return (
    <LoaderBackdrop>
      <LoaderContainer>
        <div>
          <div>{children}</div>
        </div>
      </LoaderContainer>
    </LoaderBackdrop>
  );
};
