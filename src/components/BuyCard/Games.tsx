import { HTTP_STATUS } from "@/constants";
import { IGamesRes } from "@/interfaces/response/rechargeGameCard";
import {
  requestGetListGames,
  requestGetSendOTP,
  requestGetToken,
} from "@/services/rechargeGameCard";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Input,
  InputAdornment,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import CopyClipboard from "../CopyClipboard";
import CopyToClipboard from "react-copy-to-clipboard";
import Iconify from "../Iconify";
import { useSnackbar } from "notistack";

interface IProps {
  auto?: boolean;
}

const SelectGame = ({ auto }: IProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [listGames, setListGames] = useState<IGamesRes[]>([]);
  const [gameSelected, setGameSelected] = useState<IGamesRes>();
  const [cardCode, setCardCode] = useState<string>("");
  const [cardValue, setCardValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModalQr, setOpenModalQr] = useState<boolean>(false);
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    renderListGames();
  }, []);

  const renderListGames = async () => {
    try {
      const res = await requestGetListGames();
      if (res?.status === HTTP_STATUS.OK) {
        setListGames(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setOpenModalQr(false);
    setOtp("");
  };

  const handleSubmit = async () => {
    if (auto) {
      if (cardValue && gameSelected) {
        setOpenModalQr(true);
        setTimeout(() => {
          toast.success("Thanh toán thành công");
        }, 2000);
      }
    } else {
      try {
        if (cardCode !== "") {
          const res = await requestGetSendOTP(cardCode);
          if (res?.status === HTTP_STATUS.OK) {
            toast.success(
              "Get code successfully, enter the game to get the code "
            );
          } else {
            toast.error("Too many request. Please try again later");
          }
        }
      } catch {
        toast.error("Too many request. Please try again later");
      }
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
    enqueueSnackbar("Copied!");
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(token ? token : "");
    }
  };
  return (
    <div className="w-full">
      <p className="w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4">
        Chọn game
      </p>
      <div className="flex flex-wrap gap-3">
        {listGames?.map((g) => (
          <div
            key={g.id}
            onClick={() => setGameSelected(g)}
            className={` min-w-24 w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] ${
              g.id === gameSelected?.id
                ? " border-[#f3a44a] shadow-md border-2"
                : " border-[#00000038] border-2"
            }`}
          >
            <Image
              src={g.image}
              alt="game"
              width={135}
              height={100}
              className="w-full h-[100px] rounded-t-lg"
            />
            <p className="text-center text-sm my-2 hover:text-[#f3a44a]">
              {g.name}
            </p>
          </div>
        ))}
      </div>
      {auto ? (
        <div className="flex mt-8 gap-4 items-center flex-col sm:flex-row">
          <p className="text-base font-semibold">Nhập mệnh giá: </p>

          <NumericFormat
            value={cardValue}
            customInput={TextField}
            InputProps={{
              endAdornment: <InputAdornment position="start">đ</InputAdornment>,
            }}
            allowNegative={false}
            thousandSeparator
            placeholder="0"
            onValueChange={({ value }) => setCardValue(Number(value))}
          />
        </div>
      ) : (
        <div className=" w-full">
          <div className="flex mt-8 gap-4 items-center">
            <p className="text-base font-semibold min-w-16">IGG ID: </p>
            <input
              className="border border-gray-300 rounded h-10"
              value={cardCode}
              onChange={(e) => setCardCode(e.target.value)}
            />
          </div>
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
                (* OTP will be sent via your ID)
              </p>
            </div>
            <p
              className="text-[#e6a357] cursor-pointer underline"
              onClick={handleSubmit}
            >
              Get code
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col mt-4 items-center">
        {/*<Button*/}
        {/*  onClick={auto ? handleSubmit : handleRecharge}*/}
        {/*  className={` w-32 bg-[#052d75] text-white min-h-11 mt-4  ${*/}
        {/*    ((cardCode && otp) || cardValue) && gameSelected*/}
        {/*      ? "cursor-pointer hover:bg-[#30466b]"*/}
        {/*      : "cursor-not-allowed opacity-50 hover:bg-[#052d75] hover:text-white"*/}
        {/*  }`}*/}
        {/*>*/}
        {/*  {loading && (*/}
        {/*    <CircularProgress size={20} color="inherit" className="mr-2" />*/}
        {/*  )}*/}
        {/*  {auto ? "Thanh toán" : "Get token"}*/}
        {/*</Button>*/}
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
              <Image src={"/img/qr.jpg"} alt="qr" width={500} height={500} />
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};
export default SelectGame;
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
