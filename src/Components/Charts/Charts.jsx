import {
  CustomerData,
  donut,
  MonthlyEarningData,
  RevemueChart,
  SalesOverview,
  WeeklyStatsData,
} from "../../Assets/Data";
import Chart from "react-apexcharts";

export const RevenueChart = () => {
  return (
    <Chart
      type="line"
      width="100%"
      height={400}
      series={RevemueChart.series}
      options={RevemueChart.options}
    ></Chart>
  );
};

export const MonthlyEarningChart = () => {
  return (
    <Chart
      type="bar"
      width="100%"
      height={100}
      series={MonthlyEarningData.series}
      options={MonthlyEarningData.options}
    ></Chart>
  );
};

export const CustomerChart = () => {
  return (
    <Chart
      type="line"
      width="100%"
      height={100}
      series={CustomerData.series}
      options={CustomerData.options}
    ></Chart>
  );
};

export const DonutChart = () => {
  return (
    <Chart
      type="donut"
      width={"100%"}
      options={donut.options}
      series={donut.series}
    />
  );
};

export const SalesOverviewChart = () => {
  return (
    <Chart
      options={SalesOverview.options}
      type="bar"
      series={SalesOverview.series}
      height={"100%"}
    ></Chart>
  );
};

export const WeeklyStatsChart = () => {
  return (
    <Chart
      options={WeeklyStatsData.options}
      series={WeeklyStatsData.series}
      height={"100%"}
      type="area"
    ></Chart>
  );
};
