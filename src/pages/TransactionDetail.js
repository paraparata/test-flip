import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../stores/Store";

import Button from "../components/shared/Button";
import CardSummary from "../components/CardSummary";
import CardTransaction from "../components/shared/CardTransaction";
import Header from "../components/Header";

function TransactionDetail({ match }) {
  const {
    params: { transactionId },
  } = match;
  const { state } = useContext(Context);
  const history = useHistory();

  const data = state.transactionsData.filter(
    (item) => item.id === transactionId
  )[0];
  const handleOnClickBack = () => {
    history.push("/");
  };

  return (
    <div className="layout">
      <div className="container">
        <Header title="Detail Transaksi" />
        <div className="wrapper">
          <CardTransaction
            title={`ID Transaksi:#${data.id}`}
            status="SUCCESS"
            strip={false}
            hoverable={false}
          />
        </div>
        <div className="wrapper">
          <CardSummary data={data} />
        </div>
        <Button btnStyle="flat" onClick={handleOnClickBack}>
          Kembali
        </Button>
      </div>
    </div>
  );
}

export default TransactionDetail;
