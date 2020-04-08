import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('1', 0),
  createData('2', 5),
  createData('3', 110),
  createData('4', 90),
  createData('5', 20),
  createData('6', 25),
  createData('7', 30),
  createData('8', 75),
  createData('9', 40),
  createData('10', 45),
  createData('11', 50),
  createData('12', 55),
  createData('13', 100),
  createData('14', 65),
  createData('15', 70),
  createData('16', 75),
  createData('17', 95),
  createData('18', 85),
  createData('19', 90),
  createData('20', 95),
  createData('21', 10),
  createData('22', 105),
  createData('23', 150),
  createData('24', 115),
  createData('25', 120),
  createData('26', 125),
  createData('27', 130),
  createData('28', 135),
  createData('29', 30),
  createData('30', 25),
  createData('31', 40),
];

const GraphCard = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 32,
            right: 16,
            bottom: 32,
            left: 24,
          }}
        >
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}>
            <Label
                angle={0}
                position="bottom"
                style={{ textAnchor: 'bottom', fill: theme.palette.text.primary }}
                >

                Dates
            </Label>
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Issued Books
            </Label>
          </YAxis>
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default GraphCard;