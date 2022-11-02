import React, { useState } from 'react'

const Tabs = (props) => {
    const [idxSelected, setIdxSelected] = useState(0);

    const onClickHandler = (e, value) => {
        setIdxSelected(value);
    }


    const tabStyle = {
        padding: '12px 15px',
        display: 'inline-block',
        border: '1px solid black',
        margin: '2px'
    }
    const contentStyle = {
        border: '1px solid black',
        width: '16rem',
        marginLeft: '9rem'
    }

    return (
        <div>
            {
                props.tabSections.map((tab, i) => {
                    return (
                        <div onClick={(e) => onClickHandler(e, i)} style={tabStyle}>
                            <p key={i}>{tab.label}</p>
                        </div>
                    )
                })
            }
            <div style={contentStyle}>
                {<p>{props.tabSections[idxSelected].content}</p>}
            </div>
        </div>
    );
}

export default Tabs