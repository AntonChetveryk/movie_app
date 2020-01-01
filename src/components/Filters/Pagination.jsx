import React from "react";

export default class Pagination extends React.Component {
  handleClick = newPage => {
    return () => {
      this.props.onChangePage(newPage);
    };
  };
  render() {
    const { page, total_pages } = this.props;

    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleClick(page - 1)}
            disabled={page === 1}
          >
            Назад
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleClick(page + 1)}
            disabled={page === total_pages}
          >
            Вперед
          </button>
        </div>
        <div className="total-pages mt-2">{`${page} из ${total_pages}`}</div>
      </div>
    );
  }
}
