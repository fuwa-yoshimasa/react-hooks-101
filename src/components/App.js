import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div>
          <label htmlFor="formEventTitle" className="form-label">
            タイトル
          </label>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div>
          <label htmlFor="formEventBody" className="form-label">
            ボディ
          </label>
          <textarea className="form-control" id="formEventBody" />
        </div>

        <button class="btn btn-primary">イベント作成</button>
        <button class="btn btn-danger">全イベント削除</button>

        <h4>イベント一覧</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
