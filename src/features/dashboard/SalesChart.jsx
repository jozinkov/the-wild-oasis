import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

import { useDarkMode } from "../../context/useDarkMode";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

SalesChart.propTypes = {
  bookings: PropTypes.array,
  numDays: PropTypes.number,
};

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  const dates = eachDayOfInterval({
    start: subDays(new Date(), numDays),
    end: new Date(),
  });

  const data = dates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((b) => isSameDay(b.created_at, date))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((b) => isSameDay(b.created_at, date))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });
  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(dates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(dates.at(-1), "MMM dd yyyy")}{" "}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="4" />
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            type="monotone"
            dataKey="totalSales"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            type="monotone"
            dataKey="extrasSales"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
