import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/home"), {
  ssr: false,
});
export default function Home() {
  return <HomePage />;
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
