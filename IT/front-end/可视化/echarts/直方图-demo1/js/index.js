var myChart = echarts.init(document.getElementById('main'));

var option = {
    // 标题
    title: {
        text: 'Echarts 入门示例'
    },
    legend: {
        data: ['销量']
    },
    // 工具箱
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // x轴
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '销量',
            type: 'bar',
            barWidth: '40%',
            data: [10, 52, 200, 334, 390, 330, 220]
        },
        {
            name: '产量',
            type: 'line',
            data: [7, 223, 122, 333, 444, 552, 123]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);