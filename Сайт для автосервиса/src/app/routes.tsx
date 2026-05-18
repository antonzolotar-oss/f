import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Promotions } from "./pages/Promotions";
import { PromotionDetail } from "./pages/PromotionDetail";
import { RequestForm } from "./pages/RequestForm";
import { PriceList } from "./pages/PriceList";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Guarantees } from "./pages/Guarantees";
import { GuaranteeDetail } from "./pages/GuaranteeDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "promotions", Component: Promotions },
      { path: "promotions/:id", Component: PromotionDetail },
      { path: "request", Component: RequestForm },
      { path: "price-list", Component: PriceList },
      { path: "service/:id", Component: ServiceDetail },
      { path: "guarantees", Component: Guarantees },
      { path: "guarantee/:id", Component: GuaranteeDetail },
      { path: "*", Component: NotFound },
    ],
  },
]);
