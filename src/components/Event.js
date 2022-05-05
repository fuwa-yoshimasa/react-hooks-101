import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { timeCurrentIso8601 } from "../utils";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../actions";
import AppContext from "../contexts/AppContext";

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext);
    const handleClickDeleteButton = () => {
        const result = window.confirm(`削除？ ID=${event.id}`);
        if (result) {
            dispatch({ type: DELETE_EVENT, id: event.id });
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `イベント削除 ID=${event.id}`,
                operatedAt: timeCurrentIso8601(),
            });
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
