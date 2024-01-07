import { styled } from 'styled-components';

export const FormContainer = styled.form`
  margin: 0 auto;
  padding-top: 24px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin: 0 auto 0 32px;
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 120px;
    max-width: 384px;
    margin: 0 198px 0 auto;
  }
`;

export const InputForm = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;

export const ButtonSubmit = styled.button`
  max-width: 280px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  border: none;
  background-color: ${props => `${props.theme.colors.primaryBlue}`};
  color: ${props => `${props.theme.colors.primaryWhite}`};
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;

export const ButtonLink = styled.div`
  max-width: 280px;
  border: none;
  background-color: transparent;
  justify-content: start;
  color: ${props => `${props.theme.colors.primaryBlue}`};
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;
