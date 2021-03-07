import { useState } from 'react';
import { Pagination } from 'antd';


function CustomPagination(props) {

    return (
        <div class="row mt-5">
            <div class="col text-center">
                <Pagination
                    onChange={(page, pageSize) => {
                        props.onPageChange((page-1)*pageSize, pageSize)
                    }}
                    showSizeChanger={false}
                    defaultCurrent={1}
                    pageSize={10}
                    total={props.total}
                    hideOnSinglePage={true}
                />
            </div>
        </div>
    );
}

export default CustomPagination;