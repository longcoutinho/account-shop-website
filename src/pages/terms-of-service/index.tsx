import { Box } from "@mui/material";
import React from "react";
import "../../constants/message";
import { PAGE_TITLE } from "@/constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import NotificationWrapper from "@/components/NotificationWrapper";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function Term() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Head>
        <title>{PAGE_TITLE.PREFIX + PAGE_TITLE.HOME}</title>
      </Head>
      <NotificationWrapper />
      <Box className="w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden text-black">
        <Header></Header>
        <div className="min-h-[calc(100vh-78px)]">
          <div className=" max-w-[1960px] mx-auto w-full pt-4 sm:pt-10 m-20 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] leading-7">
            <p
              className="text-center"
              style={{ fontSize: "40px", fontWeight: "700" }}
            >
              TERMS OF SERVICE
            </p>
            <p style={{ marginTop: "20px" }}>
              These Terms of Service govern your rights and obligations, as
              users of the Portals administered and managed by ElitaGame. Unless
              otherwise provided by ElitaGame, all Portals introduced and
              managed by ElitaGame shall be governed by these Terms of Service.{" "}
              <br />
              By registering an account with ElitaGame and continued use of the
              Portals, it shall be deemed as acceptance of these Terms of
              Service by you., You hereby acknowledge and accept that your
              continued usage of the Portals shall be governed by these Terms of
              Service and any other guidelines and procedures, specific rules,
              procedures, terms and conditions for the products, services or
              facilities offered as determined or as may be amended by ElitaGame
              at any time or from time to time at its absolute discretion. Such
              other guidelines and procedures, specific rules, procedures, terms
              and conditions for the products, services or facilities offered
              shall be deemed to be incorporated by reference and form part of
              these Terms of Service. <br />
              The Services are provided by company “Cong ty Trach nhiem huu han
              Le Kuytoc”, located at 197 Bac Son street, Lang Son city, Lang Son
              province, Vietnam.
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              1. Definitions
            </p>
            <p>
              In these Terms of Service, the following words and expression
              shall have the following meanings unless the context otherwise
              requires:
              <br />
              Account: means your account duly registered with ElitaGame to
              facilitate your use of the Services available on the Portals (or
              any of them);
              <br />
              Digital Goods: means digitized content, such as Voucher, CD Key,
              Gift Card, Time Card, Expansion, Game Points, Pre-paid Card,
              Trial/Beta/Item Code, Game Key, Softpin and related features and
              functionality;
              <br />
              Game Points: means a game currency that can be spent on a
              particular game to acquire items or services;
              <br />
              Gift Card: means an electronic gift card purchased on any of the
              Portals which contains a stored value available for redemption on
              the Portals;
              <br />
              ElitaGame Points: means the points rewarded to you by ElitaGame
              for purchase of goods and services on the Portals, and includes
              such other description used for these points at any time;
              <br />
              Parties: means collectively, ElitaGame and you and “Party” shall
              mean any one of them;
              <br />
              Portals: means collectively, the web portals presently known as
              ElitaGame.com and such other web portals of ElitaGame introduced,
              administered and managed by ElitaGame from time to time;
              <br />
              Pre-paid Card: means any card, the value of which you have paid
              for and loaded onto such card;
              <br />
              Services: means the services provided by ElitaGame on the Portals,
              including, without limitation, publishing, reselling and retailing
              online games and related merchandise,;
              <br />
              Store Credit: means the electronic credit value available in the
              Account at any time;
              <br />
              Terms of Service: means these Terms of Service governing the use
              of the Services by you as may be amended at any time and from time
              to time as and when ElitaGame shall in its absolute discretion
              deems necessary and shall include: (i) any guidelines, privacy
              policy, rules, procedures, Terms of Service for products, services
              or facilities, as determined by ElitaGame from time to time; and
              (ii) any documents, directives, correspondence and agreements
              referred to in these Terms of Service and forming a part hereof,
              together with any amendments made at any time or from time to time
              to any of the foregoing;
              <br />
              Time Card: means a type of voucher that allows a player to
              activate or renew subscription time to a particular game; and
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              2. Licence to Use
            </p>
            <p>
              In consideration for you agreeing to these Terms of Service and
              your continued observance and compliance of these Terms of
              Service, ElitaGame hereby grants you a revocable, non-commercial,
              non-exclusive, non-transferable license to access the Portals and
              use the Services in accordance with and and subject to the terms
              and conditions stated herein.
              <br />
              The Portals and Services provided by ElitaGame and any portion
              thereof may not be reproduced, duplicated, copied, downloaded,
              sold, resold, visited or otherwise exploited for commercial
              purposes without the express consent from ElitaGame. Any
              unauthorised use shall terminate the license granted by ElitaGame.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              3. Representations and Warranties
            </p>
            <p>
              Each time when you access the Portals (or any of them), you
              irrevocably and unconditionally represent and warrant that:
              <br />
              • You are of legal age in your country to access the Portals and
              by using the Services, you and your parent or guardian accept and
              agree to be bound by these terms.
              <br />
              • You represent that you have either reached the age of “majority”
              or “legal responsibility” where you live, or your parent or legal
              guardian agrees to be bound by these Terms on your behalf.
              <br />
              • The use of the Portals by you will not contravene any law or
              regulations in any jurisdiction.
              <br />
              • ElitaGame has operations, or require ElitaGame to be subjected
              to any additional licensing requirement under the laws of that
              jurisdiction; and
              <br />
              • Your personal information and the documentation submitted in
              this respect, including, without limitation, your full name,
              telephone number, correspondence address and email address, are
              true and accurate. You shall forthwith promptly notify us in
              writing of any changes in your personal information.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              4. Use of Services
            </p>
            <p>
              • You shall procure, at your own costs and expenses, the requisite
              equipment and software to connect and access the Portals and the
              ensuing use of the Services. You shall bear all charges and fees
              imposed by third parties in relation to and in connection with you
              connecting your equipment to the Portals (or any of them).
              <br />
              • It is a pre-requisite to have a valid Account with ElitaGame in
              order to access and utilize the Services and/or Portals. You may
              register for an Account here.
              <br />
              • You shall keep the password to the Account secure and
              confidential. You shall not at any time or under any circumstances
              reveal or disclose your password to the Account to any
              unauthorized party and shall take all steps to prevent the
              disclosure of the password to the Account to any unauthorized
              party.
              <br />
              • It is your responsibility to secure the information of your
              Account. Any notification or confirmation received by ElitaGame
              from your Account shall be deemed to have been issued by you
              notwithstanding that such notification or confirmation may have
              been issued by a third party, whether authorized or otherwise, and
              you shall be bound by such notification or confirmation.
              <br />
              • ElitaGame shall not be liable for acting on the notification or
              confirmation sent through your Account. ElitaGame shall not be
              obliged to investigate the authenticity or authority of persons
              effecting the notification or confirmation or verify the
              completeness of such notification or confirmation. Such
              notification or confirmation shall be deemed irrevocable and
              binding on you upon receipt by ElitaGame notwithstanding any
              error, fraud, forgery and lack of clarity or misunderstanding in
              respect of the terms of such notification or confirmation.
              <br />
              • Save as otherwise permitted by ElitaGame, you shall not,
              directly or indirectly, use the Services for any commercial
              purposes.
              <br />
              • You shall not to use the Portals or the Services (or any of
              them) to conduct any fraudulent, immoral or illegal activities or
              such activities that may infringe the intellectual property rights
              of third parties.
              <br />
              • Unless otherwise permitted by ElitaGame in writing, you shall
              not upload, post, email transmit or otherwise make available any
              unauthorized or illegal activities on the Portals or directly to
              other users of the Portals.
              <br />
              • You shall not use any intellectual property belonging to
              ElitaGame or any publishers listed on the Portals, including,
              without limitation, trademarks or trade names, whether registered
              or not, without the prior written consent of ElitaGame.
              <br />
              • You shall not be disruptive, be offensive or be a nuisance in
              any manner whatsoever to other users of the Portals or the
              employees of ElitaGame.
              <br />
              • You shall not directly or indirectly recruit and/or poach any
              customers obtained from the usage of the portals.
              <br />
              • It is your primary responsibility to ensure that you are
              acquainted with the guidelines and procedures and these guidelines
              and procedures shall be deemed to be incorporated by reference and
              form part of the Term of Service, and may be updated from time to
              time by ElitaGame at ElitaGame's sole discretion. ElitaGame shall
              not be liable for any errors, losses or damages caused by your use
              of the Services.
              <br />
              • It is your responsibility to secure the information of your
              Account. Any notification or confirmation received by ElitaGame
              from your Account shall be deemed to have been issued by you
              notwithstanding that such notification or confirmation may have
              been issued by a third party, whether authorized or otherwise, and
              you shall be bound by such notification or confirmation.
              <br />
              • ElitaGame shall not be liable for acting on the notification or
              confirmation sent through your Account. ElitaGame shall not be
              obliged to investigate the authenticity or authority of persons
              effecting the notification or confirmation or verify the
              completeness of such notification or confirmation. Such
              notification or confirmation shall be deemed irrevocable and
              binding on you upon receipt by ElitaGame notwithstanding any
              error, fraud, forgery and lack of clarity or misunderstanding in
              respect of the terms of such notification or confirmation.
              <br />
              • You shall immediately notify ElitaGame upon receipt of
              incomplete, garbled or inaccurate data or information from
              ElitaGame. You shall also immediately notify ElitaGame upon
              receipt of any data or information which is not intended for you.
              This shall be deemed to be confidential in nature and you shall
              delete such data or information from your Account. You shall
              continue to be bound by the requisite confidentiality obligations
              applicable thereafter and you shall not disclose such information
              to any third party.
              <br />
              • You may need your own ElitaGame account to use our Services and
              you are required to verify your details by providing your name and
              mobile number to receive a security token that allows you to
              access our Portals. You may be required to be logged in to the
              account and have a valid payment method associated with it.
              <br />
              • You acknowledge and agree that ElitaGame may at its absolute
              discretion refuse or permit you to use the Services at any point
              of time and ElitaGame shall notify you via e-mail or any other
              form of communication of such refusal.
              <br />
              • Unless otherwise permitted by ElitaGame in writing, you shall
              not upload, post, email transmit or otherwise make available any
              unauthorized or illegal activities on the Portals or directly to
              other users of the Portals.
              <br />
              • You shall not upload, post, email, transmit or in any other
              manner whatsoever make available any material that contains
              software viruses or any other computer code, files or programs
              designed to interrupt, destroy or limit the functionality of any
              computer software or hardware or telecommunication equipment,
              including, without limitation, the Portals.
              <br />
              • You irrevocably and unconditionally allow and permit ElitaGame
              to send to your Account updates on services and events offered or
              provided by ElitaGame.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              5. Digital Goods
            </p>
            <p>
              • The value of the Digital Goods reflected in the Account does not
              represent any credit value in real currency. The Digital Goods
              cannot be exchanged for real cash.
              <br />
              • Unless otherwise permitted by ElitaGame in writing, you are
              prohibited from selling, transferring or otherwise dispose of the
              Digital Goods to any other persons, whether within or outside the
              confines of the Portals (or any of them).
              <br />{" "}
            </p>
            <p style={{ fontWeight: 700 }}>
              REFUND AND EXCHANGE POLICY & DISCLAIMER
            </p>
            <p>
              Unless otherwise specified, any form of Digital Goods purchased
              into the customer's Account is non-refundable, non-transferable,
              and non-exchangeable.
              <br />
              ElitaGame reserves the rights to consider refund or exchange
              requests under exceptional cases, such as, if the goods bought-in
              in any form of Digital Goods is deemed faulty or damaged, is found
              by ElitaGame, in sole and absolute discretion, to be faulty or
              damaged.
              <br />
              The customer is required to submit a request to ElitaGame.com
              within 6 months from the date of purchase on any faulty or damaged
              goods. Failure to do so will automatically forfeit the customer's
              right to make any refund or exchange.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>6. Payment</p>
            <p>
              • The buyer is required to input all relevant information, such as
              quantity, product region, server type, etc, on the product page.
              The final amount, including all applicable fees and taxes, will be
              clearly displayed on the website before proceeding to the payment
              page. If the buyer deems the final amount to be incorrect, they
              have the option to not proceed with the purchase. ElitaGame
              encourage buyers to carefully review their order details before
              finalizing their purchase to ensure accuracy.
              <br />
              • For any payment-based services, ElitaGame does not offer any
              kind of subscription-based or recurring services. All payments
              made to ElitaGame are for one-time purchases only, and this
              applies to all product categories, including ElitaGame Gift Card,
              Softpin, and Direct Top Up.
              <br />
              • You may pay for the Services in such currency that is available
              on the Portals in accordance with the prevailing exchange rate
              determined by ElitaGame at its absolute discretion.
              <br />
              • You shall be solely liable to make payments and applicable
              taxes, if any, in relation to and in connection with the usage of
              the Services (or any of them) through the Account.
              <br />
              • ElitaGame shall have the absolute discretion to cancel any
              payment request made by you without assigning any reasons
              whatsoever.
              <br />
              • ElitaGame shall be entitled to vary or modify or remove the
              modes of payment available on the Portals (or any of them) at any
              time without prior notice. Any payment accepted for orders in
              processing prior to the removal of the affected payment mode will
              be completed.
              <br />
              • Please read the description thoroughly and confirm that the game
              name, server, account name and the amount purchased are correct.
              ElitaGame assumes no liability for wrongly made purchases made by
              the customer due to negligence and/or false/wrong information
              provided, which may result in damages/ losses. By purchasing any
              products from ElitaGame, the customer understands, acknowledges
              and accepts this release of liability.
              <br />
              • As part of or separate from the dispute handling process,
              ElitaGame may determine that a mistake has been made that affects
              you. If ElitaGame determines that you have been incorrectly
              charged or overcharged, ElitaGame will credit your account or
              otherwise arrange for a refund to rectify the mistake. If
              ElitaGame concludes that you were not charged when you ought to
              have been, or that you have been undercharged, ElitaGame may debit
              or charge your account or otherwise collect a payment to rectify
              the mistake accordingly.
              <br />
              • If you encounter any difficulties, please do not hesitate to
              contact our technical support for further assistance.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              7. Availability of Services
            </p>
            <p>
              • The Services are usually available on a daily basis unless
              otherwise specified herein.
              <br />
              • There may be certain times that the Services may not be
              available due to maintenance or malfunction of the Portals or such
              other reasons beyond the control of ElitaGame. ElitaGame makes no
              warranty that the Services will be available at the times stated
              herein.
              <br />
              • Unless otherwise provided in these Terms of Service, ElitaGame
              shall be entitled, at its absolute discretion, to change the
              procedures and/or the mode of operation of the Services at any
              time and from time to time for any reason whatsoever.
              <br />
              • Notwithstanding any provisions to the contrary in these Terms of
              Service, ElitaGame shall be entitled to:
              <br />
              1. Immediately terminate, discontinue, withdraw or suspend your
              use of the Services; or
              <br />
              2. Impose conditions or restrictions on your use of the Service.
              <br />
              • In addition to above, if you do not utilise the Services for a
              continuous period of three (3) months, ElitaGame may, at its
              absolute discretion, charge a fee for the maintenance of your
              Account.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              8. Store Credit
            </p>
            <p>
              • To use Store Credit, you must maintain sufficient Store Credit
              in the Account before you use the Services.
              <br />
              • Store Credit can be topped-up in the Account through the payment
              methods listed on the Portals. Store Credit can be used to
              purchase any of the Services or Digital Goods.
              <br />
              • If there is insufficient Store Credit when you purchase any of
              the Services, ElitaGame shall have the absolute discretion to
              either:
              <br />
              1. Reject or suspend the transaction; or
              <br />
              2. Require you to pay the shortfall through any of the other
              methods of payment available on the Portals.
              <br />
              • ElitaGame shall, as and when it deems fit, amend, modify, remove
              or add any Store Credit or Store Credit account without prior
              notice to you.
              <br />
              • The Store Credit in the Account shall automatically expire,
              without prior notice given by ElitaGame, on the last day of the
              second (2nd) year from the day when the Store Credit was first
              credited into the Account or such other timeframe as ElitaGame may
              determine.
              <br />
              • When the Account is closed, Store Credit is no longer accessible
              by you and any remaining balance of Store Credit will be refunded.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>9. Gift Card</p>
            <p>
              • Each Gift Card must be redeemed in a single transaction by
              purchasing any Services on any of the Portals.
              <br />
              • If the transaction value is more than the Gift Card value, such
              Gift Card value in excess of the transaction value will be
              credited into the Account as Store Credit.
              <br />
              • If the transaction value is more than the Gift Card value, you
              are required to settle the shortfall with the Store Credit
              available in the Account or such methods of payment available on
              the Portals.
              <br />
              • The Gift Card has a set dollar value that is printed on the
              front of the Card and cannot be used to purchase other Gift Cards.
              <br />
              • Each Gift Card is not transferable and cannot be exchanged with
              cash.
              <br />
              • ElitaGame shall not be liable for any Gift Card that is stolen,
              misplaced or misused without authorisation. For the avoidance of
              doubt, ElitaGame shall not be obliged to enquire or verify at the
              redemption of the Gift Card, if such Gift Card has been properly
              obtained.
              <br />
              • ElitaGame shall not be held responsible for the loss or damage
              of the Gift Card and any losses or damages suffered by the holder
              of the Gift Card that arise from or are in connection with the
              loss or damage of the Gift Card.
              <br />
              • Notwithstanding above, if ElitaGame has any doubts as to the
              authenticity of a Gift Card, ElitaGame shall have the absolute
              discretion to withhold, suspend or cancel such Gift Card without
              any prior reference to you.
              <br />
              • ElitaGame reserves the right to deactivate/disable the Gift Card
              if it is fraudulently obtained or used in any means of payment for
              unsanctioned services unauthorized by ElitaGame.
              <br />
              • Each Gift Card shall be subject to such further rules and
              regulations as ElitaGame may introduce at any time or from time to
              time.
              <br />
              • Each Gift Card shall automatically expire, without prior notice
              given by ElitaGame, on the last day of the second (2nd) year from
              the day when that Gift Card was first purchased or such other
              timeframe as ElitaGame may determine.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              10. ElitaGame Points
            </p>
            <p>
              • You will be rewarded with ElitaGame Points for each purchase of
              goods or services on the Portals.
              <br />
              • You may redeem the ElitaGame Points for goods or Services on the
              Portals. The ElitaGame Points required to redeem such good or
              service shall be as stated in the Portals.
              <br />
              • The redemption of the ElitaGame Points shall be subject to such
              further rules and regulations as ElitaGame may introduce at any
              time or from time to time.
              <br />
              • ElitaGame Points cannot be exchanged for cash.
              <br />
              • Each ElitaGame Points shall automatically expire, without prior
              notice given by ElitaGame, on the last day of the second (2nd)
              year from the day when that ElitaGame Points was first rewarded to
              you or such other timeframe as ElitaGame may determine.
              <br />
              • ElitaGame Points will be forfeited once an account is closed and
              you will not be able to reactivate your account or redeem them
              after.
              <br />
            </p>
            <p style={{ fontWeight: 700 }}>
              REFUND AND EXCHANGE POLICY & DISCLAIMER
            </p>
            <p>
              ElitaGame shall not be held responsible for the loss or damage of
              the Gift Card and any of the losses or damages suffered by the
              holder of the Gift Card that arise from or in connection with the
              loss or damage of the Gift Card.
              <br />
              Any form of CD Key, Gift Card, Time Card, Expansion, Game Points,
              Pre-paid Card, Trial/Beta/Item Code, Game Key, Softpin purchased
              into the customer's account is neither refundable nor
              exchangeable.
              <br />
              However, refund or exchange request in exceptional cases will be
              considered if the goods bought-in in any form of CD Key, Gift
              Card, Time Card, Expansion, Game Points, Pre-paid Card,
              Trial/Beta/Item Code, Game Key is deemed faulty or damaged.
              <br />
              The customer is required to submit a request to ElitaGame.com
              within 6 months from the date of purchase on any faulty or damaged
              goods. Failure to do so will automatically forfeit the customer's
              right to make any refund or exchange.
              <br />
              ElitaGame reserves the right to amend any of the terms and
              conditions above without prior notice.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              11. Limitation on Liability
            </p>
            <p>
              You agree and confirm that:
              <br />
              (a) ElitaGame shall not be liable for indirect, incidental,
              special, exemplary, punitive or consequential damages, including
              lost profits, lost data, personal injury or property damage
              related to, in connection with, or otherwise resulting from any
              use of the Portals and Services, even if ElitaGame has been
              advised of the possibility of such damages. ElitaGame shall not be
              liable for any damages, liability or losses arising out of your
              use of or reliance on the ElitaGame Portals and Services or your
              inability to access or use the same.
              <br />
              (b) ElitaGame takes every effort to ensure that the product
              descriptions on the website are as accurate as possible. However,
              to the extent permitted by law, we do not warrant that such
              product descriptions are complete and accurate. ElitaGame does not
              assume any responsibility or liability for the products, or
              content produced by any third parties. You should carefully review
              their privacy statements and other conditions of use.
              <br />
              (c) In any event, the liability of ElitaGame shall be limited to
              the value of the Services provided by ElitaGame to you for the 3
              months prior to the date such damage is allegedly first suffered.
              <br />
              (d) The limitations and disclaimer in this section do not purport
              to limit liability or alter your rights as a consumer that cannot
              be excluded under applicable law.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              12. Intellectual Property Rights
            </p>
            <p>
              All copyrights, trade marks, service marks belong to the
              corresponding owners/publishers and ElitaGame is not related or
              associated to any of the said owners/publishers in any respect.
              All Services offered on the Portals are offered by ElitaGame, not
              the owners/publishers.
              <br />
              Except as expressly authorized by these Terms, you have no right,
              title, or interest in or to the intellectual property rights. You
              may not, without any express written permission (or that of our
              supplier or licensors, where applicable), in any form or by any
              means adapt, reproduce, modify, display, perform, publish,
              distribute, disseminate, broadcast, circulate, or create
              derivative works from any of our Intellectual Property.
              <br />
              Such copyrights, trade marks, service marks, and other
              intellectual property rights owned by and used by ElitaGame in its
              provision of Services solely belong to ElitaGame or its licensors,
              and shall remain ElitaGame’ or its licensors’ property. Neither
              these Terms of Services nor the use of the Services convey or
              grants you any rights: (i) in relation to the Services except for
              the limited license granted above; or (ii) to use or reference in
              any manner the ElitaGame’ company name/brand, logo, product and
              service name(s), trademarks or services marks, or those of
              ElitaGame’ licensors.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              13. Reliability of Portals
            </p>
            <p>
              • You are aware that all transactions conducted on the Portals are
              through telecommunication and data network, and may be subject to
              disruption due to technical malfunctions, defects, or problems by
              reason or in connection with the network provider. • You are fully
              aware that your receipt of the notification from ElitaGame and
              vice versa may be delayed or prevented by factors affecting the
              relevant service providers and other relevant parties.You accept
              that ElitaGame cannot guarantee the prompt delivery of such
              notification or confirmation. • You acknowledge and confirm that
              you shall take all steps and measures to check and verify the
              transaction history of your Account.
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>14. Account</p>
            <p>
              • You shall immediately notify ElitaGame if you are aware or
              believe your Account has been hacked or compromised.
              <br />
              • You shall be liable for all transactions conducted through your
              Account at any time prior to the receipt by ElitaGame of your
              notification as stated above.
              <br />
              • Upon receipt of such notice, ElitaGame may, as it deems fit,
              suspend its Services to you pending the conclusion of
              investigations.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              15. Disclosure of Information
            </p>
            <p>
              • ElitaGame shall be entitled and you irrevocably and
              unconditionally consent and authorise ElitaGame to the extent
              permitted by law, to disclose or release any information
              pertaining to you or your transactions through the
              <br />
              • Portals to such extent that ElitaGame may at its absolute
              discretion deem fit to:
              <br />
              1. Such persons as ElitaGame may be required to disclose under the
              applicable law;
              <br />
              2. Such other persons or entity pursuant to any governmental
              directive or order of the court; or
              <br />
              3. Any other party to whom disclosure is deemed to be reasonably
              necessary by ElitaGame in relation to the provision of Services to
              you.
              <br />
              • Save as otherwise permitted above, ElitaGame will not disclose
              your personal information to any other party without prior
              notification to you.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              16. Applicable Laws and Regulations
            </p>
            <p>
              • Your use of the Services shall be governed by and construed in
              accordance with the laws of the Socialist Republic of Vietnam
              (SRV).
              <br />
              • You agree to submit any dispute, controversy or claim arising
              out of or in connection with the Services, including these Terms
              of Service, to the exclusive jurisdiction of the courts of the
              Socialist Republic of Vietnam (SRV).
              <br />
              • Where required, you shall obtain the approval or consent or
              permission of the relevant regulatory authorities prior to using
              the Services.
              <br />
              • For cross-border transactions, you shall be responsible for
              ensuring that, and you shall not violate the laws existing in the
              countries involved in the transaction.
              <br />
              • You shall fully indemnify, defend and hold ElitaGame, its
              officers, directors, employees, agents , and its related
              corporations from and against any and all claims, demands, losses,
              liabilities, and expenses (including legal fees) arising out of or
              in connection with your breach or contravention or non-compliance
              with any provision of this Terms of Service.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              17. Suspension, Termination, Cancellation of Services
            </p>
            <p>
              • The Services (or any part thereof) may be cancelled by ElitaGame
              at any time without prior notice to you. After cancellation, the
              Services (or any part thereof) may be reinstated in such manner
              and on such Terms of Service as ElitaGame may at its absolute
              discretion determine.
              <br />
              • Your rights under this terms will automatically terminate
              without notice if you fail to comply with any of its terms. We may
              terminate the terms or restrict, suspend, or canceled your use of
              Services at ElitaGame discretion at any time, including if
              ElitaGame determine that your use violates the terms, is improper,
              or otherwise involves fraud or misuse of Services or harms our
              interests or those of another user. ElitaGame shall notify you via
              e-mail or any other form of communication of such suspension,
              termination or cancellation.
              <br />
              • ElitaGame reserves the right at all times to suspend or block
              access to and use of the Services (or any part thereof) for any
              reason whatsoever and for any length of time and upon any
              conditions that ElitaGame may at its absolute discretion
              determine.
              <br />
              • Upon suspension of the Services (or any part thereof):
              <br />
              1. All rights granted to you hereunder shall immediately will be
              frozen pending investigations;
              <br />
              2. All Digital Goods held under your Account or otherwise
              purchased by you shall be frozen pending investigations;
              <br />
              3. ElitaGame may at its absolute discretion, decide not to act on
              any request received by you after the effective date of
              suspension;
              <br />
              4. ElitaGame may at its absolute discretion, decide not to act on
              any confirmation or request received by you between the date of
              notice of suspension is given to you and the effective date of
              suspension (if there is a lapse of time between the two dates);
              and
              <br />
              5. ElitaGame shall notify you of the outcome of investigations.
              <br />
              • Upon cancellation or termination of the Services (or any part
              thereof):
              <br />
              1. All rights granted to you hereunder shall immediately terminate
              and shall revert to ElitaGame;
              <br />
              2. You shall immediately pay to ElitaGame all outstanding fees and
              charges due and owing to ElitaGame;
              <br />
              3. ElitaGame may at its absolute discretion, decide not to act on
              any request received by you after the effective date of
              termination;
              <br />
              4. ElitaGame may at its absolute discretion, decide not to act on
              any confirmation or request received by you between the date of
              notice of cancellation/termination is given to you and the
              effective date of termination (if there is a lapse of time between
              the two dates); and
              <br />
              5. You hereby irrevocably and unconditionally authorise ElitaGame
              to set off all moneys due and owing by you to ElitaGame (if any)
              from the moneys that are payable by ElitaGame to you in respect of
              the delivered purchased Digital Goods.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>18. Notices</p>
            <p>
              • All notices and documents required to be given to ElitaGame
              shall be sent by registered post to the ElitaGame’ address listed
              on the Portals. Any notice or document sent by you to ElitaGame
              shall be deemed duly notified when such notice or document is
              received by ElitaGame.
              <br />
              • All notices and documents required to be given by ElitaGame
              under these Terms of Service to you shall be sent to you by any
              one of the following methods:
              <br />
              1. Electronic mail to your last known electronic mail address
              according to ElitaGame’ records;
              <br />
              2. Posting the notice or communication on the Portals;
              <br />
              3. Notices placed with or in any of ElitaGame’ written
              communications to you;
              <br />
              4. Notices placed through any media.
              <br />
              • Any notice or document or communication through electronic mail
              or any other form of communication given by ElitaGame to you shall
              be deemed to be served and received by you on the day following
              the date of transmission of such notice or document.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              19. Waiver And Severance
            </p>
            <p>
              • Any failure by ElitaGame to enforce at any time or for any
              period any one or more of these Terms of Service shall not be a
              waiver of them or of the right at any time subsequently to enforce
              these Terms of Service.
              <br />
              • In the event that any provisions of these Terms of Service is
              declared by any judicial or other competent authority to be void,
              voidable, illegal or otherwise unenforceable ElitaGame shall be
              entitled to amend that provision in such reasonable manner as
              would achieve the object and intention of ElitaGame as to the
              void, voidable, illegal or otherwise unenforceable provision.
              <br />
              • In any event, if any provision of these Terms of Service is
              determined to be invalid or unenforceable, then such invalidity or
              unenforceability shall not have any effect on any other provision
              of these Terms of Service, which shall remain valid and
              enforceable.
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>20. Variation</p>
            <p>
              • ElitaGame reserves the right to amend these Terms of Service
              (and any other guidelines and procedures, specific rules,
              procedures, terms and conditions for the products, services or
              facilities offered) from time to time at its sole discretion.
              These Terms of Service may be modified, added to, deleted or
              varied by ElitaGame by way of posting on the Portals or in any
              such other manner as ElitaGame may in its absolute discretion
              determine.
              <br />
              • ElitaGame may also provide new features, upgrades, updates,
              patches, and other modifications on the ElitaGame websites or any
              of our platforms remotely. You hereby grant to ElitaGame the right
              to deploy and apply such variations.
              <br />
              • ElitaGame shall notify you through the Portal of such amendments
              within 30 days from the date of implementation of the same.
              <br />
              • You agree that continued use of the Portals and Services shall
              constitute your acceptance of these Terms of Service (as modified
              and varied from time to time).
              <br />
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              21. Assignment
            </p>
            <p>
              You may not assign rights under these Terms of Service without the
              prior written consent of ElitaGame.
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              22. Binding Effect
            </p>
            <p>
              These Terms of Service shall be binding on your heirs, personal
              and legal representatives, estate, successors-in-title and
              permitted assigns (where applicable) you.
            </p>
          </div>
          <Footer />
        </div>
      </Box>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
