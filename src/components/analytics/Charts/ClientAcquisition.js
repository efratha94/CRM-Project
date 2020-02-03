import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { PieChart, Pie, Tooltip, Cell} from 'recharts';

const COLORS = ['#039BE5','#D81B60', '#FFCA28', '#4DD0E1'];



@inject("person", "clients")
@observer

class ClientAcquisition extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        this.props.clients.acquisitionDate()
    }

    createChartDataFour(array) {

        let dataArray = []
        array.map(item => dataArray.push(item))
        return dataArray
    }

    render() {
        const byAcquisition = this.props.clients.clientsByAcquisition
        const chartDataFour = byAcquisition ? this.createChartDataFour(byAcquisition) : null

        return (
            <div>
                <h1>Client Acquisition By Date</h1>
                <PieChart width={500} height={500}>

                    <Pie data={chartDataFour} cx={200} cy={200} outerRadius={80} fill="#8884d8" nameKey="time" dataKey="count" labelLine={true} label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index
                    }) => {
                        const RADIAN = Math.PI / 180;
                        // eslint-disable-next-line
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        // eslint-disable-next-line
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        // eslint-disable-next-line
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text
                                x={x}
                                y={y}
                                fill={COLORS[index % COLORS.length]}
                                textAnchor={x > cx ? "start" : "end"}
                                dominantBaseline="central"
                            >
                                {chartDataFour[index].time}: {chartDataFour[index].count}
                            </text>
                        );
                    }}>
                        {
                            chartDataFour.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip offset={0} label="false" content="time" />
                </PieChart>
            </div>
        )
    }
}

export default ClientAcquisition