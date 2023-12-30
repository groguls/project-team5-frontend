import { MonthInfoList } from './MonthInfo';
import { Pagination } from './MonthPagination';

export const MonthStatsTable = () => {
  return (
    <div>
      <div>
        <Pagination />
      </div>
      <div>
        <MonthInfoList />
      </div>
    </div>
  );
};
