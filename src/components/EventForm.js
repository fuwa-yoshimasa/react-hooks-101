import React, { useContext } from "react";
import { useState } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions";
import { timeCurrentIso8601 } from "../utils";
import AppContext from "../contexts/AppContext";

const EventForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { state, dispatch } = useContext(AppContext);

    const addEvent = (e) => {
        e.preventDefault();
        dispatch({
            type: CREATE_EVENT,
            title,
            body,
        });
        dispatch({
            type: ADD_OPERATION_LOG,
            description: "イベント作成",
            operatedAt: timeCurrentIso8601(),
        });

        setTitle("");
        setBody("");
    };

    const deleteAllEvents = (e) => {
        e.preventDefault();

        const result = window.confirm("全削除？");
        if (result) {
            dispatch({ type: DELETE_ALL_EVENTS });
            dispatch({
                type: ADD_OPERATION_LOG,
                description: "イベント削除",
                operatedAt: timeCurrentIso8601(),
            });
        }
    };

    const deleteAllLogs = (e) => {
        e.preventDefault();
        dispatch({ type: DELETE_ALL_OPERATION_LOGS });
    };
    const unCreatable = title === "" || body === "";
    const unDeletable = state.events.length === 0;
    const unDeletableLogs = state.operationLogs.length === 0;
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div>
                    <label htmlFor="formEventTitle" className="form-label">
                        タイトル
                    </label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="formEventBody" className="form-label">
                        ボディ
                    </label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
                    イベント作成
                </button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unDeletable}>
                    全イベント削除
                </button>
                <button className="btn btn-danger" onClick={deleteAllLogs} disabled={unDeletableLogs}>
                    全ログ削除
                </button>
            </form>
        </>
    );
};

export default EventForm;
