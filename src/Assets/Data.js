import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const SalesOverview = {
  series: [
    {
      name: "Ample",
      data: [355, 390, 300, 350, 390, 180],
    },
    {
      name: "Pixel Admin",
      data: [280, 250, 325, 215, 250, 310],
    },
  ],
  options: {
    chart: {
      offsetY: 0,
      type: "bar",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#03c9d7", "#fb9678"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["transparent"],
      width: 5,
    },
    markers: {
      size: 5,
    },
    plotOptions: {
      bar: {
        columnWidth: "70%",
        barHeight: "70%",
        horizontal: false,
        columnWidth: "36%",
        borderRadius: 3,
        endingShape: "rounded",
        rangeBarOverlap: true,
      },
    },
    grid: {
      show: false,
      padding: {
        top: 50,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      position: "top",
      floating: true,
      horizontalAlign: "right",
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

export const CustomerData = {
  series: [
    {
      name: "Monthly Earning",
      data: [8, 5, 6, 8, 25, 9, 11, 24, 19, 16, 21, 17, 19],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#fff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      line: {
        horizontal: false,
        columnWidth: "20%",
        endingShape: "rounded",
      },
    },
  },
};

export const MonthlyEarningData = {
  series: [
    {
      name: "Monthly Earning",
      data: [8, 5, 6, 8, 25, 9, 11, 24, 19, 16, 21, 17, 19],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "column",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#fff"],
    dataLabels: {
      enabled: false,
    },

    // tooltip: {
    //   shared: false,
    //   y: {
    //     formatter: function (val) {
    //       return (val / 1000000).toFixed(0);
    //     },
    //   },
    // },
    grid: {
      show: false,
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        endingShape: "rounded",
      },
    },
  },
};

export const donut = {
  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    colors: ["#03c9d7", "#fb9678", "#f5f5f5"],
    labels: ["2020", "2021", "2019"],

    legend: {
      show: true,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              function() {
                return <ShoppingCartOutlinedIcon />;
              },
            },
          },
        },
      },
    },
  },
  series: [44, 55, 41],
};

export const RevemueChart = {
  series: [
    {
      name: "Earning",
      data: [0, 5, 6, 8, 25, 9, 11, 24],
    },
    {
      name: "Expense",
      data: [0, 3, 1, 2, 8, 1, 5, 1],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#03c9d7", "#fb9678"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 5,
    },
    // tooltip: {
    //   shared: false,
    //   y: {
    //     formatter: function (val) {
    //       return (val / 1000000).toFixed(0);
    //     },
    //   },
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    legend: {
      itemMargin: {
        horizontal: 5,
        vertical: 30,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

export const WeeklyStatsData = {
  series: [
    {
      name: "Weekly Stats",
      data: [40, 60, 50, 65],
    },
  ],
  options: {
    chart: {
      offsetX: 0,
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#03c9d7"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      line: {
        horizontal: false,
        columnWidth: "20%",
        endingShape: "rounded",
      },
    },
  },
};
