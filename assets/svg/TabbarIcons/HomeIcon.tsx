import Svg, { Path } from 'react-native-svg';

export default function HomeIcon({ color }: { color: string }) {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.125 8.25385L10.5 0.00384521L0.875 8.25385V19.1666H20.125V8.25385Z"
        fill={color}
      />
    </Svg>
  );
}
