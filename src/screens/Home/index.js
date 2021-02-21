import React from 'react'
import { TopSale, TotalOrderToday, TotalRevenueToday } from './components';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            Home
            <Row className="jss859">
                <Col span={8} className='TotalRevenueToday'>
                    <TotalRevenueToday />
                </Col>
                <Col span={8} className='TotalOrderToday'>
                    <TotalOrderToday />
                </Col>
                <Col span={8} className=''>

                </Col>
            </Row>
            <div>
                <TopSale />
            </div>
        </div>
    )
}

export default Home;