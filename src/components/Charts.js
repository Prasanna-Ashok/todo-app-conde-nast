import React, { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { UserContext } from "../contexts/UserContext";

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
var tasks;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
  <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  {tasks[index].name}:{tasks[index].count}
  </text>
    );
  
};

const SimplePieChart = () => {
  const { cards } = useContext(UserContext);
  tasks = [...cards]
  var taskCount = 0;
  cards.forEach(function(card) {
    taskCount = parseInt(taskCount + card.count);
  });

  return (
    <div>
     {taskCount !== 0 ? <h4 style={{textAlign: 'center', textDecoration: 'underline'}}>Taskload for each of the users </h4> : ""} 
    <PieChart width={800} height={400}>
      <Pie
        dataKey="count"
        data={tasks}
        cx={600}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
      >
        {cards.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} ></Cell>
        ))}
      </Pie>
    </PieChart>
    </div>
  );
};

export default SimplePieChart;
