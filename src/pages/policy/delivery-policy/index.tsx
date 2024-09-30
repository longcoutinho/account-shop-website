import React from "react";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "@/layouts";
import { List, ListItem } from "@mui/material";

export default function DeliveryPolicy() {
  return (
    <Page title={PAGE_TITLE.POLICY} menuIndex={1}>
      <div className="text-black">
        <p className="font-bold text-xl">
          CHÍNH SÁCH GIAO NHẬN VÀ VẬN CHUYỂN HÀNG HÓA
        </p>
        <p className="font-bold">I. HÌNH THỨC GIAO NHẬN</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Chúng tôi sẽ có nhân viên giao hàng trực tiếp đến Quý khách.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Hoặc chúng tôi liên kết với bên thứ ba (chuyển phát nhanh) thực hiện
            giao hàng đến Quý khách.
          </ListItem>
        </List>
        <p className="font-bold"> II. NỘI DUNG</p>
        <p>1. Nhân viên giao hàng</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Trong vòng bán kính 5km, nhân viên chúng tôi sẽ giao hàng trực tiếp
            đến Quý khách.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Thời gian: trong vòng 3 ngày kể từ khi chốt đơn hàng. Khung giờ từ
            8h 30 - 17h 30 hàng ngày.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Chi phí giao hàng: thỏa thuận giữa 2 bên.
          </ListItem>
        </List>{" "}
        <p>2. Đơn vị vận chuyển thứ ba</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Vận chuyển hàng hóa trên toàn quốc.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Cách thức giao hàng: chúng tôi lựa chọn đơn vị thứ ba chuyển phát
            nhanh uy tín giao hàng đến Quý khách.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Thời gian giao hàng tới địa điểm khách hàng yêu cầu theo chỉ tiêu về
            thời gian giao hàng của nhà cung cấp dịch vụ.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Chi phí giao hàng: theo chi phí của đơn vị vận chuyển thứ ba. Khách
            hàng thanh toán phí vận chuyển hoặc theo thỏa thuận khác giữa các
            bên.
          </ListItem>
        </List>{" "}
        <p className="font-bold"> III. CHÍNH SÁCH CHUNG</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Quý khách kiểm tra hàng trước khi nhận. Sau khi ký xác nhận đã nhận
            đầy đủ hàng, chúng tôi không chịu trách nhiệm nếu có thiếu sót, cũng
            như khiếu nại sau đó.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Hình thức thanh toán: theo thỏa thuận phương thức thanh toán giữa
            các bên.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Chính sách bảo hành: theo chính sách bảo hành đi kèm hợp đồng (nếu
            có).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Hàng hóa sẽ đi kèm phiếu bảo hành (nếu có), thông tin sản phẩm, và
            các chứng từ khác (nếu có).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Hóa đơn VAT sẽ do CÔNG TY TNHH LE KUYTOC xuất và gửi về mail quý
            khách.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Trường hợp phát sinh chậm trễ trong quá trình giao hàng chúng tôi sẽ
            thông báo đến quý khách qua mail và điện thoại, trường hợp quý khách
            muốn hoàn phí chúng tôi hoàn phí lại quý khách.
          </ListItem>
        </List>
        <p>Quý khách có nhu cầu về mua hàng vui lòng liên hệ:</p>
        <p>CÔNG TY TNHH LE KUYTOC</p>
        <p>
          Địa chỉ : 197 đường Bắc Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh
          Lạng Sơn, Việt Nam
        </p>
        <p>Hotline: 0396595014 </p>
        <p>Email: support@elitagame.com</p>
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
