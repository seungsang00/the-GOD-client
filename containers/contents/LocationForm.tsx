import { Toggle } from '@components';
import React, { useEffect } from 'react';

const LocationForm = ({ toggles, ToogleHandler }) => {
  useEffect(() => {
    const { kakao, daum }: any = window;
    const mapOption = {
      center: new kakao.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const map = new kakao.maps.Map(mapContainer, mapOption);
    const geocoder = new kakao.maps.services.Geocoder();
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.537187, 127.005476),
      map: map,
    });
    const inputField = document.getElementById('sample5_address');
    const textField = document.getElementById('mapAddress');
    if (inputField) {
      inputField.addEventListener('click', () => {
        new daum.Postcode({
          oncomplete: function (data: any) {
            var addr = data.address; // 최종 주소 변수
            // 주소 정보를 해당 필드에 넣는다.
            (textField as HTMLElement).textContent = addr;
            // 주소로 상세 정보를 검색
            geocoder.addressSearch(
              data.address,
              function (results: any, status: any) {
                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                  var result = results[0]; //첫번째 결과의 값을 활용

                  // 해당 주소에 대한 좌표를 받아서
                  var coords = new kakao.maps.LatLng(result.y, result.x);
                  // 지도를 보여준다.
                  (mapContainer as HTMLElement).style.display = 'block';
                  map.relayout();
                  // 지도 중심을 변경한다.
                  map.setCenter(coords);
                  // 마커를 결과값으로 받은 위치로 옮긴다.
                  marker.setPosition(coords);
                }
              }
            );
          },
        }).open();
      });
    }
  }, []);

  return (
    <div>
      <div className="검색창">
        <input id="sample5_address" type="text" placeholder="여기" />
        <div>
          <div id="mapAddress"></div>
          <input id="detailAddr" type="text" name="detail" />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="연락처"
            pattern="[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}"
          />
        </div>
        <div>
          {Object.keys(toggles).map((el) => (
            <Toggle value={toggles[el]} icon={el} handler={ToogleHandler(el)} />
          ))}
        </div>
      </div>
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default LocationForm;
