import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden
`;

export const ModalForm = styled.form`
  box-sizing: content-box;
  width: 256px;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  padding: 32px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  border-radius: 10px;
  background: ${props => `${props.theme.colors.primaryWhite}`};

  @media (min-width: 768px) {
    padding: 32px 24px;
    align-items: flex-end;
    width: 656px;
  }

  @media (min-width: 1440px) {
    width: 960px;
  }
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
`;

export const TitleCloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

export const Title = styled.p`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 123.077%;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const PhotoTitle = styled.p`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
`;

export const UploadPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: url(), lightgray 50% / cover no-repeat;
`;

export const UserNoLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: red;
  background: lightgray 50%;
`;

export const UploadPhotoButton = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${props => `${props.theme.colors.primaryBlue}`};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 128.571%;

  cursor: pointer;
`;

export const UploadPhotoInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;

  @media (min-width: 1440px) {
    flex-direction: row;
    // align-items: flex-end;
  }
`;

export const MainInfoWrapper = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (min-width: 1440px) {
    gap: 52px;
  }
`;

export const GenderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const GenderTitle = styled.p`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const PersonalInfoLabel = styled.label`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

export const PassworTitle = styled.p`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
`;

export const PassworLabel = styled.label`
  color: ${props => `${props.theme.colors.primaryBlack}`};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const PassworConfirmError = styled.p`
  color: ${props => `${props.theme.colors.secondaryRed}`};
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
`;

export const SaveButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SaveButton = styled.button`
  border: none;
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${props => `${props.theme.colors.primaryWhite}`};
  border-radius: 10px;
  background: ${props => `${props.theme.colors.primaryBlue}`};
  box-shadow: ${props => `${props.theme.shadows.normalButton}`};
  width: 256px;
  cursor: pointer;
  margin-right: 0;

  &:hover {
    box-shadow: ${props => `${props.theme.shadows.hoverButton}`}
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`;

export const SettingLoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
