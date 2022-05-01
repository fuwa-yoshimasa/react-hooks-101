import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { DELETE_EVENT } from "../actions";

const Event = ({ event, dispatch }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`削除？ ID=${event.id}`);
        if (result) {
            dispatch({ type: DELETE_EVENT, id: event.id });
        }
    };
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>
                    削除
                </button>
            </td>
        </tr>
    );
};

export default Event;
