import { Box } from "@mui/material";
import Container from "@mui/system/Container";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="footer-container-page bg-gray-200 px-[5%] py-6 text-xs md:text-base"
    >
      <Box className="flex md:items-center flex-col md:flex-row gap-1 w-full">
        <Box className="flex items-center mb-4  w-full md:w-2/3  ">
          <img alt="" id="logo" src="/img/logo1.png" height={240} width={240} />
        </Box>
        <p className="text-xl font-bold ">CÔNG TY TNHH LE KUYTOC</p>
      </Box>
      <div className="flex w-full gap-1 md:gap-6 text-[#000000DE] flex-col md:flex-row">
        <div className=" w-full md:w-2/3 flex flex-col gap-1">
          <p>
            MST:{" "}
            <span className="font-semibold">
              {" "}
              4900896509, cấp ngày 14/08/2023, cấp bởi Sở Kế Hoạch Và Đầu Tư
              Tỉnh Lạng Sơn - Phòng Đăng Ký Kinh Doanh
            </span>
          </p>
          <p>
            {t("ADDRESS")} :{" "}
            <span className="font-semibold">
              {" "}
              197 đường Bắc Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh Lạng
              Sơn, Việt Nam
            </span>
          </p>
          <div className="grid grid-cols-1 mg:grid-cols-2 mt-4">
            <Link
              href="/policy/privacy-policy"
              style={{ fontWeight: 500 }}
              className="hover:underline"
            >
              * {t("PRIVACY_POLICY")}
            </Link>
            <Link
              href="/policy/delivery-policy"
              style={{ fontWeight: 500 }}
              className="hover:underline"
            >
              * {t("DELIVERY_POLICY")}
            </Link>
            <Link
              href="/policy/inspection"
              style={{ fontWeight: 500 }}
              className="hover:underline"
            >
              * {t("INSPECTION_RETURN")}
            </Link>
            <Link
              href="/policy/payment"
              style={{ fontWeight: 500 }}
              className="hover:underline"
            >
              * {t("PAYMENT_POLICY")}
            </Link>
            <Link
              href="/policy/warranty"
              style={{ fontWeight: 500 }}
              className="hover:underline"
            >
              * {t("WARRANTY_POLICY")}
            </Link>
          </div>
        </div>
        <div className=" w-full md:w-1/3 flex-col gap-1">
          <p>
            Hotline: <span className="font-semibold">0396595014</span>
          </p>
          <p>
            Email: <span className="font-semibold">support@elitagame.com</span>
          </p>
          <a href="/terms-of-service" className="hover:underline">
            Term of Services
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
