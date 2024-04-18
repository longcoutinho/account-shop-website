import { HTTP_STATUS } from "@/constants";
import { IPaymentMethodRes } from "@/interfaces/response/rechargeGameCard";
import {
  requestGetListPaymentMethod,
  requestGetListTier,
  requestGetToken,
} from "@/services/rechargeGameCard";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import Iconify from "../Iconify";
import { useSnackbar } from "notistack";
import { useTranslation } from "next-i18next";

interface IProps {
  isQuick?: boolean;
}

const TopupTab = ({ isQuick }: IProps) => {
  const { t } = useTranslation("common");
  const { enqueueSnackbar } = useSnackbar();
  const [listTiers, setListTiers] = useState<any[]>([]);
  const [tierSelected, setTierSelected] = useState<any>();
  const [cardCode, setCardCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openModalQr, setOpenModalQr] = useState<boolean>(false);
  const [token, setToken] = useState("");
  const [otp, setOtp] = useState("");
  const [listPaymentMethod, setListPaymentMethod] = useState<
    IPaymentMethodRes[]
  >([]);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethodRes>();

  useEffect(() => {
    renderListTiers();
    renderListPaymentMethod();
  }, []);

  const renderListTiers = async () => {
    try {
      const res = await requestGetListTier();
      if (res?.status === HTTP_STATUS.OK) {
        setListTiers(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setOpenModalQr(false);
    setOtp("");
  };

  const renderListPaymentMethod = async () => {
    try {
      const res = await requestGetListPaymentMethod();
      if (res?.status === HTTP_STATUS.OK) {
        setListPaymentMethod(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async () => {
    if (tierSelected && paymentMethod && cardCode) {
      setOpenModalQr(true);
      setTimeout(() => {
        toast.success("Thanh toán thành công");
      }, 4000);
    }
  };
  const handleRecharge = async () => {
    if (otp && cardCode) {
      try {
        setLoading(true);
        const res = await requestGetToken(cardCode, otp);
        console.log(res);
        if (res?.status === HTTP_STATUS.OK) {
          setToken(res.data);
          toast.success("Thành công");
        } else {
          toast.error("Không thành công");
        }
        setLoading(false);
        // handleClose();
        setCardCode("");
        setOtp("");
      } catch {
        setLoading(false);
        toast.error("Không thành công");
      }
    }
  };
  const onCopy = () => {
    enqueueSnackbar(t("COPIED"));
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(token ? token : "");
    }
  };
  return (
    <div className="w-full">
      {/* pick card */}
      <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4">
        {t("CHOOSE_PACKAGE")}
      </p>
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {listTiers?.map((g) => (
          <div
            key={g.id}
            onClick={() => setTierSelected(g)}
            className={`w-full rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] ${
              g.id === tierSelected?.id
                ? " border-[#f3a44a] shadow-md border-2"
                : " border-[#00000038] border-2"
            }`}
          >
            <div className="bg-[url(/img/diamond-bg.jpg)] bg-cover bg-no-repeat rounded-t-lg bg-center relative">
              <Image
                src={g.image}
                alt="game"
                width={135}
                height={100}
                className="w-full h-[150px] rounded-t-lg m-auto"
              />
              <div className=" flex absolute bottom-0 left-1/2 -translate-x-1/2 ">
                <Image
                  src={"/img/diamond.png"}
                  alt="diamond"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-sm text-yellow-400 mb-2">{g.amount}</p>
              </div>
            </div>
            <p className="text-center text-sm my-2 hover:text-[#f3a44a]">
              {g.price?.toLocaleString("vi-VN") + g.currency}
            </p>
          </div>
        ))}
      </div>
      {/* igg id */}
      <div className=" w-full">
        <div className="flex mt-8 gap-4 items-center">
          <p className="text-base font-semibold min-w-16">IGG ID: </p>
          <input
            className="border border-gray-300 rounded h-10"
            value={cardCode}
            onChange={(e) => setCardCode(e.target.value)}
          />
        </div>
        {isQuick && (
          <div className="flex mt-4 sm:mt-8 gap-4 items-center flex-wrap">
            <p className="text-base font-semibold min-w-16">OTP: </p>
            <div className="relative">
              <input
                className="border border-gray-300 rounded h-10"
                type="text"
                value={otp}
                maxLength={6}
                onChange={(e) => setOtp(e.target.value)}
              />{" "}
              <p className="absolute -bottom-6 left-0 whitespace-nowrap text-xs text-blue-600 mt-3">
                (* {t("WARNING_SENT_OTP")})
              </p>
            </div>
            <p
              className="text-[#e6a357] cursor-pointer underline"
              onClick={handleRecharge}
            >
              {t("GET_CODE")}
            </p>
          </div>
        )}
      </div>
      {token && (
        <div className="text-wrap text-center w-full mt-4">
          <span>Token của bạn:</span>
          <span className="ml-3 font-semibold">
            {token?.slice(0, 8) + "..." + token?.slice(-8)}
          </span>
          <CopyToClipboard text={token} onCopy={onCopy}>
            <Tooltip title="Copy">
              <IconButton>
                <Iconify icon={"eva:copy-fill"} width={24} height={24} />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
        </div>
      )}
      {/* pick paymemt method */}
      <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-8">
        {t("SELECT_PAYMENT")}
      </p>
      <div className="flex flex-wrap gap-3">
        {listPaymentMethod?.map((e) => (
          <div
            key={e.id}
            onClick={() => setPaymentMethod(e)}
            className={` min-w-24 w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] ${
              e.id === paymentMethod?.id
                ? " border-[#f3a44a] shadow-md border-2"
                : " border-[#00000038] border-2"
            }`}
          >
            <Image
              src={e.image}
              alt="game"
              width={135}
              height={100}
              className="w-full h-[100px] rounded-t-lg"
            />

            <p className="text-center text-sm my-2 hover:text-[#f3a44a]">
              {e.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-4 items-center">
        <Button
          onClick={handleSubmit}
          className={`!w-32 !bg-[#052d75] !text-white !min-h-11 !mt-4  
          ${
            tierSelected && paymentMethod && (isQuick ? otp : cardCode)
              ? "!cursor-pointer !hover:bg-[#30466b]"
              : "!cursor-not-allowed !opacity-50 !hover:bg-[#052d75] !hover:text-white"
          }
          `}
        >
          {loading && (
            <CircularProgress size={20} color="inherit" className="mr-2" />
          )}
          {t("CONFIRM")}
        </Button>
      </div>

      {openModalQr && (
        <Modal
          open={openModalQr}
          onClose={handleClose}
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
          <Box sx={style}>
            <div className="w-full flex justify-center">
              <Image
                src={"/img/vietqr.jpg"}
                alt="qr"
                width={500}
                height={500}
              />
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};
export default TopupTab;
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
