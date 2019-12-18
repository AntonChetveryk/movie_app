import React from "react";

export default class Pagination extends React.Component {
  render() {
    const { onChangePage, page, total_pages } = this.props;

    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePage.bind(null, page - 1)}
            disabled={page === 1}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePage.bind(null, page + 1)}
          >
            Вперед
          </button>
        </div>
        <div className="total-pages mt-2">{`${page} из ${total_pages}`}</div>
      </div>
    );
  }
}
