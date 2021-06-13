import { ReactNode, useEffect, useState } from 'react';
import { MapContainer } from './LocationInfo.style';

const LocationInfo = ({
  storeName,
  lat,
  lng,
}: {
  storeName: string;
  lat: number;
  lng: number;
}) => {
  class MapModule {
    kakao: any;
    markerPosition: any;
    marker: { position: any; text: string };
    staticMapContainer: ReactNode;
    staticMapOption: any;
    staticMap: any;

    constructor() {
      const { kakao }: any = window;
      this.kakao = kakao;
      this.markerPosition = new kakao.maps.LatLng(lat, lng); // 이미지 지도에서 마커가 표시될 위치
      this.marker = {
        // 이미지 지도에 표시할 마커. Object 형태
        position: this.markerPosition,
        text: storeName,
      };
      this.staticMapContainer = document.getElementById('map'); // 지도를 표시할 div
      this.staticMapOption = {
        center: new kakao.maps.LatLng(lat, lng), // 이미지 지도의 중심좌표
        level: 2, // 이미지 지도의 확대 레벨
        marker: this.marker, // 이미지 지도에 표시할 마커
      };
      this.staticMap = new kakao.maps.StaticMap( // 이미지 지도를 생성합니다
        this.staticMapContainer,
        this.staticMapOption
      );
    }
  }
  const [_mapModule, setMapModule] = useState<any>(null);

  useEffect(() => {
    setMapModule(new MapModule());
    console.log(_mapModule);
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default LocationInfo;
