import React from "react";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "@/layouts";
import { List, ListItem } from "@mui/material";

export default function PaymentPolicy() {
  return (
    <Page title={PAGE_TITLE.POLICY} menuIndex={1}>
      <div className="text-black">
        <p className="font-bold text-xl">PHƯƠNG THỨC THANH TOÁN</p>
        Cám ơn Quý khách đã đặt hàng tại chúng tôi. Quý khách thanh toán theo
        các hình thức sau:
        <br />
        <p className="font-bold">
          I. Thanh toán trực tiếp tại văn phòng chúng tôi :
        </p>
        <p>CÔNG TY TNHH LE KUYTOC</p>
        <p>
          Địa chỉ : 197 đường Bắc Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh
          Lạng Sơn, Việt Nam
        </p>
        <p>Hotline: 0396595014 </p>
        <p>Email: support@elitagame.com</p>
        <p className="font-bold">
          Nhân viên công ty/ cở sở sẽ trực tiếp thu phí số lượng đơn hàng khách
          hàng cần mua.
          <br /> Lưu ý: Quý khách kiểm tra giao dịch cần thận trước khi rời đi.
        </p>
        <br />
        <p className="font-bold">II. Thanh toán khi nhận hàng</p>
        <p>
          COD (dịch vụ giao hàng nhận tiền): Nhân viên vận chuyển thu tiền mặt
          khi giao hàng đến Quý khách.
          <br />
          Lưu ý: Quý khách kiểm tra đơn hàng, thanh toán cho nhân viên vận
          chuyển đầy đủ, ký xác nhận đơn hàng.
        </p>
        <br />
        <p className="font-bold">
          III. Thanh toán qua tài khoản (ATM/ visa/ master,...)
        </p>
        <p>Quý khách có thể thanh toán theo thông tin số tài khoản</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>Số tài khoản:</ListItem>
          <ListItem sx={{ display: "list-item" }}>Chủ tài khoản:</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Thông tin ngân hàng:
          </ListItem>
        </List>
        <p className="font-bold">
          IV. Qui định hoàn trả tiền khi thanh toán trực tuyến
        </p>
        <p>
          Trong trường hợp Quý khách hàng đã mua hàng và thanh toán trực tuyến
          thành công nhưng trả lại sản phẩm, Chúng tôi sẽ hoàn tiền vào thẻ Quý
          khách dùng để thanh toán: thời gian nhận được tiền hoàn từ 7 - 10 ngày
          làm việc kể từ khi chúng tôi nhận được đề nghị của khách hàng.
        </p>
      </div>
    </Page>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
