import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function TravelIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_2118_15606)">
        <Path
          opacity={0.2}
          d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z"
          fill="#FE5900"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3041 12.7363L15.0001 15.4801V23.6219C20.1758 22.2898 24.0001 17.5915 24.0001 12C24.0001 9.38763 23.1653 6.97024 21.748 5H15.5486C13.0365 5 11.0001 7.03641 11.0001 9.54845C11.0001 10.7409 11.4684 11.8857 12.3041 12.7363ZM0.166016 14H6.00009C8.20923 14 10.0001 15.7909 10.0001 18V23.8341C4.97509 22.991 1.00905 19.025 0.166016 14Z"
          fill="#FE5900"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2118_15606">
          <Rect width={24} height={24} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
