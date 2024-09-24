import { style } from "@/components/BuyCard/Games";
import ResultTransaction from "@/components/History/ResultTransaction";
import { HTTP_STATUS } from "@/constants";
import {
  fetchListDistricts,
  fetchListProvinces,
  fetchListWards,
} from "@/redux/slices/address";
import { setTabHistory } from "@/redux/slices/state";
import { AppDispatch, RootState } from "@/redux/store";
import { PATH_PAGE } from "@/routes/path";
import { createProductOrder } from "@/services/product";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Input,
  Modal,
  TextField,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  open: boolean;
  category?: number;
  onClose: () => void;
}
const ModalAddress = ({ open, onClose, category }: IProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isDone, setIsDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { provinces, districts, wards } = useSelector(
    (state: RootState) => state.address
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({});

  const values: any = watch();

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (values?.province?.id) handleFetchDistrict();
  }, [values?.province?.id]);

  useEffect(() => {
    if (values?.district?.id) handleFetchWard();
  }, [values?.district?.id]);

  const handleFetchData = async () => {
    try {
      dispatch(fetchListProvinces());
    } catch (e) {
      console.log(e);
    }
  };

  const handleFetchDistrict = async () => {
    try {
      dispatch(fetchListDistricts(values?.province?.id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleFetchWard = async () => {
    try {
      dispatch(fetchListWards(values?.district?.id));
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const body = {
        productCategoriesList: [category],
        address:
          data?.street +
          ", " +
          data?.ward?.label +
          ", " +
          data?.district?.label +
          ", " +
          data?.province?.label,
        phoneNumber: data?.phoneNumber,
        email: data?.email,
      };
      const res = await createProductOrder(body);
      if (res?.status === HTTP_STATUS.OK) {
        setIsDone(true);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
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
        className="!w-[600px] !max-h-[80dvh] !h-fit !overflow-y-auto !max-w-[90dvw]"
      >
        {!isDone ? (
          <form
            onSubmit={handleSubmit((data) => onSubmitForm(data))}
            className="flex items-center flex-col"
          >
            <div className="w-full flex flex-col justify-center gap-3">
              <p className="text-xl font-medium text-black">
                {t("DELIVERY_INFORMATION")}
              </p>
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("RECIPIENT_NAME")}
                {...register("name", { required: true })}
              />
              <Input
                type="number"
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("PHONE_NUMBER")}
                {...register("phoneNumber", { required: true })}
              />
              <Input
                type="email"
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={"Email"}
                {...register("email", { required: true })}
              />
              <p className="text-xl font-medium text-black">{t("ADDRESS")}</p>
              <Autocomplete
                disablePortal
                options={
                  provinces
                    ? provinces?.map((e) => {
                        return { label: e?.name, id: e?.id };
                      })
                    : []
                }
                onChange={(event: any, newValue) => {
                  setValue("province", newValue);
                }}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label={t("PROVINCES")} />
                )}
              />
              <Autocomplete
                disablePortal
                options={
                  districts
                    ? districts?.map((e) => {
                        return { label: e?.name, id: e?.id };
                      })
                    : []
                }
                onChange={(event: any, newValue) => {
                  setValue("district", newValue);
                }}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label={t("DISTRICT")} />
                )}
              />
              <Autocomplete
                disablePortal
                options={
                  wards
                    ? wards?.map((e) => {
                        return { label: e?.name, id: e?.id };
                      })
                    : []
                }
                onChange={(event: any, newValue) => {
                  setValue("ward", newValue);
                }}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label={t("WARDS")} />
                )}
              />
              <Input
                className="border border-gray-300 rounded h-10 w-full pl-2 pr-10"
                placeholder={t("NO_STREET")}
                {...register("street", { required: true })}
              />
              {(errors.province ||
                errors.ward ||
                errors.district ||
                errors.street ||
                errors.phoneNumber ||
                errors.email ||
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
            <p>{t("NOTE_STATUS_ORDER")}</p>
            <p className="mt-4 font-semibold text-xs text-gray-500">
              {t("CONTACT_SUPPORT")}{" "}
              <Link
                href={"https://zalo.me/0396595014"}
                target="_blank"
                className="text-blue-500 hover:underline text-base"
              >
                https://zalo.me/0396595014
              </Link>
            </p>
            <Button
              onClick={() => {
                router.push(PATH_PAGE.history.root);
                dispatch(setTabHistory("2"));
              }}
              className={`!w-fit !px-10 !mx-auto !bg-[#052d75] !text-white !min-h-11 !mt-4 !capitalize !cursor-pointer !hover:bg-[#30466b]`}
            >
              {t("VIEW_TRANSACTION_HISTORY")}
            </Button>
          </div>
        )}
      </Box>
    </Modal>
  );
};
export default ModalAddress;
