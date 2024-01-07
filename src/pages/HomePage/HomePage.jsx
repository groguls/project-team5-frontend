import { WaterPanel } from '../../components/WaterPanel/WaterPanel';
import { DailyNorma } from '../../components/DailyNorma/DailyNorma';
import {
  MainContainer,
  SectionDailyNorma,
  SectionTodayCalendar,
} from './HomePage.styled';
import { MonthStatsTable } from '../../components/MonthStatsTable/MonthStatsTable';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodayInfo } from '../../redux/water/waterOperations';
import { Container } from '../../styles/GlobalStyle';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodayInfo());
  }, [dispatch]);
  return (
    <MainContainer>
      <Container>
        <SectionDailyNorma>
          <DailyNorma />
          <WaterPanel />
        </SectionDailyNorma>
        <SectionTodayCalendar>
          <TodayWaterList />
          <MonthStatsTable />
        </SectionTodayCalendar>
      </Container>
    </MainContainer>
  );
};

export default Home;
