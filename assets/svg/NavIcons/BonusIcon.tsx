import Svg, { Path } from 'react-native-svg';

export default function BonusIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4C6 2.89543 6.89543 2 8 2C9.1046 2 10 2.89543 10 4V6.5H12V4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 4.22614 15.8203 5.08463 14.9453 5.66795L13.4453 6.66795L14.5547 8.33205L16.0547 7.33205C17.5797 6.31537 18 4.77386 18 4C18 1.79086 16.2091 0 14 0C12.8053 0 11.7329 0.52376 11 1.35418C10.2671 0.52376 9.1947 0 8 0C5.79086 0 4 1.79086 4 4C4 4.77386 4.42027 6.31537 5.9453 7.33205L7.4453 8.33205L8.5547 6.66795L7.0547 5.66795C6.17973 5.08463 6 4.22614 6 4Z"
        fill="#FE5900"
      />
      <Path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6H22V11.5H21V22H1V11.5H0V6Z"
        fill="#FE5900"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 11.5H1V13.5H10V22H12V13.5H21V11.5Z"
        fill="#FE5900"
      />
    </Svg>
  );
}
