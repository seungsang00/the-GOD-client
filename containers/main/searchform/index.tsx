import React, {
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import moment from 'moment';
import { Artists, Dates, IMember } from '@interfaces';
import { DatePicker, Dropdown, DropdownTrigger, OptionList } from '@components';
import { sampleSearchInputOptions } from '@utils/sample-data';
import {
  handleShowOption,
  handleChangeState,
  handleOptionList,
} from '@utils/dropdownUtils';
import {
  MainSearchFormContainer,
  DificientAlert,
} from './mainsearchform.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getArtistThunk } from 'modules/artist';
import { useRouter } from 'next/router';

import { PopupNoTitle } from 'components/Popup';
import useModal from 'hooks/useModal';

const MainSearchForm = ({
  handler,
}: {
  handler: MouseEventHandler;
}): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: artistData } = useSelector(
    ({ artist }: RootState) => artist.read
  );

  const { isOpen: searchPopupIsOpen, modalController, setIsOpen } = useModal();
  const [popupMessage, setPopupMessage] = useState('');

  // FIXME: option list 불러오기 (main 접속시 최초 1회)
  const optionlistB = sampleSearchInputOptions.location;

  // 드롭다운을 보여줄 것인지 여부
  const [showA, setShowA] = useState<boolean>(false);
  const [showB, setShowB] = useState<boolean>(false);
  const [showC, setShowC] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>('inactive'); // 검색 버튼 클래스

  // 입력 완료 여부
  const [isDoneA, setIsDoneA] = useState<boolean>(false);
  const [isDoneB, setIsDoneB] = useState<boolean>(false);
  // const [isDoneC, setIsDoneC] = useState<boolean>(false); // ! C는 datepicker이기 때문에 불필요. useEffect로 핸들링

  // 드롭다운의 내용을 구성할 옵션 리스트 관리
  const [listA, setListA] = useState<Artists | IMember[] | string[]>(
    artistData as Artists
  );
  const [listB, setListB] = useState<string[] | IMember[]>(
    Object.keys(optionlistB)
  );

  // DropdownTrigger 에서 보여줄 문자열 관리
  const [stateA, setStateA] = useState<string | undefined>(undefined); // 아티스트
  const [stateB, setStateB] = useState<string | undefined>(undefined); // 위치
  const [dates, setDates] = useState<Dates>({ startDate: null, endDate: null }); // 날짜

  // queryData 생성
  const [artistId, setArtistId] = useState<string | null>(null);
  const makeQueryData = () => {
    let location = null;
    const tempB = stateB?.split(' ');
    tempB && tempB[1] === '전체'
      ? (location = tempB[0])
      : (location = tempB?.join(' '));

    const queryData = {
      artistId,
      location,
      dateStart: moment(dates.startDate).format('YYYY-MM-DD'),
      dateEnd: moment(dates.endDate).format('YYYY-MM-DD'),
    };
    return queryData;
  };

  // 검색 버튼 핸들러
  const handleSearchClick = (e: MouseEvent) => {
    const { artistId, location, dateStart, dateEnd } = makeQueryData();

    if (
      !artistId ||
      !location ||
      dateStart === 'Invalid date' ||
      dateEnd === 'Invalid date'
    ) {
      let msg = '검색 조건을 입력해 주세요';
      if (!artistId) msg = '아티스트를 선택해 주세요';
      else if (!location) msg = '지역을 선택해 주세요';
      else if (dateStart === 'Invalid date') msg = '시작 날짜를 선택해 주세요';
      else if (dateEnd === 'Invalid date') msg = '종료 날짜를 선택해 주세요';

      setPopupMessage(msg);
      setIsOpen(true);
    } else {
      handler(e);
      router.push(
        `/search?artistId=${artistId}&location=${location}&dateStart=${dateStart}&dateEnd=${dateEnd}`
      );
    }
  };

  // 상태 관리 핸들러
  const handleChangeStateA = (selected: string) => {
    handleChangeState(selected, stateA, isDoneA, setStateA);
  };
  const handleChangeStateB = (selected: string) => {
    handleChangeState(selected, stateB, isDoneB, setStateB);
  };

  // 옵션 클릭 시 드롭다운의 내용을 바꾸거나 OR 닫아버리거나 OR 다음 드롭다운을 여는 옵션핸들러
  const handleOptionA = (key: string) => {
    handleOptionList(
      key,
      listA,
      setListA,
      setShowA,
      setIsDoneA,
      setShowB,
      stateB,
      null,
      setArtistId
    );
  };
  const handleOptionB = (key: string) => {
    handleOptionList(
      key,
      optionlistB,
      setListB,
      setShowB,
      setIsDoneB,
      setShowC,
      dates.startDate,
      dates.endDate
    );
  };

  // 데이트피커 컨트롤
  const [focusedInput, setFocusedInput] =
    useState<'startDate' | 'endDate' | null>('startDate');

  const handleFocusInput = (focusedInput: 'startDate' | 'endDate' | null) => {
    focusedInput ? setFocusedInput(focusedInput) : setFocusedInput('startDate');
  };
  useEffect(() => {
    if (dates.endDate) {
      setShowC(false); // 데이트피커 옵션창 닫기
    }
  }, [dates.endDate]);

  useEffect(() => {
    if (stateA && stateB && dates.startDate && dates.endDate) {
      setIsActive('active');
    } else {
      setIsActive('inactive');
    }
  }, [stateA, stateB, dates.startDate, dates.endDate]);

  useEffect(() => {
    if (!artistData) {
      dispatch(getArtistThunk());
    }
  }, [artistData]);

  // display vw check
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, [viewWidth]);

  return (
    <>
      <MainSearchFormContainer className="main__banner">
        <section
          className="main__searchform"
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <div
            className={`trigger-wrapper ${!isDoneA ? 'active' : 'inactive'}`}
          >
            <DropdownTrigger
              value={stateA}
              placeholder="아티스트 선택"
              onClick={(e) =>
                handleShowOption(e, showA, setShowA, setShowB, setShowC)
              }
            ></DropdownTrigger>
          </div>
          <div
            className={`trigger-wrapper ${
              isDoneA && !isDoneB ? 'active' : 'inactive'
            }`}
          >
            <DropdownTrigger
              value={stateB}
              placeholder="위치 선택"
              onClick={(e) =>
                handleShowOption(e, showB, setShowB, setShowA, setShowC)
              }
            ></DropdownTrigger>
          </div>
          <div
            className={`trigger-wrapper ${
              isDoneA && isDoneB ? 'active' : 'inactive'
            }`}
          >
            <DropdownTrigger
              value={
                dates.startDate
                  ? moment(dates.startDate).format('YYYY.MM.DD')
                  : '날짜 입력'
              }
              placeholder="dd3"
              onClick={(e) =>
                handleShowOption(e, showC, setShowC, setShowB, setShowA)
              }
            ></DropdownTrigger>
          </div>
          <div
            className={`trigger-wrapper ${
              isDoneA && isDoneB ? 'active' : 'inactive'
            }`}
          >
            <DropdownTrigger
              value={
                dates.endDate
                  ? moment(dates.endDate).format('YYYY.MM.DD')
                  : '날짜 입력'
              }
              placeholder="dd3"
              onClick={(e) =>
                handleShowOption(e, showC, setShowC, setShowB, setShowA)
              }
            ></DropdownTrigger>
          </div>
          {viewWidth && viewWidth > 768 && (
            <div className={`trigger-wrapper search-button ${isActive}`}>
              <div onClick={handleSearchClick}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          )}
        </section>
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Dropdown visible={showA}>
            <OptionList
              list={listA}
              listHandler={handleOptionA}
              stateHandler={handleChangeStateA}
            />
          </Dropdown>
          <Dropdown visible={showB}>
            <OptionList
              list={listB}
              listHandler={handleOptionB}
              stateHandler={handleChangeStateB}
            />
          </Dropdown>
          <Dropdown visible={showC}>
            <DatePicker
              dates={dates}
              handleDateChange={setDates}
              focusedInput={focusedInput}
              handleFocusInput={handleFocusInput}
              numberOfMonths={viewWidth && viewWidth <= 650 ? 1 : 2}
            />
          </Dropdown>
        </section>
        {viewWidth && viewWidth <= 768 && (
          <div className={`search-button__bottom--container ${isActive}`}>
            <div className="search-button__bottom" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} />
              <span>검색하기</span>
            </div>
          </div>
        )}
      </MainSearchFormContainer>
      <DificientAlert>
        <PopupNoTitle
          isOpen={searchPopupIsOpen}
          modalController={modalController}
          isNoti={true}
          description={popupMessage}
          buttonHandler={modalController}
        />
      </DificientAlert>
    </>
  );
};

export default MainSearchForm;
