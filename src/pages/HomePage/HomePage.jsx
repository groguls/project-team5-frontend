import { WaterPanel } from '../../components/WaterPanel/WaterPanel';
import { DailyNorma } from '../../components/DailyNorma/DailyNorma';
import {
  MainContainer,
  SectionDailyNorma,
  SectionTodayCalendar,
} from './HomePage.styled';

const Home = () => {
  return (
    <MainContainer>
      <SectionDailyNorma>
        <DailyNorma />
        <WaterPanel />
      </SectionDailyNorma>

      <SectionTodayCalendar>
        <div>Today modal</div>
        <div>Month table</div>
      </SectionTodayCalendar>
    </MainContainer>
  );
};

export default Home;
