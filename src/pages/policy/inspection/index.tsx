import React from "react";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "@/layouts";
import { List, ListItem } from "@mui/material";

export default function Inspection() {
  return (
    <Page title={PAGE_TITLE.POLICY} menuIndex={1}>
      <div className="text-black">
        <p className="font-bold text-xl">CHÍNH SÁCH KIỂM HÀNG</p>
        <p>
          Để quyền lợi của khách hàng được bảo vệ tối đa khi tham gia mua sắm
          trên elitagame.com, chúng tôi có chính sách hỗ trợ khách hàng được
          kiểm tra, xem hàng, đồng kiểm với nhân viên giao hàng khi nhận hàng.
          Nghĩa là, khi bạn nhận được gói hàng từ nhân viên giao hàng, bạn được
          phép mở ra để kiểm tra ngoại quan về sản phẩm trước khi thanh toán.
        </p>
        <br />
        <p>
          Quý khách chỉ được kiểm tra về mặt ngoại quan của sản phẩm; Xem sản
          phẩm có đúng như Quý khách đã đặt hàng không? Số lượng, phân loại hàng
          hóa có giống với mô tả không? Sản phẩm có bị lỗi, sai sản phẩm, thất
          thoát trong quá trình vận chuyển không? Việc kiểm tra sẽ không bao gồm
          thử đồ.{" "}
        </p>
        <br />
        <p>
          Nếu khi đồng kiểm Quý khách thấy sản phẩm có dấu hiệu hư hỏng, quá hạn
          sử dụng hoặc không đúng mô tả được công bố trên website elitagame.com,
          Quý khách có quyền từ chối nhận hàng.
        </p>
        <br />
        <p>
          Nếu thùng hàng/ gói hàng có dấu hiệu đã bị bóc, xé, dấu niêm phong
          không còn nguyên vẹn thì Quý khách có quyền từ chối nhận hàng. Hoặc
          Quý khách cũng có thể yêu cầu nhân viên giao hàng mở cho kiểm tra sản
          phẩm bên trong thùng hàng. Nếu vẫn đúng như sản phẩm Quý khách đặt thì
          Quý khách có thể nhận hàng. Tuy nhiên, trong một số trường hợp thì tốt
          nhất là Quý khách không nên nhận hàng nếu như thùng hàng đã bị rách
          hoặc có dấu hiệu bóc, xé từ trước. Vì sản phẩm của Quý khách có nguy
          cơ bị tráo đổi thành những món hàng không đảm bảo chất lượng.
        </p>
        <br />
        <p>
          Phí kiểm hàng sẽ được đơn vị vận chuyển quy định cụ thể của từng đơn
          vị vận chuyển khác nhau và sẽ thể hiện rõ trên phiếu giao hàng.
        </p>
        <br />
        <p className="font-bold text-xl">CHÍNH SÁCH ĐỔI TRẢ</p>
        <p>
          Để đảm bảo chất lượng dịch vụ và đem lại cho Quý Khách những trải
          nghiệm tốt nhất với sản phẩm, elitagame.com chúng tôi áp dụng chính
          sách đổi trả với các trường hợp sau:
        </p>
        <p className="font-bold">
          * ĐIỂU KIỆN ĐỔI TRẢ DO NHẦM/THIẾU SẢN PHẨM – LỖI SẢN PHẨM KHI VẬN
          CHUYỂN
        </p>
        <p className="font-bold">1. Đổi - Trả do Nhầm, Thiếu Sản Phẩm</p>
        <p>
          Khi Quý Khách nhận được sản phẩm không đúng với đơn hàng đã đặt (nhầm
          sản phẩm hoặc thiếu sản phẩm), Quý Khách vui lòng phản hồi lại ngay
          cho elitagame.com trong vòng 24 giờ (kể từ lúc đơn hàng giao tới địa
          chỉ yêu cầu).
        </p>
        <p>
          Việc thông báo ngay khi phát hiện sự cố sẽ giúp elitagame.com thuận
          tiện kiểm tra với các bộ phận liên quan và giải quyết kịp thời nhằm
          phục vụ Quý Khách tốt hơn.
        </p>
        <p className="font-bold">
          2. Đổi – Trả Sản Phẩm Lỗi Do Quá Trình Vận Chuyển
        </p>
        <p>
          Trong quá trình vận chuyển, sẽ xảy ra một số rủi ro phát sinh đổ vỡ hư
          hỏng sản phẩm, mốp méo bao bì, sản phẩm có dấu hiệu bị rò rỉ, ảnh
          hưởng đến cảm nhận và trải nghiệm sản phẩm.
        </p>
        <p className="font-bold">3. Điều kiện đổi trả:</p>
        <p>
          elitagame.com khuyến khích Quý Khách kiểm tra hàng ngay sau khi nhận
          được, đảm bảo sản phẩm đúng số lượng, chủng loại, mẫu mã và chất lượng
          như yêu cầu. Việc thông báo ngay trong vòng 24h kể từ khi nhận hàng
          giúp việc yêu cầu Đổi/trả – hỗ trợ Quý Khách từ elitagame.com sẽ nhanh
          chóng kịp thời hơn. Các sản phẩm đổi trả phải đạt yêu cầu:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Sản phẩm chưa qua sử dụng, còn nguyên bao bì đóng gói, đầy đủ phụ
            kiện, tem cùng quà tặng kèm (nếu có).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Bao bì sản phẩm không bị bễ, vỡ, hoặc có dấu hiệu bảo quản không
            đúng với hướng dẫn sử dụng.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Khi nhận được sản phẩm bị hư hại do quá trình vận chuyển, Quý Khách
            vui lòng chụp ảnh và phản hồi cho elitagame.com ngay khi phát hiện
            hư hại.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Thời gian thông báo Đổi/Trả: 24h kể từ thời điểm nhận hàng với sản
            phẩm đổi trả do: Nhầm hoặc Thiếu Sản Phẩm và Sản Phẩm Lỗi Do Quá
            Trình Vận Chuyển.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Phí vận chuyển lại sản phẩm: Quý khách sẽ không bị tính bất kỳ chi
            phí nào, cả phí vận chuyển gửi về cho elitagame.com với sản phẩm đổi
            trả do: Nhầm hoặc Thiếu Sản Phẩm và Sản Phẩm Lỗi Do Quá Trình Vận
            Chuyển.
          </ListItem>
        </List>
        <p>
          Quý Khách vui lòng tham khảo thêm Các bước thực hiện Đổi - Trả và thực
          hiện theo hướng dẫn để elitagame.com có thể hổ trợ Quý Khách kịp thời.
        </p>
        <br />
        <p className="font-bold">
          * CÁC TRƯỜNG HỢP KHÔNG ĐƯỢC ÁP DỤNG CHÍNH SÁCH ĐỔI - TRẢ SẢN PHẨM:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Các yêu cầu Đổi Trả không đáp ứng Điều kiện Đổi Trả đã qui định.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Quá thời hạn đổi trả sản phẩm.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Quý Khách vui lòng đọc kỹ hướng dẫn sử dụng.
          </ListItem>
        </List>
        <br />
        <p className="font-bold">* CÁC BƯỚC THỰC HIỆN ĐỔI - TRẢ:</p>
        <p className="font-bold">Bước 1. Kiểm tra điều kiện đổi trả sản phẩm</p>
        <p>
          Quý Khách kiểm tra điều kiện Đổi Trả Sản Phẩm ứng với từng trường hợp:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Đổi - Trả do nhầm hoặc thiếu sản phẩm
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Đổi - Trả sản phẩm lỗi do quá trình vận chuyển sản phẩm{" "}
          </ListItem>
        </List>
        <p className="font-bold">Bước 2: Thông báo đến elitagame.com.</p>
        <p>
          Quý khách vui lòng liên hệ với elitagame.com qua Hotline : 0396595014
          hoặc gửi Email : support@elitagame.com, cung cấp thông tin chi tiết về
          sản phẩm lỗi gồm:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Thông tin liên lạc của Quý Khách{" "}
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Tên sản phẩm cần Đổi/Trả
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Lý do Đổi/Trả</ListItem>
          <ListItem sx={{ display: "list-item" }}>Nhu cầu cần hỗ trợ</ListItem>
        </List>
        <p className="font-bold">
          Bước 3: elitagame.com xác nhận thông tin từ khách hàng
        </p>
        <p>
          Sau khi quý khách yêu cầu Đổi Trả được chấp nhận, elitagame.com sẽ gửi
          đến quý khách thông báo gửi sản phẩm về cho elitagame.com thông qua
          đối tác vận chuyển.
        </p>
        <p className="font-bold">Bước 4: Gửi hàng về elitagame.com.</p>
        <p>
          Quý khách vui lòng đóng gói cẩn thận sản phẩm cần Đổi Trả, gửi về
          elitagame.com theo một trong những cách sau:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Giao bưu phẩm cho đối tác vận chuyển về cho elitagame.com.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Trong trường hợp địa chỉ Quý Khách nằm ngoài khu vực phạm vi phục vụ
            của đối tác vận chuyển (đối tác vận chuyển không đến nhận hàng trực
            tiếp được), kính mong Quý Khách vui lòng mang sản phẩm đến bưu điện
            gần nhất để gửi sản phẩm về lại.
          </ListItem>
        </List>
        <p>
          <span className="underline">Lưu ý</span>: Quý khách vui lòng đóng gói
          sản phẩm cẩn thận nhằm đảm bảo trạng thái nguyên vẹn. elitagame.com sẽ
          không chịu trách nhiệm và rất tiếc phải từ chối sản phẩm bị hư hại do
          lỗi đóng gói sơ sài từ Quý Khách.
        </p>
        <p className="font-bold">
          Bước 5: Thời gian và phản hồi từ elitagame.com.
        </p>
        <p>
          Sau khi nhận được sản phẩm quý khách gởi về, elitagame.com sẽ phản hồi
          và cập nhật thông tin Đổi/Trả, thời gian thực hiện từng giai đoạn xử
          lý đến quý khách.
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
