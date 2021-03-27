import React, { useContext } from "react";
import { Context, ACTIONS } from "../stores/Store";
import { currency as cr } from "../utils/currency";
import { sorting } from "../utils/sorting";

import CardListTransaction from "../components/CardListTransaction";
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";

function TransactionList() {
  const { state, dispatch } = useContext(Context);
  const toolBarOptions = {
    ascend: {
      name: "Nama A-Z",
      handler: () =>
        dispatch({
          type: ACTIONS.STORE_DATA,
          payload: {
            ...state,
            transactionsData: sorting(
              state.transactionsData,
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
              state.transactionsData,
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
            transactionsData: sorting(
              state.transactionsData,
              "created_at",
              "asc-date"
            ),
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
            transactionsData: sorting(
              state.transactionsData,
              "created_at",
              "des-date"
            ),
          },
        }),
    },
  };

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
          <ToolBar options={toolBarOptions} />
        </div>
        <main className="wrapper content">
          <CardListTransaction data={state.transactionsData} />
        </main>
      </div>
    </div>
  );
}

export default TransactionList;
