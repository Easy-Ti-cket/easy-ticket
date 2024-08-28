import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";
import PrivateRoute from "./pages/PrivateRoute";
import Main from "./pages/main/Main";
import SelectMode from "./pages/selectMode/SelectMode";
import SelectLevel from "./pages/practiceMode/selectLevel/SelectLevel";
import SelectSite from "./pages/challengeMode/selectSite/SelectSite";
// step 0
import Intro from "./pages/practiceMode/step0/Intro";
import ChallangeIntro from "./pages/challengeMode/intro/ChallangeIntro";
// step 1
import SelectPerformance from "./pages/practiceMode/step1/SelectPerformance";
import SelectRound from "./pages/practiceMode/step1/SelectRound";
import SelectRoundInterpark from "./pages/challengeMode/interpark/step1/SelectRoundInterpark";
// step 2
import SelectSeat from "./pages/practiceMode/step2/SelectSeat";
import SelectSeatInterpark from "./pages/challengeMode/interpark/step2/SelectSeatInterpark";
// step 3
import SeatPriceCheck from "./pages/practiceMode/step3/SeatPriceCheck";
import SelectPriceInterpark from "./pages/challengeMode/interpark/step3-step4/SelectPriceInterpark";
// step 4
import SelectPayMethodInterPark from "./pages/challengeMode/interpark/step5-1/SelectPayMethodInterPark";
import SelectPayMethod from "./pages/practiceMode/step4/SelectPayMethod";
import CardPay from "./pages/practiceMode/step4/CardPay";
// step 5
import Step5 from "./pages/practiceMode/step5/Step5";
import Outro from "./pages/challengeMode/outro/Outro";
import Record from "./pages/challengeMode/outro/Record";
import SelectPriceYes24 from "./pages/challengeMode/yes24/step3-step4/SelectPriceYes24";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main />, label: "메인화면-로그인" },
      { path: "select-mode", element: <SelectMode />, label: "모드 선택" },
      { path: "select-level", element: <SelectLevel />, label: "난이도 선택" },
      { path: "select-site", element: <SelectSite />, label: "사이트 선택" },
      { path: "record", element: <Record />, label: "기록 보기" },

      {
        path: "progress",
        element: <ProgressContents />,
        children: [
          {
            path: "step0",
            element: <PrivateRoute element={<Intro />} />,
            label: "인트로 화면"
          },
          {
            path: "step1-1",
            element: <PrivateRoute element={<SelectPerformance />} />,
            label: "공연 선택"
          },
          {
            path: "step1-2",
            element: <PrivateRoute element={<SelectRound />} />,
            label: "날짜 및 회차 선택"
          },
          {
            path: "step2",
            element: <PrivateRoute element={<SelectSeat />} />,
            label: "좌석 선택"
          },
          {
            path: "step3-1",
            element: <PrivateRoute element={<SeatPriceCheck />} />,
            label: "좌석 매수 및 가격 확인"
          },
          {
            path: "step4-1",
            element: <PrivateRoute element={<SelectPayMethod />} />,
            label: "결제방식 / 수단 선택"
          },
          {
            path: "step4-2",
            element: <PrivateRoute element={<CardPay />} />,
            label: "카드 결제창"
          },
          {
            path: "step5",
            element: <PrivateRoute element={<Step5 />} />,
            label: "예매 성공"
          }
        ]
      },
      //실전모드
      {
        path: "challenge",
        children: [
          {
            path: "interpark",
            element: <ProgressContents />,
            children: [
              {
                path: "step0",
                element: <PrivateRoute element={<ChallangeIntro />} />,
                label: "인트로"
              },
              // 공연 선택 단계 추가 필요
              {
                path: "step1",
                element: <PrivateRoute element={<SelectRoundInterpark />} />,
                label: "날짜 및 회차 선택"
              },
              {
                path: "step2",
                element: <PrivateRoute element={<SelectSeatInterpark />} />,
                label: "좌석 선택"
              },
              {
                path: "step3/step4",
                element: <PrivateRoute element={<SelectPriceInterpark />} />,
                label:
                  "가격 할인 및 선택 / 배송 선택 / 주문자 확인 - 프로그래스 3,4"
              },
              {
                path: "step5-1",
                element: (
                  <PrivateRoute element={<SelectPayMethodInterPark />} />
                ),
                label: "결제방식 / 수단 선택 - 프로그래스 5"
              },
              {
                path: "step5-2",
                element: <PrivateRoute element={<CardPay />} />,
                label: "카드 결제창"
              },
              {
                path: "outro",
                element: <PrivateRoute element={<Outro />} />,
                label: "예매 성공"
              }
            ]
          },
          {
            path: "melonticket",
            element: <ProgressContents />,
            children: [
              {
                path: "step0",
                element: <PrivateRoute element={<ChallangeIntro />} />,
                lable: "인트로"
              }
            ]
          },
          {
            path: "ticketlink",
            element: <ProgressContents />,
            children: [
              {
                path: "step0",
                element: <PrivateRoute element={<ChallangeIntro />} />,
                lable: "인트로"
              }
            ]
          },
          {
            path: "yes24",
            element: <ProgressContents />,
            children: [
              {
                path: "step0",
                element: <PrivateRoute element={<ChallangeIntro />} />,
                lable: "인트로"
              },
              {
                path: "step3/step4",
                element: <PrivateRoute element={<SelectPriceYes24 />} />,
                label: "매수 선택 및 가격 선택"
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
