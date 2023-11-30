export const metadata = {
  title: "Portfolio",
};
import SideNav from "../../components/sideNav/SideNav";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
