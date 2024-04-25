// app/providers.tsx
// "use client";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
import AppHeader from "@/components/header/app.header";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeRegistry>
        <AppHeader />
        {children}
      </ThemeRegistry>
    </Provider>
  );
}
