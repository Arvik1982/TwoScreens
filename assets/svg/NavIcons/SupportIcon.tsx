import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function SupportIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Defs>
        <ClipPath id="clip0_2118_15626">
          <Rect width={24} height={24} fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_2118_15626)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V16C18 18.4853 15.9853 20.5 13.5 20.5H13V19H11V24H13V22.5H13.5C17.0899 22.5 20 19.5898 20 16V8C20 3.58172 16.4183 0 12 0C7.58172 0 4 3.58172 4 8V17H6V8Z"
          fill="#FE5900"
        />
        <Path
          opacity={0.2}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 8H0V17H6V8Z"
          fill="#FE5900"
        />
        <Path
          opacity={0.2}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 8H18V17H24V8Z"
          fill="#FE5900"
        />
      </G>
    </Svg>
  );
}
