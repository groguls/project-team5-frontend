import {
  MainTitle,
  Subtitle,
  ListTitle,
  Text,
  Info,
} from './Typography.styled';

const Typography = ({ children, styled }) => {
  // передаємо у своєму компоненті пропсу styled один з варіантів
  // 'MainTitle' -h1, 'Subtitle' -h2, 'ListTitle' -h3, 'Text' -p

  switch (styled) {
    case 'MainTitle':
      return <MainTitle>{children}</MainTitle>;
    case 'Subtitle':
      return <Subtitle>{children}</Subtitle>;
    case 'ListTitle':
      return <ListTitle>{children}</ListTitle>;
    case 'Text':
      return <Text>{children}</Text>;
    case 'Info':
      return <Info>{children}</Info>;
    default:
      return children;
  }
};

export default Typography;
