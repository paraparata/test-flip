import React from "react";
import { currency as cr } from "../utils/currency";
import { naturalText as nt } from "../utils/naturalText";
import { date as dt } from "../utils/date";

import Icon from "./shared/Icon";
import icons from "../assets/iconList";

function CardSummary({ data }) {
  const detailData = {
    sender: {
      name: "PENGIRIM",
      childs: [nt(data.sender_bank)],
    },
    beneficiary: {
      name: "PENERIMA",
      childs: [
        nt(data.beneficiary_bank),
        data.account_number,
        nt(data.beneficiary_name),
      ],
    },
    amount: {
      name: "NOMINAL",
      childs: [cr(data.amount), `Kode Unik: ${data.unique_code}`],
    },
    remark: {
      name: "CATATAN",
      childs: [data.remark],
    },
    date: {
      name: "WAKTU DIBUAT",
      childs: [dt(data.created_at)],
    },
  };

  return (
    <div
      className="card card-summary bg-white"
      style={{ "--strip-color": "none", width: "auto" }}
    >
      <div>
        <Icon icon={icons.inboxFill} color="#fd6542" size="58" />
      </div>
      <div>
        {Object.entries(detailData).map(([key, val]) => {
          return (
            <div key={key} className="card-summary-section">
              <span>{val.name}</span>
              {val.childs.map((child) => {
                return <span key={val.childs.indexOf(child)}>{child}</span>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSummary;
