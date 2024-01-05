import { WaterPanel } from '../../components/WaterPanel/WaterPanel';
import { DailyNorma } from '../../components/DailyNorma/DailyNorma';
import {
  MainContainer,
  SectionDailyNorma,
  SectionTodayCalendar,
} from './HomePage.styled';
import { MonthStatsTable } from '../../components/MonthStatsTable/MonthStatsTable';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getMonthInfo } from '../../redux/water/waterOperations';

const Home = () => {
  return (
    <MainContainer>
      <SectionDailyNorma>
        <DailyNorma />
        <WaterPanel />
      </SectionDailyNorma>

      <SectionTodayCalendar>
        <div>
          <TodayWaterList />
        </div>
        <div>
          <MonthStatsTable />
        </div>
      </SectionTodayCalendar>
    </MainContainer>
  );
};

export default Home;
