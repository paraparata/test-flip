import React, { useContext, useEffect, useState } from "react";
import { Context, ACTIONS } from "../stores/Store";
import { currency as cr } from "../utils/currency";
import { sorting } from "../utils/sorting";

import CardListTransaction from "../components/CardListTransaction";
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";

function TransactionList() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { state, dispatch } = useContext(Context);
  const dataList =
    searchText.length === 0 ? state.transactionsData : searchResult;

  // ToolBar dropdown options
  const toolBarOptions = {
    ascend: {
      name: "Nama A-Z",
      handler: () =>
        dispatch({
          type: ACTIONS.STORE_DATA,
          payload: {
            ...state,
            transactionsData: sorting(
              dataList,
              "beneficiary_name",
              "asc-string"
            ),
          },
        }),
    },
    descend: {
      name: "Nama Z-A",
      handler: () =>
        dispatch({
          type: ACTIONS.STORE_DATA,
          payload: {
            ...state,
            transactionsData: sorting(
              dataList,
              "beneficiary_name",
              "des-string"
            ),
          },
        }),
    },
    newer: {
      name: "Tanggal terbaru",
      handler: () =>
        dispatch({
          type: ACTIONS.STORE_DATA,
          payload: {
            ...state,
            transactionsData: sorting(dataList, "created_at", "asc-date"),
          },
        }),
    },
    older: {
      name: "Tanggal terlama",
      handler: () =>
        dispatch({
          type: ACTIONS.STORE_DATA,
          payload: {
            ...state,
            transactionsData: sorting(dataList, "created_at", "des-date"),
          },
        }),
    },
  };

  const handleOnSearch = (e) => {
    setSearchText(e.current.value);
  };

  useEffect(() => {
    /* If searchText does have value,
     then change data source (dataList variable) to searchResult array.
     If not, change data source to origin array.
    */ 
    if (searchText.length !== 0) {
      const result = state.transactionsData.filter((item) =>
        item.beneficiary_name.toLowerCase().includes(searchText)
      );
      setSearchResult(result);
    } else {
      dispatch({
        type: ACTIONS.STORE_DATA,
        payload: {
          ...state,
          transactionsData: state.originData,
        },
      });
    }
  }, [searchText]);

  return (
    <div className="layout">
      <div className="container">
        <Header title="Daftar Transaksi" />
        <div
          className="wrapper"
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <h2>Halo kak!</h2>
          <p>
            Kamu telah melakukan transaksi sebesar <b>{cr(state.total)}</b>{" "}
            sejak menggunakan Flip.
          </p>
        </div>
        <div className="wrapper">
          <ToolBar
            options={toolBarOptions}
            handleOnSearch={(e) => handleOnSearch(e)}
          />
        </div>
        <main className="wrapper content">
          <CardListTransaction data={dataList} />
        </main>
      </div>
    </div>
  );
}

export default TransactionList;
