import { MainTitle, Subtitle, ListTitle, Text } from './Typography.styled';

const Typography = ({ children, styled }) => {
  console.log('Typography   styled :', styled);
  console.log('Typography  children:', children);

  switch (styled) {
    case 'MainTitle':
      return <MainTitle>{children}</MainTitle>;
    case 'Subtitle':
      return <Subtitle>{children}</Subtitle>;
    case 'ListTitle':
      return <ListTitle>{children}</ListTitle>;
    case 'Text':
      return <Text>{children}</Text>;
    default:
      return children;
  }
};

export default Typography;
