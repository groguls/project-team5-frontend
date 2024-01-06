import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { instance } from '../../redux/auth/operations';
import { refreshUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Radio } from '../Icons/Radio';
import { RadioActive } from '../Icons/RadioActive';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import {
  Overlay,
  ModalForm,
  TitleCloseWrapper,
  Title,
  CloseWrapper,
  PhotoWrapper,
  PhotoTitle,
  UploadPhotoWrapper,
  UserLogo,
  UploadPhotoButton,
  UploadPhotoInput,
  BodyWrapper,
  MainInfoWrapper,
  GenderWrapper,
  GenderTitle,
  RadioWrapper,
  PersonalInfoWrapper,
  PersonalInfoLabel,
  PasswordWrapper,
  PassworTitle,
  PassworLabel,
  RadioInput,
  RadioLabel,
  SaveButton,
  SaveButtonWrapper,
  UserNoLogo,
} from './SettingModal.styled';
import { Close } from '../Icons/Close';
import { UserIcon } from '../Icons/UserIcon';
import { UploadPhoto } from 'components/Icons/UploadPhoto';
import InputPasswordSetting from '../InputPasswordSetting/InputPasswordSetting';
import { InputEmailNameSetting } from '../InputEmailNameSetting/InputEmailNameSetting';
import { selectName, selectUser, selectEmail } from '../../redux/selectors';

const genderList = ['girl', 'man'];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,64}$/;

const formSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().matches(emailRegex, {
    message: `Invalid email.Please enter a valid email in the format: example@example.com.`,
  }),
  oldPassword: Yup.string().matches(passwordRegex, {
    message: `Invalid password. Password must be at least 8 characters long.`,
  }),
  newPassword: Yup.string().matches(passwordRegex, {
    message: `Invalid password. Password must be at least 8 characters long.`,
  }),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .matches(passwordRegex, {
      message: `Invalid password. Password must be at least 8 characters long.`,
    }),
});

