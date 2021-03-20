import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Radio ,DatePicker, Space, Row, Col} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { RangePicker } = DatePicker;

function Statistic(props) {
    return (
        <div>
            Statistic
            <hr />
            <div>
                <p/>
                <Row>
                    <Col span={1}>
                        
                    </Col>
                    <Col span={5}>
                        Export Report
                    </Col>
                    <Col span={10}>
                        <RangePicker showTime />
                    </Col>
                    <Col span={8}>
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                            Download
                        </Button>
                    </Col>
                </Row>
            </div>
            <p/>
            <div>
                <p/>
                <Row>
                    <Col span={1}>
                        
                    </Col>
                    <Col span={5}>
                        Import Report
                    </Col>
                    <Col span={10}>
                        <RangePicker showTime />
                    </Col>
                    <Col span={8}>
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                            Download
                        </Button>
                    </Col>
                </Row>
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Statistic);