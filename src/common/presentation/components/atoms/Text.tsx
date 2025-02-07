import React from 'react';
import {TextProps, Text as RNText} from 'react-native';
import {useThemeStore} from '../../../store';
import {normSize} from '../../../../config/constants';

interface CustomTextProps extends TextProps {
  text?: string;
  size?: number;
  color?: string;
  align?: 'center' | 'auto' | 'left' | 'right';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

/**
 * Custom Text component that extends React Native's Text component with additional styling props
 * @component
 */
export const Text: React.FC<CustomTextProps> = ({
  children,
  text,
  size = 30,
  color,
  align = undefined,
  fontWeight = 'normal',
  ...props
}) => {
  const {colors} = useThemeStore();
  return (
    <RNText
      {...props}
      style={[
        {
          fontSize: normSize(size),
          color: color ? color : colors.text,
          textAlign: align,
          fontWeight: fontWeight,
        },
        props.style,
      ]}>
      {text}
      {children}
    </RNText>
  );
};
