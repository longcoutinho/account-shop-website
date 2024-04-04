import { Box } from "@mui/material";
import Container from "@mui/system/Container";
const Footer = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="footer-container-page bg-gray-200 px-[5%] py-6 text-xs md:text-base"
    >
      <Box className="flex items-center gap-4 mb-4">
        <img alt="" id="logo" src="/img/fb.png" height={48} width={48} />
        <p className="text-xl font-bold">CÔNG TY TNHH LEKUYTOC</p>
      </Box>

      <div className="flex w-full gap-1 md:gap-6 text-[#000000DE] flex-col md:flex-row">
        <div className=" w-full md:w-2/3 flex flex-col gap-1">
          <p>
            Đăng ký kinh doanh số:{" "}
            <span className="font-semibold">4900896509</span>
          </p>
          <p>
            Địa chỉ:{" "}
            <span className="font-semibold">
              {" "}
              197 đường Bắc Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh Lạng
              Sơn, Việt Nam
            </span>
          </p>
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
