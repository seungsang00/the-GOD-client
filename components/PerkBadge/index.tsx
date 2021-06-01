import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PerkList, PerkProps } from '@interfaces';
import { PerkBadgeStyle } from './PerkBadge.style';
import {
  faBaby,
  faBus,
  faCat,
  faParking,
  faSort,
  faSubway,
  faTrain,
} from '@fortawesome/free-solid-svg-icons';

const PerkBadge = ({ perk, isActive }: PerkProps) => {
  const perkList: PerkList = {
    bus: { text: '버스 정류장', icon: faBus },
    subway: { text: '지하철 정류장', icon: faSubway },
    train: { text: '기차역 인근', icon: faTrain },
    sort: { text: '엘리베이터', icon: faSort },
    baby: { text: '유아용 좌석', icon: faBaby },
    parking: { text: '주차 가능', icon: faParking },
    cat: { text: '반려동물', icon: faCat },
  };
  return (
    <PerkBadgeStyle className={isActive ? 'perk active' : 'perk'}>
      <div className="perk-icon">
        <FontAwesomeIcon icon={perkList[perk].icon} />
      </div>
      <div className="perk-text">{perkList[perk].text}</div>
    </PerkBadgeStyle>
  );
};

export default PerkBadge;
