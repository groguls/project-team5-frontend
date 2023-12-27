import {
  MainContainer,
  SectionDailyNorma,
  SectionTodayCalendar,
} from './HomePage.styled';

const Home = () => {
  return (
    <MainContainer>
      <SectionDailyNorma>
        <h2>Daily norma</h2>
        <div>Water bar</div>
      </SectionDailyNorma>

      <SectionTodayCalendar>
        <div>Today modal</div>
        <div>Month table</div>
      </SectionTodayCalendar>
    </MainContainer>
  );
};

export default Home;
