import { ReactNode } from "react";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
