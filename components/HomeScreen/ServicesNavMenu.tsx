import BonusIcon from '@/assets/svg/NavIcons/BonusIcon';
import DeliveryIcon from '@/assets/svg/NavIcons/DeliveryIcon';
import SupportIcon from '@/assets/svg/NavIcons/SupportIcon';
import TravelIcon from '@/assets/svg/NavIcons/TravelIcon';
import { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

enum menuEnum {
  TRAVEL = 'Travel',
  DELIVERY = 'Delivery',
  BONUSES = 'Bonuses',
  SUPPORT = 'Support',
}

const ServicesNavMenu = () => {
  const menuPoints = [
    {
      id: 1,
      name: 'Travel',
    },
    {
      id: 2,
      name: 'Delivery',
    },
    {
      id: 3,
      name: 'Bonuses',
    },
    {
      id: 4,
      name: 'Support',
    },
  ];

  return (
    <ThemedView style={styles.nav}>
      {menuPoints.map((item, index) => {
        return (
          <TouchableOpacity
            key={index + item.id}
            style={styles.navItemContainer}
          >
            {item.name === menuEnum.TRAVEL && <TravelIcon />}
            {item.name === menuEnum.DELIVERY && <DeliveryIcon />}
            {item.name === menuEnum.BONUSES && <BonusIcon />}
            {item.name === menuEnum.SUPPORT && <SupportIcon />}
            <ThemedText style={{ fontSize: 14 }}>{item.name}</ThemedText>
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  nav: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 64,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 24,
  },
  navItemContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: 64,
    height: 64,
    gap: 8,
    borderRadius: 16,
  },
});
export default memo(ServicesNavMenu);
