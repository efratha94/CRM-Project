import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import { PieChart, Pie, Sector, Cell } from 'recharts';
import moment from "moment"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


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

    createChartDataFour(object) {
        // let dataArray = {}
        // for (let [key, value] of Object.entries(object)) {
        //     dataArray[key] = value
        // }
        // return dataArray
    }

    render() {
        const byAcquisition = this.props.clients.clientsByAcquisition
        const chartDataFour = byAcquisition ? this.createChartDataFour(byAcquisition) : null

        return (
            <div>
                {/* <PieChart width={400} height={400}>
                    <Pie data={chartDataFour} cx={200} cy={200} labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey={Object.keys(chartDataFour)}>
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart> */}
            </div>
        )
    }
}

export default ClientAcquisition