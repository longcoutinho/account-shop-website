import { RootState } from "@/redux/store";
import { AccountCircle } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TextareaAutosize } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const list = [
  {
    userName: "Phuong Mai",
    comment:
      "hãy nhận xét cho sản phẩm này bạn nhé hãy nhận xét cho sản phẩm này bạn nhé hãy nhận xét cho sản phẩm này bạn nhé hãy nhận xét cho sản phẩm này bạn nhé hãy nhận xét cho sản phẩm này bạn nhé",
    time: "09/10/2024",
  },
  {
    userName: "Phuong Mai1",
    comment: "hãy nhận xét cho sản phẩm này bạn nhé",
    time: "09/10/2024",
  },
  {
    userName: "Phuong Mai2",
    comment: "hãy nhận xét cho sản phẩm này bạn nhé",
    time: "09/10/2024",
  },
  {
    userName: "Phuong Mai3",
    comment: "hãy nhận xét cho sản phẩm này bạn nhé",
    time: "09/10/2024",
  },
];
const Review = () => {
  const { t } = useTranslation("common");
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [listReview, setListReview] = useState<
    {
      userName: string;
      comment: string;
      time: string;
    }[]
  >([]);

  useEffect(() => {
    setListReview(list);
  }, [list]);

  const handleSubmit = async () => {
    setLoading(true);
    const newComment = {
      userName: user?.username || "Default name",
      comment: comment,
      time: new Date().toLocaleDateString(),
    };
    setListReview([newComment, ...listReview]);
    setComment("");
    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="text-xl">
          {t("PRODUCT_REVIEWS") + ` (${listReview?.length || 0})`}{" "}
        </p>
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          onClick={handleSubmit}
          className="!bg-[#9c27b0] !text-white !px-6 !py-1 hover:underline !capitalize"
        >
          {t("SEND")}
        </LoadingButton>
      </div>
      <TextareaAutosize
        value={comment}
        onChange={(e) => setComment(e?.target?.value)}
        minRows={2}
        maxLength={300}
        placeholder={t("GIVE_REVIEW")}
        className="w-full border border-gray-300 rounded-xl p-3 mt-4 "
      />
      {comment && comment?.length >= 300 && (
        <p className="text-red-500 mb-4 text-xs">{t("VALIDATE_COMMENT")}</p>
      )}

      {listReview && listReview?.length > 0 ? (
        <>
          {listReview?.map((e) => (
            <div className="flex border-b-2 mb-4 gap-4 last:border-none mt-4">
              <AccountCircle className="w-9 h-9" />
              <div>
                <p className="font-semibold">{e?.userName}</p>
                <p className="text-gray-500 text-xs">{e?.time}</p>
                <p className="my-3">{e?.comment}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center mt-4">
          Chưa có đánh giá nào cho sản phẩm này
        </p>
      )}
    </>
  );
};
export default Review;
