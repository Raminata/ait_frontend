import React, { useState, ChangeEvent, MouseEvent } from "react";

// описали содержимое task
interface ITask {
    name: string,
    completed: boolean
}

const Header: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <h1>Todo Header App</h1>
        </div>
    );
};

export default Header;