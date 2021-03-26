import React, { useContext } from "react";
import { Context } from "../stores/Store";
import { currency as cr } from "../utils/currency";

import CardListTransaction from "../components/CardListTransaction";
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";

function TransactionList() {
  const { state } = useContext(Context);

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
          <ToolBar />
        </div>
        <main className="wrapper content">
          <CardListTransaction data={state.transactionsData} />
        </main>
      </div>
    </div>
  );
}

export default TransactionList;
