import React, {FC} from 'react';
import {View} from 'react-native';

import {s} from './main-container.styles';

interface MainContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export const MainContainer: FC<MainContainerProps> = ({children}) => {
  return <View style={s.container}>{children}</View>;
};
