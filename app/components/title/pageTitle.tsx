import { FC } from "react";

interface PageTitleProps {
  title: string;
}

/**
 * 페이지 제목 표시 컴포넌트
 * @constructor
 */
const PageTitleComponent: FC<PageTitleProps> = ({ title }) => {
  return (
    <>
      <div className={"wrapper flex-col"}>
        <h2 className={"title"}>{title}</h2>
      </div>
      <hr />
    </>
  );
};

export default PageTitleComponent;
