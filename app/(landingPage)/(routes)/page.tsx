
import styles from "./page.module.css";

export const metadata = {
  title: "Netflix | Easy Coding Tutorial",
}


// For Components
import { MainBg } from "../_components/MainBg/MainBg";
import { Trending } from "../_components/Trending/Trending";
import Wrapper from "@/app/Components/Wrapper/Wrapper";
import { OnlyonNetflix } from "../_components/OnlyonNetflix/OnlyonNetflix";
import { MoreReasons } from "../_components/MoreReasons/MoreReasons";
import { Faq } from "../_components/Faq/Faq";

export default function Home() {
  return (
    <Wrapper>
      <MainBg />
      <Trending />
      <OnlyonNetflix />
      <MoreReasons />
      <Faq />
    </Wrapper>
  );
}
