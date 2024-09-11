import { style } from "@/components/BuyCard/Games";
import { RootState } from "@/redux/store";
import { LoadingButton } from "@mui/lab";
import { Backdrop, Box, Input, Modal } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Image from "next/image";
import { PAYMENT_METHOD_CODE } from "@/constants/payment";
import { IPaymentMethodRes } from "@/interfaces/response/product";

interface IProps {
  open: boolean;
  onClose: () => void;
}
const ModalDepositEP = ({ open, onClose }: IProps) => {
  const { t } = useTranslation("common");
  const { paymentMethods } = useSelector((state: RootState) => state.payment);

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<IPaymentMethodRes>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitForm = async (data: any) => {
    //   console.log(data);
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setIsDone(true);
    // }, 1500);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box
        sx={style}
        className="!w-[600px] !max-h-[80dvh] !h-fit !overflow-y-auto"
      >
        <p className="text-center font-bold text-2xl mb-4">{t("DEPOSIT_EP")}</p>
        <form
          onSubmit={handleSubmit((data) => onSubmitForm(data))}
          className="flex items-center flex-col"
        >
          <div className="w-full flex flex-col justify-center gap-3">
            <p className="text-center">
              {t("YOUR_BALANCE")}: {0} EP
            </p>
            <Input
              className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
              placeholder={t("AMOUNT")}
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <p className="text-red-500">{t("ENTER_ALL_INFORMATION")}</p>
            )}
          </div>
          <div className=" w-full">
            <p className="w-fit py-2 px-4 my-4 mx-auto">
              {t("SELECT_PAYMENT")}:
            </p>
            <div className=" w-full flex justify-center flex-wrap gap-3">
              {paymentMethods &&
                paymentMethods?.map((g) => (
                  <div
                    key={g?.id}
                    onClick={() => {
                      if (g?.isActive === 1) {
                        setSelectedPayment(g);
                      }
                    }}
                    className={` p-0.5 w-52 py-2 rounded-lg ${
                      g === selectedPayment
                        ? " border-[#f3a44a] shadow-md border-2 text-[#f3a144]"
                        : " border-[#1414141f] border-2"
                    } ${
                      g?.isActive === 1
                        ? "cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                        : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    <Image
                      src={g?.image ? g?.image : ""}
                      alt="card"
                      width={150}
                      height={100}
                      className=" mx-auto h-20 w-24 mb-3"
                    />
                    <p className="px-1 text-center">
                      ({g?.currency}) {PAYMENT_METHOD_CODE[g.code]}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            type="submit"
            className={`!w-fit !px-10 !mx-auto !bg-[#052d75] !text-white !min-h-11 !mt-6 !capitalize  ${
              selectedPayment
                ? "!cursor-pointer !hover:bg-[#30466b]"
                : "!cursor-not-allowed !opacity-50 !hover:bg-[#052d75] !hover:text-white"
            }`}
          >
            {t("DEPOSIT")}
          </LoadingButton>
        </form>
      </Box>
    </Modal>
  );
};
export default ModalDepositEP;
