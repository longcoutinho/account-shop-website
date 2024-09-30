import React from "react";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "@/layouts";
import { List, ListItem } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Page title={PAGE_TITLE.POLICY} menuIndex={1}>
      <div>
        <p className="font-bold text-xl">CHÍNH SÁCH BẢO MẬT</p>
        <p className="font-bold"> Mục đích và phạm vi thu thập</p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Việc thu thập dữ liệu chủ yếu trên website elitagame.com bao gồm: họ
            tên, email, điện thoại. Đây là các thông tin cần thiết cần thành
            viên cung cấp bắt buộc để elitagame.com liên hệ xác nhận khi khách
            hàng sử dụng dịch vụ trên website nhằm đảm bảo quyền lợi cho các
            khách hàng.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Các khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt
            động sử dụng dịch vụ dưới tên và email của mình. Ngoài ra khách hàng
            có trách nhiệm thông báo kịp thời cho elitagame.com về những hành vi
            sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên và mật
            khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
          </ListItem>
        </List>
        <p className="font-bold"> Phạm vi sử dụng thông tin</p>
        <p>
          Các thông tin cá nhân được khách hàng cung cấp có thể dùng vào các mục
          đích sau:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Cung cấp các dịch vụ đến khách hàng;
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Gửi các thông báo về các hoạt động trao đổi thông tin giữa khách
            hàng và elitagame.com;
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Ngăn ngừa các hoạt động phá lộ thông tin cá nhân hoặc các hoạt động
            giả mạo khách hàng;
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Liên lạc và giải quyết với khách hàng trong những trường hợp đặc
            biệt. Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích
            xác nhận và liên hệ có liên quan đến giao dịch tại elitagame.com.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Trong trường hợp có yêu cầu của pháp luật: elitagame.com có trách
            nhiệm hợp tác cung cấp thông tin cá nhân của khách hàng khi có yêu
            cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công
            an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách
            hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của
            khách hàng.
          </ListItem>
        </List>
        <p className="font-bold"> Thời gian lưu giữ thông tin </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu
            hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại
            trong mọi trường hợp thông tin cá nhân của khách hàng sẽ được bảo
            mật.
          </ListItem>
        </List>
        <p className="font-bold">
          {" "}
          Dữ Những người hoặc tổ chức có thể được tiếp cận với thông tin đó
        </p>
        <p>
          {" "}
          Khách hàng đồng ý rằng: trong trường hợp cần thiết, các cơ quan/tổ
          chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin của
          mình, bao gồm:
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Ban Quản Trị elitagame.com.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Cơ quan nhà nước có thẩm quyền (trong trường hợp có yêu cầu của pháp
            luật).
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Bên khiếu nại chứng minh được hành vi vi phạm của khách hàng (nếu
            có).Ban Quản Trị elitagame.com.
          </ListItem>
        </List>
        <p className="font-bold">
          Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            CÔNG TY TNHH LE KUYTOC
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Địa chỉ : 197 đường Bắc Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh
            Lạng Sơn, Việt Nam
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>Hotline: 0396595014</ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Email: support@elitagame.com
          </ListItem>
        </List>
        <p className="font-bold">
          Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá
          nhân của mình.
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ
            thông tin cá nhân của mình hoặc yêu cầu elitagame.com thực hiện việc
            này.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho
            bên thứ 3 đến ban quản trị của elitagame.com. Khi tiếp nhận những
            phản hồi này, elitagame.com sẽ xác nhận lại thông tin, phải có trách
            nhiệm trả lời lý do và hướng dẫn khách hàng khôi phục và bảo mật lại
            thông tin.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            {" "}
            Email: support@elitagame.com
          </ListItem>
        </List>
        <p className="font-bold">
          Cam kết bảo mật thông tin cá nhân khách hàng
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Thông tin cá nhân của khách hàng trên elitagame.com được cam kết bảo
            mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của khách
            hàng. Việc thu nhập và sử dụng thông tin của mỗi khách hàng chỉ được
            thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp
            pháp luật quy định khác.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3
            nào về thông tin cá nhân của khách hàng khi không có sự cho phép
            đồng ý từ thành viên.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Trong trường hợp máy chủ lưu lưu trữ thông tin bị hacker tấn công
            dẫn đến mất mát dữ liệu cá nhân của khách hàng, elitagame.com sẽ có
            trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý
            kịp thời và thông báo cho thành viên được biết.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng
            bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực dữ
            liệu trung tâm an toàn cấp 1 của elitagame.com.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Ban quản lý elitagame.com yêu cầu các cá nhân khi đăng ký/ mua hàng
            phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên,
            email, số điện thoại và chịu trách nhiệm về tính pháp lý của những
            thông tin trên. Ban quản lý elitagame.com không chịu trách nhiệm
            cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi
            của khách hàng đó nếu xét thấy tất cả thông tin cá nhân của khách
            hàng đó cung cấp khi đăng ký ban đầu là không chính xác.
          </ListItem>
        </List>
        <p className="font-bold">
          Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến việc thông tin
          cá nhân khách hàng
        </p>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Thông tin cá nhân của khách hàng được cam kết bảo mật tuyệt đối theo
            chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông
            tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách
            hàng đó trừ những trường hợp pháp luật có quy định khác.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3
            nào về thông tin cá nhân của thành viên khi không có sự cho phép
            đồng ý từ khách hàng.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
            đến mất mát dữ liệu cá nhân của khách hàng, chúng tôi sẽ có trách
            nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp
            thời và thông báo cho khách hàng được biết.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Ban quản lý yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp
            đầy đủ thông tin cá nhân có liên quan như: Họ và tên, email, điện
            thoại, và chịu trách nhiệm về tính pháp lý của những thông tin trên.
            Ban quản lý elitagame.com không chịu trách nhiệm cũng như không giải
            quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu
            xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi
            đăng ký ban đầu là không chính xác.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho
            bên thứ 3 đến ban quản trị của elitagame.com đến địa chỉ công ty:{" "}
            <br /> - CÔNG TY TNHH LE KUYTOC <br /> - Địa chỉ : 197 đường Bắc
            Sơn, phường Hoàng Văn Thụ, TP Lạng Sơn, tỉnh Lạng Sơn, Việt Nam{" "}
            <br /> - Hotline: 0396595014 <br />- Email: support@elitagame.com
          </ListItem>
        </List>
        <p>
          Công ty có trách nhiệm thực hiện các biện pháp kỹ thuật, nghiệp vụ để
          xác minh các nội dung được phản ánh.
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
