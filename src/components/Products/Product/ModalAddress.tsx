import { style } from "@/components/BuyCard/Games";
import ResultTransaction from "@/components/History/ResultTransaction";
import { LoadingButton } from "@mui/lab";
import { Backdrop, Box, Button, Input, Modal } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IProps {
  open: boolean;
  onClose: () => void;
}
const ModalAddress = ({ open, onClose }: IProps) => {
  const { t } = useTranslation("common");
  const [isDone, setIsDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitForm = async (data: any) => {
    //   console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsDone(true);
    }, 1500);
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
      <Box sx={style} className="!w-[600px]">
        {!isDone ? (
          <form
            onSubmit={handleSubmit((data) => onSubmitForm(data))}
            className="flex items-center flex-col"
          >
            <div className="w-full flex flex-col justify-center gap-3">
              <p>{t("DELIVERY_INFORMATION")}</p>
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("RECIPIENT_NAME")}
                {...register("name", { required: true })}
              />
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("PHONE_NUMBER")}
                {...register("phoneNumber", { required: true })}
              />
              <p>{t("ADDRESS")}</p>
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("NO_STREET")}
                {...register("street", { required: true })}
              />
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("DISTRICT")}
                {...register("district", { required: true })}
              />
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("CITY")}
                {...register("city", { required: true })}
              />
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("COUNTRY")}
                {...register("country", { required: true })}
              />
              {(errors.country ||
                errors.city ||
                errors.district ||
                errors.street ||
                errors.phoneNumber ||
                errors.name) && (
                <p className="text-red-500">{t("ENTER_ALL_INFORMATION")}</p>
              )}
            </div>
            <LoadingButton
              loading={loading}
              loadingPosition="start"
              type="submit"
              className={`!w-fit !px-10 !mx-auto !bg-[#052d75] !text-white !min-h-11 !mt-6 !capitalize !cursor-pointer !hover:bg-[#30466b]`}
            >
              {t("SUBMIT")}
            </LoadingButton>
          </form>
        ) : (
          <div className="flex items-center flex-col">
            <ResultTransaction isSuccess />
            <Button
              onClick={onClose}
              className={`!w-fit !px-10 !mx-auto !bg-[#052d75] !text-white !min-h-11 !mt-6 !capitalize !cursor-pointer !hover:bg-[#30466b]`}
            >
              {t("CONTINUE_SHOPPING")}
            </Button>
          </div>
        )}
      </Box>
    </Modal>
  );
};
export default ModalAddress;
