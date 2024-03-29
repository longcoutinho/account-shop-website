import { HTTP_STATUS } from "@/constants";
import { IGamesRes } from "@/interfaces/response/rechargeGameCard";
import { requestGetListGames } from "@/services/rechargeGameCard";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Input,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import OTP from "../InputOTP";
import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";
import Image from "next/image";

interface IProps {
  auto?: boolean;
}

const SelectGame = ({ auto }: IProps) => {
  const [listGames, setListGames] = useState<IGamesRes[]>([]);
  const [gameSelected, setGameSelected] = useState<IGamesRes>();
  const [cardCode, setCardCode] = useState<string>("");
  const [cardValue, setCardValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [openModalQr, setOpenModalQr] = useState<boolean>(false);
  const [otp, setOtp] = useState("");
  const OTPLength = 5;

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

  const handleOpen = () => {
    if (cardCode && gameSelected) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setOpenModalQr(false);
    setOtp("");
  };

  const handleSubmit = () => {
    if (auto) {
      if (cardValue && gameSelected) {
        setOpenModalQr(true);
        setTimeout(() => {
          toast.success("Thanh toán thành công");
        }, 2000);
      }
    } else {
      handleOpen();
    }
  };
  const handleRecharge = () => {
    if (otp?.length === OTPLength) {
      try {
        setLoading(true);
        setLoading(false);
        toast.success("Nạp thẻ thành công");
        handleClose();
        setCardCode("");
      } catch {
        setLoading(false);
        toast.error("Nạp thẻ không thành công");
      }
    }
  };
  return (
    <div className=" max-w-[960px] mx-auto w-full ap-4 my-6">
      <p className="w-full bg-gray-300 font-bold py-2 px-4 text-lg my-4">
        Chọn game
      </p>
      {listGames?.map((g) => (
        <div
          key={g.id}
          onClick={() => setGameSelected(g)}
          className={` p-3 max-w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ${
            g.id === gameSelected?.id
              ? " border-[#f3a44a] shadow-md border-2"
              : " border-[#00000038] border"
          }`}
        >
          <p>{g.name}</p>
        </div>
      ))}
      {auto ? (
        <div className="flex mt-8 gap-4 items-center">
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
        <div className="flex mt-8 gap-4 items-center">
          <p className="text-base font-semibold">Nhập mã thẻ: </p>
          <Input
            className="border border-gray-300 rounded"
            value={cardCode}
            onChange={(e) => setCardCode(e.target.value)}
          />
        </div>
      )}
      <div className="flex flex-col mt-4 items-center">
        <Button
          onClick={handleSubmit}
          className={` w-32 bg-[#05296b] text-white min-h-11 mt-4  ${
            (cardCode || cardValue) && gameSelected
              ? "cursor-pointer hover:bg-[#30466b]"
              : "cursor-not-allowed opacity-50 hover:bg-[#05296b] hover:text-white"
          }`}
        >
          {auto ? "Thanh toán" : " Gửi OTP"}
        </Button>
        {!auto && (
          <p className=" text-xs text-blue-600 mt-3">
            (* OTP will be sent via your phone number)
          </p>
        )}
      </div>
      {open && (
        <Modal
          open={open}
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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-center"
            >
              Nhập mã OTP
            </Typography>
            <div className="w-full flex justify-center">
              <OTP
                separator={<span>-</span>}
                value={otp}
                onChange={setOtp}
                length={OTPLength}
              />
            </div>
            <Button
              onClick={handleRecharge}
              className={` w-32 bg-[#05296b] text-white min-h-11 mt-4  ${
                otp?.length === OTPLength
                  ? "cursor-pointer hover:bg-[#30466b]"
                  : "cursor-not-allowed opacity-50 hover:bg-[#05296b] hover:text-white"
              }`}
            >
              {loading && (
                <CircularProgress size={20} color="inherit" className="mr-2" />
              )}
              Nạp
            </Button>
          </Box>
        </Modal>
      )}
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
