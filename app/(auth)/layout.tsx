import { ReactNode } from "react";
const layout = ({ children }: { children: ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default layout;
