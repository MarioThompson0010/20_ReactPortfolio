import React from "react";
function Header(props) {
    return (<div>
        <div>Email: MarioThompson0010@gmail.com</div>
        <div>Phone: 801-822-4485</div>
        {props.children}
    </div>);
}
export default Header;