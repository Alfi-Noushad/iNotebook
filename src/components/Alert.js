import React, { useEffect, useState } from 'react';

export const Alert = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
         setTimeout(() => {
            setVisible(false);
        }, 3000);
    })
    return (
        visible && (
            <div className="alert alert-primary fade-alert" role="alert">
                {props.message}
            </div>
        )
    );
};

export default Alert
