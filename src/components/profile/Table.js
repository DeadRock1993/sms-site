import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Table = (props) => {
  const { deleteRow } = props;
  const columns = [
    {
      Header: "ID",
      accessor: "id", // String-based value accessors!
      sortable: false,
      filterable: false,
      style: {
        textAlign: "center",
      },
      width: 100,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      Header: "Имя",
      accessor: "name", // String-based value accessors!
      filterable: true,
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Телефон",
      accessor: "phone",
      filterable: true,
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Действия",
      filterable: false,
      sortable: false,
      width: 100,
      minWidth: 100,
      maxWidth: 100,
      style: {
        textAlign: "center",
      },
      Cell: (props) => {
        return (
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteRow(props.original.id);
            }}
          >
            X
          </button>
        );
      },
    },
  ];
  return (
    <div className="table">
      <ReactTable
        data={props.data}
        columns={columns}
        noDataText={"Таблица пуста"}
        defaultPageSize={20}
        previousText="Предыдущий"
        nextText="Следующий"
        loadingText="Загрузка..."
        pageText="Страница"
        ofText="из"
        rowsText="строк"
      />
    </div>
  );
};

export default Table;
