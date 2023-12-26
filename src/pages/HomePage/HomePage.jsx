import {
  MainContainer,
  SectionDailyNorma,
  SectionTodaiCalendar,
} from './HomePage.styled';

const Home = () => {
  return (
    <MainContainer>
      <SectionDailyNorma>
        <h2>Daily norma</h2>
        <div>Water bar</div>
      </SectionDailyNorma>

      <SectionTodaiCalendar>
        <div>Todai modal</div>
        <div>Month table</div>
      </SectionTodaiCalendar>
    </MainContainer>
  );
};

export default Home;
