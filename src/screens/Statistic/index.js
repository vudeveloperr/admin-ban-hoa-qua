import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



function Statistic(props) {
    return (
        <div>
            Statistic
            <hr />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                Download
            </Button>
        </div>
    );
}

export default Statistic;