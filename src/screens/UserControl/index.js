import {useEffect} from 'react';
import { TotalAccount, NewAccountInMonth, Account} from './components';
import actions from '../../redux/actions/admin';
import {connect} from 'react-redux';
import { Row, Col } from 'antd';


function UserControl(props){
    useEffect(()=>{
        props.fetchAdmin();
    },[])
    // console.log(props)
    return(
        
        <div>
            UserControl
            <hr/>
            <Row className="jss859">
                <Col span={8} className='TotalRevenueToday'>
                    <NewAccountInMonth/>
                </Col>
                <Col span={8} className='TotalOrderToday'>
                    <TotalAccount/>
                </Col>
                <Col span={8} className=''>

                </Col>
            </Row>
            <div>
                <Account account = {props.admin}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=> {
    return{
        admin: state.admin.account
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAdmin: () => { 
            dispatch(actions.fetchAdmin())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserControl);