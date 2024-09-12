import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HTTP_STATUS, PageURL } from "@/constants";
import { useTranslation } from "next-i18next";
import ResultTransaction from "../History/ResultTransaction";
import { requestCheckDepositEP } from "@/services/userService";
import { Button } from "@mui/material";

interface IProps {}
const DepositResult = ({}: IProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    handleCheckTransaction();
  }, []);

  const handleCheckTransaction = async () => {
    try {
      const response = await requestCheckDepositEP({ orderId: id as string });
      setIsDone(true);
      if (response?.status === HTTP_STATUS.OK) {
        setIsSuccess(true);
        setTimeout(() => {
          router?.push(PageURL.HOME);
        }, 1800);
      } else {
        setIsSuccess(false);
      }
    } catch (e) {
      setIsSuccess(false);
      console.log(e);
    }
  };

  return (
    <>
      {isDone && (
        <>
          {isSuccess === true ? (
            <ResultTransaction isSuccess />
          ) : isSuccess === false ? (
            <div className="flex flex-col">
              <ResultTransaction />
              <Button
                onClick={() => {
                  router.push(PageURL.HOME);
                }}
                className={`!w-[200px] !bg-[#052d75] !text-white !min-h-11 !mt-4 !mx-auto cursor-pointer !hover:bg-[#30466b] !capitalize`}
              >
                {t("BACK_TO_HOME_PAGE")}
              </Button>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};
export default DepositResult;
