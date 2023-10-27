

import { Breadcrumb } from 'antd';

const index = ({text}) => {
    return (
        <Breadcrumb
            items={[
                {
                    title: 'Bosh sahifa',
                    href: '/dashboard'
                },
                
                {
                    title: `${text}`,
                },
            ]}
        />
    );
};

export default index;