import React from "react";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "@/layouts";
import { List, ListItem } from "@mui/material";

export default function WarrantyPolicy() {
  return (
    <Page title={PAGE_TITLE.POLICY} menuIndex={1}>
      <div>
        <p className="font-bold text-xl">CHÍNH SÁCH BẢO HÀNH</p>
        <p className="font-bold">I. Điều kiện bảo hành</p>
        <p>Sản phẩm phải đáp ứng các điều kiện sau đây:</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm còn trong thời hạn bảo hành. (Thời hạn bảo hành được tính
            từ ngày mua hàng, căn cứ theo hóa đơn bán hàng).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm lỗi kỹ thuật thuộc các tiêu chí được bảo hành của Nhà sản
            xuất/ Nhà phân phối. (tham khảo các điều kiện bảo hành của Nhà sản
            xuất dưới đây). Sản phẩm bị từ chối bảo hành nếu Nhà sản xuất/ Nhà
            phân phối xác nhận sản phẩm không đủ điều kiện bảo hành.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Số Serial/ Imei/ Service Tag trên sản phẩm phải còn nguyên vẹn và rõ
            nét (và phải trùng khớp với phiếu bảo hành nếu là sản phẩm có phiếu
            bảo hành đi kèm).
          </ListItem>
        </List>
        <p>Các trường hợp không bảo hành:</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm không đủ điều kiện bảo hành bên trên hoặc vi phạm điều kiện
            bảo hành của hãng.
          </ListItem>
        </List>{" "}
        <p className="font-bold">II. Chính sách bảo hành</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Tất cả các sản phẩm do elitagame.com bán ra đều được bảo hành theo
            quy định của nhà sản xuất.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Tất cả sản phẩm hư hỏng, sẽ được gửi cho nhà sản xuất hoặc đơn vị
            được nhà sản xuất uỷ quyền để bảo hành theo đúng chính sách bảo hành
            của nhà sản xuất đưa ra elitagame.com không chịu trách nhiệm nếu nhà
            sản xuất và/ hoặc đơn vị được nhà sản xuất ủy quyền từ chối bảo
            hành.
          </ListItem>
        </List>
        <p className="font-bold">III. KHÔNG BẢO HÀNH VỚI CÁC TRƯỜNG HỢP SAU</p>
        <p>
          Tất cả các sản phẩm do elitagame.com bán ra đều tuân thủ điều kiện bảo
          hành của nhà cung cấp, của hãng sản xuất. Các trường hợp sau đây bị
          coi là vi phạm điều kiện bảo hành và không được bảo hành:
        </p>
        <List
          sx={{
            listStyleType: "decimal",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm bị tiêu hao trong quá trình sử dụng. (hộp mực, cụm trống
            từ, băng mực, đầu kim, đầu in phun, quạt, các loại cáp, nắn dòng,
            công tắc nguồn…){" "}
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm hết thời hạn bảo hành (thời hạn bảo hành sản phẩm được thể
            hiện trên phiếu xuất kho kiêm bảo hành của …).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Không có tem bảo hành của …, nhà phân phối, hãng sản xuất; hoặc có
            nhưng tem bảo hành đó không hợp lệ (bị rách, bị tẩy xóa, sửa chữa,
            mờ không đọc được, bong/ tróc…).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Số serial, mã vạch, thông số kỹ thuật trên sản phẩm không hợp lệ (bị
            mờ không đọc được, bị cạo, bị sửa, bị rách, bị bong/ tróc, bị thay
            đổi).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm bị lỗi do thiên tai (lũ lụt, hỏa hoạn, nguồn điện không
            bình thường, sai điện áp quy định…).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm bị lỗi do người sử dụng:
            <List
              sx={{
                listStyleType: "disc",
                listStylePosition: "inside",
              }}
            >
              <ListItem sx={{ display: "list-item" }}>
                Sản phẩm bị biến dạng vật lý như trầy, xước, lồi, lõm, móp, méo,
                nứt, vỡ do bị rơi, bị va đập, do vận chuyển/ lắp đặt sai quy
                cách
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Sản phẩm bị mốc, hoen rỉ, ẩm ướt, chất lỏng xâm nhập, ố vàng, mờ
                chữ, viết chữ không tẩy được…
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm hư hỏng do chuột, bọ hoặc côn trùng xâm nhập.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm bị tháo dỡ, sửa chữa bởi các cá nhân hoặc kỹ thuật viên
            không được sự ủy quyền của elitagame.com.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Không bảo hành phần mềm không có bản quyền và dữ liệu của khách hàng
            có trong máy hoặc sản phẩm.
          </ListItem>
        </List>
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
