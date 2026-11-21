import { createContext, useContext, type ReactNode } from "react";

const INFO = {
  PHONE_NUMBER: "+15616312124",
  PHONE_DISPLAY: "561 631 21 24",
  PHONE_LINK: "tel:+15616312124",
  WHATSAPP_LINK: "https://wa.me/15616312124",
  INSTAGRAM_URL: "https://www.instagram.com/alexpoolcleaning1",
  FACEBOOK_URL: "https://www.facebook.com/search/top?q=Alex%20Pool%20Cleaning",
};

type Info = typeof INFO;

const InfoContext = createContext<Info | null>(null);

export function InfoContextProvider({ children }: { children: ReactNode }) {
  return <InfoContext.Provider value={INFO}>{children}</InfoContext.Provider>;
}

export function useInfoContext() {
  const ctx = useContext(InfoContext);
  if (!ctx) {
    throw new Error(
      "useInfoContext debe usarse dentro de <InfoContextProvider>",
    );
  }
  return ctx;
}
