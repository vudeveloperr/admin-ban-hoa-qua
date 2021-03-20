import { useEffect } from "react";
import { TotalAccount, NewAccountInMonth, Account } from "./components";
import actions from "../../redux/actions/admin";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import statisticactions from "../../redux/actions/statistic";

function UserControl(props) {
  useEffect(() => {
    props.fetchAdmin();
    props.fetchTotalAcc();
  }, []);

  return (
    <div>
      UserControl
      <hr />
      <Row className="jss859">
        <Col span={8} className="TotalRevenueToday">
          <NewAccountInMonth />
        </Col>
        <Col span={8} className="TotalOrderToday">
          <TotalAccount totalacc={props.totalacc} />
        </Col>
        <Col span={8} className=""></Col>
      </Row>
      <div>
        <Account account={props.admin} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    admin: state.admin.account,
    totalacc: state.statistic.totalacc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmin: () => {
      dispatch(actions.fetchAdmin());
    },
    fetchTotalAcc: (params, callback) => {
      dispatch(statisticactions.onFetchTotalAcc(params, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserControl);
