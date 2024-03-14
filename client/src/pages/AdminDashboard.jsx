import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function AdminDashboard() {
  const earningsChartRef = useRef(null);
  const ordersChartRef = useRef(null);

  useEffect(() => {
    // Earnings Chart
    const earningsCtx = earningsChartRef.current.getContext('2d');
    const earningsChart = new Chart(earningsCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Earnings',
          data: [100, 300, 400, 200, 500, 300, 400, 600],
          borderColor: 'blue',
          backgroundColor: 'transparent',
          borderWidth: 2,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Orders Chart
    const ordersCtx = ordersChartRef.current.getContext('2d');
    const ordersChart = new Chart(ordersCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Orders',
          data: [50, 80, 120, 90, 150, 100],
          backgroundColor: 'blue',
          borderColor: 'transparent',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      earningsChart.destroy();
      ordersChart.destroy();
    };
  }, []);

  return (
    <div className='flex gap-6 p-6'>
      <div className='w-1/4'>
        <div className='mb-6 flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg'>
          <img className='rounded-full h-20 w-20 mb-2' src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="Profile" />
          <h1 className='text-xl font-semibold'>Shivam Maurya</h1>
          <p className='text-gray-500'>Admin</p>
          <button className='px-4 py-2 mt-4 text-white text-lg font-medium rounded-lg bg-blue-600 hover:bg-blue-700'>Create New Course</button>
        </div>
        <div className='mt-6 flex flex-col gap-2 items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg'>
          <button className='w-full py-2 text-left text-blue-600 hover:text-blue-700'>Dashboard</button>
          <button className='w-full py-2 text-left text-gray-600 hover:text-gray-700'>Courses</button>
          <button className='w-full py-2 text-left text-gray-600 hover:text-gray-700'>Students</button>
          <button className='w-full py-2 text-left text-gray-600 hover:text-gray-700'>Reviews</button>
          <button className='w-full py-2 text-left text-gray-600 hover:text-gray-700'>Earnings</button>
        </div>
      </div>

      <div className='w-3/4 p-6 rounded-lg'>
        {/* Main Content */}
        <div className='grid grid-cols-3 text-center gap-6'>
          {/* Revenue Card */}
          <div className='bg-white p-4 rounded-md shadow-md'>
            <h3 className='text-lg font-semibold text-gray-700'>REVENUE</h3>
            <h1 className='text-3xl font-bold text-blue-600 mt-2'>467.34</h1>
            <p className='text-sm text-gray-500'>Earning this month</p>
          </div>
          {/* Students Enrollments Card */}
          <div className='bg-white p-4 rounded-md shadow-md'>
            <h3 className='text-lg font-semibold text-gray-700'>STUDENTS ENROLLMENTS</h3>
            <h1 className='text-3xl font-bold text-blue-600 mt-2'>1250</h1>
            <p className='text-sm text-gray-500'>New this month</p>
          </div>
          {/* Courses Card */}
          <div className='bg-white p-4 rounded-md shadow-md'>
            <h3 className='text-lg font-semibold text-gray-700'>COURSES</h3>
            <h1 className='text-3xl font-bold text-blue-600 mt-2'>15</h1>
            <p className='text-sm text-gray-500'>Course Running</p>
          </div>
        </div>
        {/* Earnings Chart */}
        <div className='mt-6'>
          <h1>Earnings</h1>
          <canvas ref={earningsChartRef}></canvas>
        </div>
        {/* Orders Chart */}
        <div className='mt-6'>
          <h1>Orders</h1>
          <canvas ref={ordersChartRef}></canvas>
        </div>
        {/* Best Selling Courses Table */}
        <div className='mt-6'>
          {/* Add best selling courses table with image title, instructor, rating, and price */}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
