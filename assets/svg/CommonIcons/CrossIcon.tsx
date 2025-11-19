import Svg, { Line } from 'react-native-svg';

export default function CrossIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Line
        x1={8.25}
        y1={1}
        x2={8.25}
        y2={15}
        stroke="white"
        strokeWidth={1.5}
      />
      <Line
        x1={15}
        y1={7.75}
        x2={1}
        y2={7.75}
        stroke="white"
        strokeWidth={1.5}
      />
    </Svg>
  );
}
