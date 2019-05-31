import React from 'react';

export function Footer(props) {
    const rootHeight = document.getElementById('root').clientHeight;
    console.log('Root height: ' + rootHeight)
    console.log('Wrapper size: ' + props.wrapperSize);
    return (
        <footer className={"bg-white " + (props.wrapperSize <= rootHeight ? 'fixed-bottom' : '')}>
            <h6 className="text-center text-muted">'Gr8 Books' by Richard Pahmp, Christian Barlöf  & Eric Grevillius</h6>
        </footer>
    );
}
