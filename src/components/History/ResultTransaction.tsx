import { useTranslation } from "next-i18next";
import React from "react";

interface IProps {
  isSuccess?: boolean;
}

const ResultTransaction = ({ isSuccess }: IProps) => {
  const { t } = useTranslation("common");
  return (
    <div className="result-transaction">
      {isSuccess ? (
        <div className="wrapper">
          <svg
            className="checkmark success"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark_circle_success"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark_check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              stroke-linecap="round"
            />
          </svg>
          <p className="font-bold text-center text-2xl text-green-700">
            {t("TRANSACTION_SUCCESS")}
          </p>
        </div>
      ) : (
        <div className="wrapper">
          <svg
            className="checkmark error"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark_circle_error"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark_check"
              stroke-linecap="round"
              fill="none"
              d="M16 16 36 36 M36 16 16 36
"
            />
          </svg>
          <p className="font-bold text-center text-2xl text-red-700">
            {t("TRANSACTION_FAIL")}
          </p>
        </div>
      )}
    </div>
  );
};
export default ResultTransaction;
