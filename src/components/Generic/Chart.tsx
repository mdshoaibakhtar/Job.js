'use client'
import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Chart = () => {
    useEffect(() => {
        const options = {
            yaxis: {
                show: false,
                labels: {
                    formatter: function (value: string) {
                        return value;
                    }
                }
            },
            chart: {
                height: "100%",
                maxWidth: "100%",
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#BB2649",
                    gradientToColors: ["#BB2649"],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 6,
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: -26
                },
            },
            series: [
                {
                    name: "Applied",
                    data: [300, 232, 423, 323, 321, 232, 222, 232, 323, 243, 0, 0],
                    color: "#BB2649",
                },
                {
                    name: "Got offer",
                    data: [243, 200, 300, 243, 213, 123, 197, 196, 298, 156, 0, 0],
                    color: "#CC1890",
                },
            ],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
        };

        const chart = new ApexCharts(document.getElementById("main-chart"), options);
        chart.render();

        // Cleanup on component unmount
        return () => {
            chart.destroy();
        };
    }, []); // Empty dependency array to run effect only once

    return (
        <div className="m-auto max-w-9/12 w-9/12 h-[30rem] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
            <div className="flex justify-between mb-5">
                <div>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Year 2024</p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                    23%
                    <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                    </svg>
                </div>
            </div>
            <div id="main-chart"/>
        </div>
    );
}

export default Chart;
