export const handleShowOption = (
  e: React.MouseEvent,
  target: boolean,
  setTarget: React.Dispatch<React.SetStateAction<boolean>>,
  setOther1: React.Dispatch<React.SetStateAction<boolean>>,
  setOther2: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.stopPropagation();
  if (e.currentTarget !== e.target) return;
  setTarget(!target);
  setOther1(false);
  setOther2(false);
};

export const handleOptionList = (
  key: string,
  optionObj: { [prop: string]: any },
  setList: React.Dispatch<React.SetStateAction<string[]>>,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>,
  setShowNext: React.Dispatch<React.SetStateAction<boolean>>,
  nextState1: (string | undefined) | (moment.Moment | null),
  nextState2?: moment.Moment | null
) => {
  if (optionObj[key]) {
    setList(optionObj[key]);
    setIsDone(false);
  } else if (nextState2 !== undefined && nextState1 && nextState2) {
    setShow(false);
    setList(Object.keys(optionObj));
    setIsDone(true);
  } else if (nextState2 === undefined && nextState1) {
    setShow(false);
    setList(Object.keys(optionObj));
    setIsDone(true);
  } else {
    setShow(false);
    setShowNext(true);
    setList(Object.keys(optionObj));
    setIsDone(true);
  }
};

export const handleChangeState = (
  selected: string,
  state: string | undefined,
  isDone: boolean,
  setState: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  if (!state) {
    setState(selected);
  } else if (!isDone) {
    setState(state + ' ' + selected);
  } else if (isDone) {
    setState(selected);
  }
};
