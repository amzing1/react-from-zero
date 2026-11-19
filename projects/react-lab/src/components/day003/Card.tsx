import type { ReactNode } from "react";

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const Card = ({ header, footer, children }: Props) => {
  return (
    <>
      {header && <header>{header}</header>}
      {children}
      {footer && <footer>{footer}</footer>}
    </>
  );
};

export default Card;
