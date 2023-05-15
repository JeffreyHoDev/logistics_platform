import { PieChart } from '../../components/pie/piechart.component'
import { DashboardItemWrapper } from '../../components/dashboard-item-wrapper/dashboard-item-wrapper.component'
import { LineChartComponent } from '../../components/linechart/linechart.component'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import "./dashboard.styles.css"
import { DataTableComponent } from '../../components/datatable/datatable.component';

export const DashboardPage = () => {
    return (
        <>
            <div className='dashboard-page'>
                <div className='dashboard-dates-query-container'>
                    <InputGroup className="mb date-input">
                        <InputGroup.Text id="dashboard-start-date">Start Date</InputGroup.Text>
                        <Form.Control
                        placeholder="Start Date"
                        aria-label="Start Date"
                        aria-describedby="dashboard-start-date"
                        type="date"
                        />
                    </InputGroup>
                    <InputGroup className="mb date-input">
                        <InputGroup.Text id="dashboard-end-date">End Date</InputGroup.Text>
                        <Form.Control
                        placeholder="End Date"
                        aria-label="End Date"
                        aria-describedby="dashboard-end-date"
                        type="date"
                        />
                    </InputGroup>
                    <Button variant="outline-primary">Search</Button>
                </div>
                <div className='dashboard-page-items-container'>
                    <DashboardItemWrapper>
                        <PieChart/>
                    </DashboardItemWrapper>
                    <DashboardItemWrapper>
                        <LineChartComponent/>
                    </DashboardItemWrapper>
                </div>
                <DataTableComponent />
            </div>
        </>
    )
}
