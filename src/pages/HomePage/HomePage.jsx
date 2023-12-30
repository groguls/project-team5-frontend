import { WaterPanel } from '../../components/WaterPanel/WaterPanel';
import { DailyNorma } from '../../components/DailyNorma/DailyNorma';
import {
  MainContainer,
  SectionDailyNorma,
  SectionTodayCalendar,
} from './HomePage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMonthInfo } from '../../redux/water/waterOperations';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMonthInfo());
  // }, [dispatch]);

  return (
    <MainContainer>
      <SectionDailyNorma>
        <DailyNorma />
        <WaterPanel />
      </SectionDailyNorma>

      <SectionTodayCalendar>
        <div>Today modal</div>
        <div>
          <MonthStatsTable />
        </div>
      </SectionTodayCalendar>
    </MainContainer>
  );
};

export default Home;
