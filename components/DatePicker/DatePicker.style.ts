import styled from '@styles/themed-components';

export const DatePickerStyle = styled.div`
  width: 100%;
  .DayPicker__horizontal {
    width: 100% !important;
    display: flex;
    justify-content: center;
    padding-top: ${({ theme }) => theme.space.sm};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  .DayPicker_transitionContainer {
    height: fit-content;
    min-height: 320px;
  }

  /* 상단 네비게이션 화살표 스타일 */
  .DayPickerNavigation_button__default {
    border: none;
    border-radius: 999px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.gray01};
    }
  }
  .DayPickerNavigation_svg__horizontal {
    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  /* 오른쪽 구석의 화살표를 안보이게 한다. */
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  /* 달력 각 칸의 기본 스타일. */
  .CalendarDay__default {
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    vertical-align: middle;
    outline: none;
    margin: 10px !important;
  }

  /* 달력 각 칸에 호버가 되었을 때 스타일 */
  .CalendarDay__default:hover {
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    background-image: radial-gradient(
      circle closest-side,
      ${({ theme }) => theme.colors.primary} 55%,
      #fff 120%
    );
    color: #fff;
  }

  /* 체크인 체크아웃이 선택되었을 때 그 사의 날짜들에 대한 스타일 */
  .CalendarDay__selected_span {
    background-color: ${({ theme }) => theme.colors.button.default.normal};
    background-image: radial-gradient(
      circle closest-side,
      ${({ theme }) => theme.colors.button.default.normal} 50%,
      #fff 120%
    );
    border: none;
    /* border-radius: 0; */
    color: black;
  }

  /* 체크인 체크아웃이 선택되었을 때 그 사이 날짜들에 호버 혹은 클릭했을 시 스타일 */
  .CalendarDay__selected_span::active,
  .CalendarDay__selected_span:hover {
    color: black;
    background-color: ${({ theme }) => theme.colors.button.default.hover};
  }

  /* 선택된 체크인 체크아웃 날짜에 대한 스타일 */
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${({ theme }) => theme.colors.primary};
    background-image: radial-gradient(
      circle closest-side,
      ${({ theme }) => theme.colors.primary} 95%,
      #fff 120%
    );
    border: none;
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    color: white;
  }

  /* 블록된 날짜에 대한 스타일링 */
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    box-shadow: none;
    text-decoration: line-through;
  }

  /* 선택될 범위에 대한 스타일링 */
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    color: black;
    background-color: #f7f7f7;
    border: none;
  }

  /* 요일 표시 부분에 대한 스타일. */
  .CalendarMonth_caption {
    margin-bottom: 10px;
  }
`;
