import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { FaPercentage, FaHeadset, FaBolt, FaPlus } from 'react-icons/fa';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const BettingDashboard = () => {
  const title = "We’re proud to provide the best services to our clients";
  
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [950, 1020, 1010, 1030, 1230, 1250, 1240],
  };
  
  const features = [
    { icon: <FaPercentage />, title: 'Reasonable Costs', description: 'Competitive betting odds across all sports and markets.' },
    { icon: <FaBolt />, title: 'Live Betting', description: 'Real-time betting on live sports events.' },
    { icon: <FaPlus />, title: 'Plenty of Options', description: 'Wide variety of sports and betting markets.' },
    { icon: <FaHeadset />, title: '24/7 Support', description: 'Round-the-clock customer service support.' },
  ];

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Betting Activity',
        data: chartData.values,
        fill: false,
        borderColor: '#f97316',
        tension: 0.4,
        pointBackgroundColor: '#f97316',
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        max: 1500,
        ticks: { stepSize: 300 },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#2D2D2D] font-sans  flex justify-center items-center transition-all">
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-[#7C7C7C]">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart Section */}
          <div className="bg-gray-50 dark:bg-[#4C4C4C] p-4 rounded-xl shadow-md transition-all">
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-[#7C7C7C]">Betting Activity</h4>
            <Line data={data} options={options} />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-50 dark:bg-[#4C4C4C] p-4 rounded-xl shadow-md transition-all">
                <div className="text-green-600 dark:text-[#7C7C7C] text-2xl">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-[#7C7C7C] text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingDashboard;
