import React, { PropsWithChildren } from 'react';
import 'src/components/Container/container.scss';

const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;