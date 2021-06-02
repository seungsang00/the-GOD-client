import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { SidebarContainer } from './Sidebar.style';

interface SidebarProps {
  list: MenuList[];
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

type MenuList = {
  isLink: boolean;
  text: string;
  link: string;
};

const Sidebar = ({ list, ref }: SidebarProps): ReactElement => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <SidebarContainer ref={ref}>
      <ul className="list">
        {list &&
          list.map((item, idx) => (
            <li
              className={
                category === item.link ? 'list-item active' : 'list-item'
              }
              key={`list-item-${idx}`}
            >
              <div>
                {item.isLink ? (
                  <Link href={`/mypage/setting/${item.link}`}>
                    <a>{item.text}</a>
                  </Link>
                ) : (
                  <a href={`#${item.link}`}>{item.text}</a>
                )}
              </div>
            </li>
          ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
