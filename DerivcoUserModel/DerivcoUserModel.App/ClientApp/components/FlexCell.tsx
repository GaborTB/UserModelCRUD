import * as React from 'react';
import cellWidths from './CellWidths';

type FlexCellProps = {
    colNo: number,
    lightgreen?: boolean
}

export default class FlexCell extends React.Component<FlexCellProps, any> {
    render() {
        const cellWidth = cellWidths[this.props.colNo]
        const cellWidthSum = cellWidths.reduce((a, b) => a + b, 0)
        const cellWidthInPercentage = cellWidth / cellWidthSum * 100

        const flexString = `0 0 ${cellWidthInPercentage}%`

        return <div
            style={{
                flex: flexString,
                padding: '2px',
                backgroundColor: this.props.lightgreen ? 'lightgreen' : ''
            }}
        >
            {this.props.children}
        </div>
    }
}
