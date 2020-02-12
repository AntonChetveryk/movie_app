import React from "react";

export default class Detail extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="row details">
          <div className="col">
            <b>Статус</b>
          </div>
          <div className="col ">{item.status}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Дата выхода</b>
          </div>
          <div className="col">{item.release_date}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Продолжительность</b>
          </div>
          <div className="col">{item.runtime}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Язык оригинала</b>
          </div>
          <div className="col">{item.original_language}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Страна</b>
          </div>
          <div className="col">Column</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Бюджет</b>
          </div>
          <div className="col">{item.budget}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Сборы</b>
          </div>
          <div className="col">{item.revenue}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Компания</b>
          </div>
          <div className="col">Column</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Жанры</b>
          </div>
          <div className="col">Column</div>
        </div>
      </div>
    );
  }
}
