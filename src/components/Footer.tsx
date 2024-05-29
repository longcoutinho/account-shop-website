import { Box } from "@mui/material";
import Container from "@mui/system/Container";
import { useTranslation } from "next-i18next";

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
            {t("BUSINESS_REGISTER")}:{" "}
            <span className="font-semibold">4900896509</span>
          </p>
          <p>
            {t("ADDRESS")} :{" "}
            <span className="font-semibold">
              {" "}
              197 đường Bắc Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh Lạng
              Sơn, Việt Nam
            </span>
          </p>
          <Box>
            <a href="/terms-of-service" style={{fontWeight: 500}}>Term of Services</a>
            <a href="/privacy-policy" style={{marginLeft: "20px", fontWeight: 500}}>Privacy Policy</a>
          </Box>
        </div>
        <div className=" w-full md:w-1/3 flex-col gap-1">
          <p>
            Hotline: <span className="font-semibold">0396595014</span>
          </p>
          <p>
            Email:{" "}
            <span className="font-semibold">support@lordspremium.com</span>
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
