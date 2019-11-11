import React from 'react';
import styles from './StatisticItem.module.css';
import CanvasJSReact from '../../assets/lib/canvasjs/canvasjs.react';

const StatisticItem = (props) => {
    const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    CanvasJS.addColorSet('lightColorSet', [
            '#E0FFFF',
            '#FAEBD7',
            '#FFF5EE'
        ]);

    let sorted = props.data.sort((first, second) => first.y - second.y);
    const min = sorted[0].y;
    const max = sorted[sorted.length - 1].y;

    const options = {
        animationEnabled: true,
        animationDuration: 5000,
        exportEnabled: true,
        zoomEnabled: true,
        zoomType: 'xy',
        backgroundColor: '#a600ed',
        exportFileName: `statistic_${props.label}_${props.date}`,
        colorSet: 'lightColorSet',
        title: {
            text: props.label,
            fontColor: 'white',
            margin: 50,
            fontSize: 25
        },
        toolTip: {
            enabled: true,
            animationEnabled: true,
            backgroundColor: '#4B0082',
            cornerRadius: 10,
            fontColor: 'white',
            borderColor: 'white',
            contentFormatter: function (e) {
                const data = e.entries[0].dataPoint;
                return `<div style="text-align: center">${data.x} hours<br/>Temperature: ${data.y} ${props.metric}</div>`

            }
        },
        axisY: {
            title: `${props.axisY} ${props.metric}`,
            titleFontColor: 'white',
            tickColor: 'white',
            tickLength: 8,
            labelFontColor: 'white',
            lineColor: '#98ff98',
            lineThickness: 5,
            includeZero: false,
            interval: (max - min)/7,
            gridColor: '#98ff98'
        },
        axisX: {
            title: 'Hours',
            titleFontColor: 'white',
            intervalType: 'hour',
            interval: 2,
            valueFormatString: "#':00'",
            tickColor: 'white',
            tickLength: 12,
            labelFontColor: 'white',
            lineColor: '#98ff98',
            lineThickness: 5
        },
        data: [{
            lineThickness: 3,
            markerThickness: 3,
            markerColor: '#544682',
            type: "line",
            dataPoints: props.data.map(item => {
                const {
                    time: x,
                    value: y
                } = item;
                return {x, y};
            })
        }]
    };


    return (
        <div className={styles.wrapper}>
            <CanvasJSChart options={options}/>
        </div>
    )
};

export default StatisticItem;