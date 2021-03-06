import { useState } from 'react';
import { Pagination } from 'antd';


function CustomPagination(props) {

    return (
        <div class="row mt-5">
            <div class="col text-center">
                <Pagination
                    onChange={props.onPageChange}
                    showSizeChanger={false}
                    defaultCurrent={1}
                    pageSize={12}
                    total={props.total}
                    hideOnSinglePage={true}
                />
            </div>
        </div>
    );
}

export default CustomPagination;