export const SettingModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [userPhoto, setUserPhoto] = useState(null);
  const [userPhotoFile, setUserPhotoFile] = useState(null);
  const [gender, setGender] = useState(0);

  const user = useSelector(selectUser);
  const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);

  const defValuesFlag = useRef(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values, actions) => {
      const formName = values.name.trim();
      const formEmail = values.email.trim();
      const formOldPassword = values.oldPassword.trim();
      const formNewPassword = values.newPassword.trim();
      const formRepeatPassword = values.repeatPassword.trim();

      let data = null;
      if (user.gender !== genderList[gender]) {
        data = { ...data, gender: genderList[gender] };
      }
      if (formName.length > 0 && user.name !== formName) {
        data = { ...data, name: formName };
      }
      if (formEmail.length > 0 && user.email !== formEmail) {
        data = { ...data, email: formEmail };
      }
      if (formOldPassword.length > 0 && formNewPassword.length > 0 && formRepeatPassword.length > 0) {
        data = { ...data, oldPassword: formOldPassword, newPassword: formNewPassword };
      }

      if (data) {
        try {
          await instance.patch('/users/settings', data);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }

      if (userPhotoFile) {
        try {
          await instance.patch(
            '/users/avatars',
            {
              avatarURL: userPhotoFile,
            },
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
        } catch (error) {
          toast.error(error.message);
        }
      }

      dispatch(refreshUser());
      actions.resetForm();
      defValuesFlag.current = true;
    },
  });

  useEffect(() => {
    console.log('userPhoto = ', userPhoto);
  }, [userPhoto]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (user.avatarURL) {
      setUserPhoto('https://watertracker-by-group5.onrender.com/' + user.avatarURL);
    }
  }, [user.avatarURL]);

  useEffect(() => {
    if (defValuesFlag.current && user.email) {
      if (user.name) formik.values.name = user.name;
      formik.values.email = user.email;
      const indexGender = genderList.indexOf(user.gender);
      if (user.gender) setGender(indexGender >= 0 || indexGender <= 1 ? indexGender : 0);
      defValuesFlag.current = false;
    }
  }, [formik.values, user]);

  const handlerSetUserPhoto = e => {
    setUserPhoto(URL.createObjectURL(e.target.files[0]));
    setUserPhotoFile(e.target.files[0]);
  };

  const handlerSetGender = e => {
    setGender(Number(e.target.value));
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay className="overlay" onClick={handleBackdropClick}>
      <ModalForm onSubmit={formik.handleSubmit}>
        <TitleCloseWrapper>
          <Title>Setting</Title>
          <CloseWrapper onClick={onClose}>
            <Close />
          </CloseWrapper>
        </TitleCloseWrapper>
        <PhotoWrapper>
          <PhotoTitle>Your photo</PhotoTitle>
          <UploadPhotoWrapper>
            {userPhoto && <UserLogo src={userPhoto} />}
            {!userPhoto && (
              <UserNoLogo src={userPhoto}>
                <UserIcon width={80} height={80} />
              </UserNoLogo>
            )}
            <UploadPhotoButton>
              <UploadPhoto src={userPhoto} alt={userName} />
              Upload a photo
              <UploadPhotoInput type="file" accept="image/*" onChange={handlerSetUserPhoto} />
            </UploadPhotoButton>
          </UploadPhotoWrapper>
        </PhotoWrapper>
        <BodyWrapper>
          <MainInfoWrapper>
            <GenderWrapper>
              <GenderTitle>Your gender identity</GenderTitle>
              <RadioWrapper>
                <RadioLabel>
                  {gender === 0 && <RadioActive />}
                  {gender === 1 && <Radio />}
                  <RadioInput type="radio" name="gender" value="0" onChange={handlerSetGender} />
                  Girl
                </RadioLabel>
                <RadioLabel>
                  {gender === 1 && <RadioActive />}
                  {gender === 0 && <Radio />}
                  <RadioInput type="radio" name="gender" value="1" onChange={handlerSetGender} />
                  Man
                </RadioLabel>
              </RadioWrapper>
            </GenderWrapper>
            <PersonalInfoWrapper>
              <PersonalInfoLabel>
                Your name
                <InputEmailNameSetting
                  placeholderText="Name"
                  type={'name'}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  id={'name'}
                  helperText={'Invalid name.'}
                />
              </PersonalInfoLabel>
              <PersonalInfoLabel>
                E-mail
                <InputEmailNameSetting
                  placeholderText={userEmail}
                  type={'email'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  id={'email'}
                  helperText={'Invalid email.'}
                />
              </PersonalInfoLabel>
            </PersonalInfoWrapper>
          </MainInfoWrapper>
          <PasswordWrapper>
            <PassworTitle>Password</PassworTitle>
            <PassworLabel>
              Outdated password:
              <InputPasswordSetting
                placeholderText={'Password'}
                type={'password'}
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                id={'oldPassword'}
                helperText={formik.errors.oldPassword}
                onBlur={formik.handleBlur}
              />
            </PassworLabel>
            <PassworLabel>
              New Password:
              <InputPasswordSetting
                placeholderText={'Password'}
                type={'password'}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                id={'newPassword'}
                helperText={formik.errors.newPassword}
                onBlur={formik.handleBlur}
              />
            </PassworLabel>
            <PassworLabel>
              Repeat new password:
              <InputPasswordSetting
                placeholderText={'Password'}
                type={'password'}
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                id={'repeatPassword'}
                helperText={formik.errors.repeatPassword}
                onBlur={formik.handleBlur}
              />
            </PassworLabel>
          </PasswordWrapper>
        </BodyWrapper>
        <SaveButtonWrapper>
          <SaveButton type="submit">Save</SaveButton>
        </SaveButtonWrapper>
      </ModalForm>
    </Overlay>
  );
};
