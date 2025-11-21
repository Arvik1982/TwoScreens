import { Colors } from '@/constants/colors';
import expences from '@/constants/mockData/expences.json';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

type ExpencesType = {
  id: number;
  month: string;
  week: number;
  expences: number;
};

const WeekExpencesBar = () => {
  const expencesData: Array<ExpencesType> = expences;

  const sortedData = [...expencesData].sort(
    (a, b) => Math.abs(b.expences) - Math.abs(a.expences),
  );

  const barColors = Colors.default.expencesBarColors;

  const colorMap: { [key: number]: string } = {};
  sortedData.forEach((item, index) => {
    colorMap[item.id] = barColors[index];
  });

  const absoluteExpences = expencesData.map((item) => Math.abs(item.expences));
  const totalExpences = absoluteExpences.reduce(
    (sum, expence) => sum + expence,
    0,
  );

  const rawWidths = absoluteExpences.map(
    (expence) => (expence / totalExpences) * 100,
  );

  // Проверяем, есть ли элементы меньше 5%
  const hasSmallElements = rawWidths.some((width) => width < 5);

  let finalWidths;
  if (hasSmallElements) {
    const smallIndices = rawWidths
      .map((width, index) => (width < 5 ? index : -1))
      .filter((i) => i !== -1);

    const extraNeeded =
      smallIndices.length * 5 -
      smallIndices.reduce((sum, idx) => sum + rawWidths[idx], 0);

    finalWidths = rawWidths.map((width, index) => {
      if (smallIndices.includes(index)) {
        return 5;
      } else {
        const bigElementsTotal = rawWidths
          .filter((w, i) => !smallIndices.includes(i))
          .reduce((sum, w) => sum + w, 0);
        return width - (width / bigElementsTotal) * extraNeeded;
      }
    });
  } else {
    finalWidths = rawWidths;
  }

  return (
    <View style={styles.heddingLineBox}>
      {expencesData.map((item, index) => {
        const backgroundColor = colorMap[item.id];

        return (
          <View
            key={index + item.id + item.month}
            style={{
              width: `${finalWidths[index]}%`,
              height: '100%',
              backgroundColor: backgroundColor,
              borderRadius: 3,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  heddingLineBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 8,
    gap: 2,
  },
});
export default memo(WeekExpencesBar);
