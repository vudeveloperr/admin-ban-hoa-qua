import { TotalAccount, NewAccountInMonth, Account} from './components';
import { Row, Col } from 'antd';
function UserControl(props){
    return(
        <div>
            UserControl
            <hr/>
            <Row className="jss859">
                <Col span={8} className='TotalRevenueToday'>
                    < NewAccountInMonth/>
                </Col>
                <Col span={8} className='TotalOrderToday'>
                <TotalAccount />
                </Col>
                <Col span={8} className=''>

                </Col>
            </Row>
            <div>
            <Account />
            </div>
        </div>
    );
}

export default UserControl;