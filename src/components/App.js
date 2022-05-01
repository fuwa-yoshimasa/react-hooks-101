import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer, useState } from "react";

import Event from "./Event";
import reducers from "../reducers";

const App = () => {
    const [state, dispatch] = useReducer(reducers, []);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const addEvent = (e) => {
        e.preventDefault();
        dispatch({
            type: "CREATE_EVENT",
            title,
            body,
        });

        setTitle("");
        setBody("");
    };

    const deleteAllEvents = (e) => {
        e.preventDefault();

        const result = window.confirm("全削除？");
        if (result) {
            dispatch({ type: "DELETE_ALL_EVENTS" });
        }
    };

    const unCreatable = title === "" || body === "";

    const unDeletable = state.length === 0;

    return (
        <div className="container-fluid">
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

                <h4>イベント一覧</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タイトル</th>
                            <th>ボディ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((event, index) => {
                            return <Event key={index} event={event} dispatch={dispatch} />;
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default App;
