import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "晴沐宠物洗护 | 宠物洗澡美容预约",
  description: "为猫咪和狗狗提供洗澡、精修、护理和皮毛调理服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
