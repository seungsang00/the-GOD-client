import { Content } from '@interfaces';
import React, { useEffect, useMemo, useState } from 'react';

const SearchMapContainer = ({
  contents,
  handleClick,
  path,
}: {
  contents: Content[];
  path: Content[];
  handleClick: (id: string) => void;
}) => {
  class MapModule {
    kakao: any;
    mapOption: any;
    mapContainer: any;
    map: any;
    manager: any;
    polyline: any;
    defaultImg: any;
    markers: any;
    customMarkerImage: any;
    constructor() {
      const { kakao }: any = window;
      this.kakao = kakao;
      this.mapOption = {
        center: new kakao.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };
      this.mapContainer = document.getElementById('map'); // 지도를 표시할 div
      this.map = new kakao.maps.Map(this.mapContainer, this.mapOption);
      this.customMarkerImage = new kakao.maps.MarkerImage(
        '/images/logo-pin-icon.svg', // 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', '/images/logo_icon.svg'로 변경 가능합니다만 색상 때문에 가독성이 떨어집니다
        new kakao.maps.Size(64, 69),
        { offset: new kakao.maps.Point(27, 69) }
      );
      this.polyline = null;
      this.defaultImg = null;
      this.markers = [];
      var options = {
        // Drawing Manager를 생성할 때 사용할 옵션입니다
        map: this.map, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
        drawingMode: [
          // Drawing Manager로 제공할 그리기 요소 모드입니다
          kakao.maps.drawing.OverlayType.POLYLINE,
        ],
        // 사용자에게 제공할 그리기 가이드 툴팁입니다
        // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
        guideTooltip: [],
        polylineOptions: {
          // 선 옵션입니다
          draggable: false, // 그린 후 드래그가 가능하도록 설정합니다
          removable: false, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
          editable: false, // 그린 후 수정할 수 있도록 설정합니다
          strokeColor: '#39f', // 선 색
          hintStrokeStyle: 'dash', // 그리중 마우스를 따라다니는 보조선의 선 스타일
          hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
        },
      };

      // 위에 작성한 옵션으로 Drawing Manager를 생성합니다
      this.manager = new kakao.maps.drawing.DrawingManager(options);
      this.fetchData = this.fetchData.bind(this);
      this.displayMarker = this.displayMarker.bind(this);
      this.removePolyline = this.removePolyline.bind(this);
      this.pointsToPath = this.pointsToPath.bind(this);
      this.drawPolyline = this.drawPolyline.bind(this);
    }

    displayMarker(content: Content) {
      const {
        mobile,
        address: { storeName, roadAddress },
      } = content;
      const { map } = this;
      const el = `<div class="location_overlay_box">
          <div>
            <div class="location_overlay_storename">
            ${storeName}
            </div>
            <div class="location_overlay_address">
            ${roadAddress}
            </div>
            <div class="location_overlay_mobile">
            ${mobile.length === 0 ? '없음' : mobile}
            </div>
          </div>
        </div>`;
      let position = new this.kakao.maps.LatLng(
        content.address.location.lat,
        content.address.location.lng
      );
      var marker = new this.kakao.maps.Marker({
        map: this.map,
        position: position,
      });
      this.defaultImg = marker.getImage();
      this.markers.push({ contentId: content.id, marker });

      var overlay = new this.kakao.maps.CustomOverlay({
        content: el,
        position: position,
      });
      // 마커에 클릭이벤트를 등록합니다
      this.kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 선택 컨텐츠가 됩니다.
        setSelectedId(content.id);
      });
      this.kakao.maps.event.addListener(marker, 'mouseover', function () {
        // 마우스를 올리면하면 장소명이 오버레이에 표출됩니다
        overlay.setMap(map);
      });
      this.kakao.maps.event.addListener(marker, 'mouseout', function () {
        // 마우스 아웃시 오버레이가 사라집니다.
        overlay.setMap(null);
      });
    }
    setImage(id: string) {
      const { marker } = this.markers.find(
        (content: any) => content.contentId === id
      );

      if (marker) {
        marker.setImage(this.customMarkerImage);
      }
    }
    recoverImage(id: string) {
      if (this.markers && this.markers.length > 0) {
        const { marker } = this.markers.find(
          (content: any) => content.contentId === id
        );
        if (marker) {
          marker.setImage(this.defaultImg);
        }
      }
    }

    fetchData(contents: Content[]) {
      // 마커를 생성하고 지도에 표시합니다
      if (contents) {
        for (let i = 0; i < contents.length; i++) {
          this.displayMarker(contents[i]);
        }
      }
    }

    drawPolyline(line: Content[]) {
      const points = line.map((content) => ({
        lat: content.address.location.lat,
        lng: content.address.location.lng,
      }));
      const path = this.pointsToPath(points);
      const style = {
        strokeColor: '#39f',
        strokeWeight: 3,
        strokeStyle: 'solid',
        strokeOpacity: 1,
      };
      this.polyline = new this.kakao.maps.Polyline({
        map: this.map,
        path: path,
        strokeColor: style.strokeColor,
        strokeOpacity: style.strokeOpacity,
        strokeStyle: style.strokeStyle,
        strokeWeight: style.strokeWeight,
      });
    }
    removePolyline() {
      if (this.polyline) this.polyline.setMap(null);
    }
    pointsToPath(points: any) {
      var len = points.length,
        path = [],
        i = 0;

      for (; i < len; i++) {
        var latlng = new this.kakao.maps.LatLng(points[i].lat, points[i].lng);
        path.push(latlng);
      }

      return path;
    }
  }
  const [map, setMap] = useState<MapModule | null>(null);
  const [selectedId, setSelectedId] = useState<string>('');

  useEffect(() => {
    setMap(new MapModule());
  }, []);
  useEffect(() => {
    if (map && contents) {
      map.fetchData(contents);
      contents.forEach((content) => {
        map.recoverImage(content.id);
      });
      path.forEach((content) => {
        map.setImage(content.id);
      });
      map.drawPolyline(path);
    }
  }, [map]);
  useEffect(() => {
    if (selectedId.length !== 0) {
      handleClick(selectedId);
    }
  }, [selectedId]);

  useMemo(() => {
    if (map && contents) {
      contents.forEach((content) => {
        map.recoverImage(content.id);
      });
      path.forEach((content) => {
        map.setImage(content.id);
      });
      map.removePolyline();
      map.drawPolyline(path);
      setSelectedId('');
    }
  }, [path]);

  return <div style={{ width: '100%', height: '100%' }} id="map"></div>;
};

export default SearchMapContainer;
