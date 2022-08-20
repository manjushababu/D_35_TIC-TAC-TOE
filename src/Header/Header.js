import React from "react";

import { Wrapper } from './style';

function BaseLayout({ children }) {
    return (
        <Wrapper>
            <div>
                <h1>TIC TAC TOE 🎲</h1>
                <>{children}</>
            </div>
        </Wrapper>
    )
}

export default BaseLayout;
