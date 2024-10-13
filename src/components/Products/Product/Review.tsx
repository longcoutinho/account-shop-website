import { RootState } from "@/redux/store";
import { AccountCircle } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TextareaAutosize } from "@mui/material";
import { isUndefined } from "lodash";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Review = () => {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation("common");
  const { user } = useSelector((state: RootState) => state.user);
  const { productDetail, productOrder } = useSelector(
    (state: RootState) => state.product
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [listReview, setListReview] = useState<
    {
      id?: string;
      userName: string;
      comment: string;
      time?: number;
      productId: string;
    }[]
  >([]);

  useEffect(() => {
    handleGetListReviews();
  }, []);

  const handleGetListReviews = async () => {
    try {
      const response = await fetch("/api/reviews", {
        method: "GET",
      });
      const data = await response.json();
      setListReview(data?.comments);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async () => {
    if (
      productOrder &&
      productDetail &&
      !isUndefined(
        productOrder?.listData?.find(
          (o) => o?.productName === productDetail?.name
        )
      )
    ) {
      setLoading(true);
      const newComment = {
        userName: user?.username || "Default name",
        comment: comment,
        productId: id as string,
      };

      const response = await fetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(newComment),
      });
      const data = await response.json();
      if (data?.statusCode === 401) {
        toast.error("Đã đánh giá");
      } else if (data?.statusCode === 200) {
        setListReview([newComment, ...listReview]);
        setComment("");
      }
      setLoading(false);
    } else {
      toast.error("Bạn chưa mua sản phẩm này");
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="text-xl">
          {t("PRODUCT_REVIEWS") +
            ` (${
              listReview?.filter((item) => item?.productId === id)?.length || 0
            })`}{" "}
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
          {listReview
            ?.filter((item) => item?.productId === id)
            ?.map((e) => (
              <div className="flex border-b-2 mb-4 gap-4 last:border-none mt-4">
                <AccountCircle className="w-9 h-9" />
                <div>
                  <p className="font-semibold">{e?.userName}</p>
                  <p className="text-gray-500 text-xs">
                    {new Date(e?.time || 0).toLocaleString()}
                  </p>
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
