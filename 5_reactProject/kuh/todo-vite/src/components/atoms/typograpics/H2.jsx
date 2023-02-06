import { css } from "@emotion/css";

export function H2({ children }) {
  return (
    <h2
      className={css`
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
      `}
    >
      {children}
    </h2>
  );
}
