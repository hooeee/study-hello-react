import { css } from "@emotion/css";

export function H2({ children }) {
  return (
    <h2
      className={css`
        font-size: 16px;
        font-weight: 100;
        line-height: 18px;
      `}
    >
      {children}
    </h2>
  );
}
