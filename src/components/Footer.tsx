import { Box, Divider } from "@mui/material";
import Container from "@mui/system/Container";
import { Facebook, Google, YouTube } from "@mui/icons-material";
const Footer = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="footer-container-page bg-gray-200 fixed bottom-0"
    >
      <Box className="flex items-center gap-4 px-[5%] py-6">
        <img alt="" id="logo" src="/img/fb.png" height={48} width={48} />
        <p className="text-xl font-bold">LOGO</p>
      </Box>
    </Container>
  );
};
export default Footer;
