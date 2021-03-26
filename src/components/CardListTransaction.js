import React from "react";
import { useHistory } from "react-router-dom";
import { currency as cr } from "../utils/currency";
import { naturalText as nt } from "../utils/naturalText";
import { date as dt } from "../utils/date";

import CardTransaction from "./shared/CardTransaction";

function CardListTransaction({ data = [] }) {
  const history = useHistory();

  const handleOnClick = (id) => {
    history.push(`/transaction-detail/${id}`);
  };

  return (
    <>
      {data.map((item) => {
        const title = `${nt(item.sender_bank)} → ${nt(item.beneficiary_bank)}`;
        const subtitle = nt(item.beneficiary_name);
        const detail = `${cr(item.amount)} • ${dt(item.created_at)}`;
        const status = item.status;

        return (
          <div key={item.id}>
            <CardTransaction
              title={title}
              subtitle={subtitle}
              detail={detail}
              status={status}
              onClick={() => handleOnClick(item.id)}
            />
          </div>
        );
      })}
    </>
  );
}

export default CardListTransaction;
