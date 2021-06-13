import { Button, TextInput, Toggle } from '@components';
import { ToggleProps } from '@interfaces';
import { nullChecker } from '@utils/contentUtils';
import { inputLocation, inputMobile, inputPerks } from 'modules/content';
import { RootState } from 'modules/reducer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LocationForm = ({
  onSubmit,
  onPrev,
}: {
  onSubmit: () => void;
  onPrev: () => void;
}) => {
  class MapModule {
    kakao: any;
    mapOption: any;
    miniMapOption: any;
    mapContainer: any;
    miniMapContainer: any;
    map: any;
    miniMap: any;
    ps: any;
    // customOverlay: any;
    constructor() {
      const { kakao }: any = window;
      this.kakao = kakao;
      this.mapOption = {
        center: new kakao.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };
      this.miniMapOption = {
        center: new kakao.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        draggable: false,
        level: 7, // 지도의 확대 레벨
      };
      this.mapContainer = document.getElementById('map'); // 지도를 표시할 div
      this.miniMapContainer = document.getElementById('miniMap');
      this.miniMap = new kakao.maps.Map(
        this.miniMapContainer,
        this.miniMapOption
      ); // 지도를 표시할 div
      this.map = new kakao.maps.Map(this.mapContainer, this.mapOption);
      this.ps = new kakao.maps.services.Places();
      this.displayMarker = this.displayMarker.bind(this);
      this.placesSearchCB = this.placesSearchCB.bind(this);
      this.keywordSearch = this.keywordSearch.bind(this);
    }

    displayMarker(place: any) {
      const { map } = this;
      const content = `<div class="location_overlay_box">
          <div>
            <div class="location_overlay_storename">
            가게이름: ${place.place_name}
            </div>
            <div class="location_overlay_address">
            위치: ${place.road_address_name}
            </div>
            <div class="location_overlay_mobile">
            연락처: ${place.phone ? place.phone : '없음'}
            </div>
          </div>
        </div>`;
      // 마커를 생성하고 지도에 표시합니다
      var marker = new this.kakao.maps.Marker({
        map: this.map,
        position: new this.kakao.maps.LatLng(place.y, place.x),
      });
      new this.kakao.maps.Marker({
        map: this.miniMap,
        position: new this.kakao.maps.LatLng(place.y, place.x),
      });
      var overlay = new this.kakao.maps.CustomOverlay({
        content: content,
        position: marker.getPosition(),
      });
      // 지도 이동 막기
      this.miniMap.setDraggable(false);
      // 마커에 클릭이벤트를 등록합니다
      this.kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        // TODO: 클릭하면 맵이 닫히고
        dispatch(
          inputLocation({
            storeName: place.place_name,
            roadAddress: place.road_address_name,
            location: { lat: place.y, lng: place.x },
          })
        );
        if (place.phone) {
          dispatch(inputMobile(place.phone));
        }

        setLocationBoxActive(false);
      });
      this.kakao.maps.event.addListener(marker, 'mouseover', function () {
        // 마우스를 올리면하면 장소명이 인포윈도우에 표출됩니다
        overlay.setMap(map);
      });
      this.kakao.maps.event.addListener(marker, 'mouseout', function () {
        // 마커에서 마우스가 나가면 오버레이창이 사라집니다.
        overlay.setMap(null);
      });
    }

    placesSearchCB(data: any, status: any) {
      if (status === this.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new this.kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          this.displayMarker(data[i]);
          bounds.extend(new this.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        this.miniMap.setBounds(bounds);
        this.map.setBounds(bounds);
      }
    }

    keywordSearch(keyword: string) {
      this.ps.keywordSearch(keyword, this.placesSearchCB);
    }
  }

  const { perks, address, mobile } = useSelector(
    ({ content }: RootState) => content.form
  );
  const [searchModule, setSearchModule] = useState<MapModule | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchModule(new MapModule());
  }, []);

  useEffect(() => {
    setDisabled(nullChecker({ keyword: address.storeName }));
  }, [perks, address, mobile]);
  useEffect(() => {
    if (searchModule) {
      searchModule.keywordSearch(keyword);
    }
  }, [searchModule, keyword]);
  useEffect(() => {
    if (searchModule && address.storeName.length !== 0) {
      setKeyword(address.storeName);
    }
  }, [searchModule, address]);

  const setLocationBoxActive = (enable: boolean) => {
    const locationBox = document.querySelector('.location-search-box');
    if (!locationBox) return;
    locationBox.setAttribute('active', enable.toString());
  };

  return (
    <div className="location-box">
      <div className="location-search-box">
        <div className="section-title">
          <h2>매장명 검색</h2>
          <span className="section-description">
            지도에서 핀을 클릭하면 자동으로 주소값이 입력됩니다.
          </span>
        </div>
        <TextInput
          id="sample5_address"
          type="text"
          disabled={false}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setLocationBoxActive(false);
              (e.target as HTMLInputElement).blur();
            }
          }}
          placeholder="매장명 또는 키워드를 입력해주세요 (ex. 오가다 KBS)"
          onClick={() => {
            // 테블릿 사이즈 일 때 높이가 입력창 만큼 줄어들어야 한다.
            // 지도에서 위치 선정이 끝나면 다시 원래 크기로 돌아간다.
            setLocationBoxActive(true);
          }}
        />
        <div id="preview">
          <div
            id="miniMapWrapper"
            style={{ width: '7rem', height: '7rem', marginRight: '0.5rem' }}
          >
            <div
              id="miniMap"
              style={{
                width: '100%',
                height: '100%',
                zIndex: 10,
              }}
            ></div>
          </div>
          <div className="preview-text">
            <h3>매장명</h3>
            <div id="mapAddress">{address.storeName}</div>
            <h3 className="detail">상세 주소</h3>
            <TextInput
              id="detailAddr"
              type="text"
              disabled={false}
              onChange={() => {}}
              value={address.roadAddress}
            />
          </div>
        </div>
        <div className="location-mobile">
          <TextInput
            type="tel"
            disabled={false}
            value={mobile}
            placeholder="연락처"
            onChange={(e) => {
              const { value } = e.target;
              dispatch(inputMobile(value));
            }}
          />
        </div>
        <div className="location-info">
          <div className="section-title">
            <h2>편의 정보</h2>
          </div>
          <div className="perks" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.keys(perks).map((el) => (
              <Toggle
                value={perks[el]}
                icon={el as ToggleProps['icon']}
                handler={() => dispatch(inputPerks(el as ToggleProps['icon']))}
              />
            ))}
          </div>
        </div>
        <section className="location-buttons">
          <Button disabled={false} handler={onPrev} text="이전" />
          <Button disabled={disabled} handler={onSubmit} text="다음" />
        </section>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default LocationForm;
