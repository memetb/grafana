import React, { FC } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  const size = css`
    max-width: 360px !important;
  `;
  return <img className={cx(size, className)} src="public/img/cleandesign/title-white.svg" alt="CleanDesign" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const background = css`
    background: url(public/img/cleandesign/login-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  const theme = useTheme();
  const icon = `public/img/icons_${theme.isLight ? 'light' : 'dark'}_theme/icon_home.svg`;
  return <img className={className} src={icon} alt="Home" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme();
  return css`
    background: ${theme.isLight ? 'rgba(6, 30, 200, 0.1 )' : 'rgba(18, 28, 41, 0.65)'};
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'CleanDesign';
  static LoginTitle = 'Data Room';
  static GetLoginSubTitle = () => {
    const slogans = ['Power  ⁃  Control  ⁃  Insight'];
    const count = slogans.length;
    return slogans[Math.floor(Math.random() * count)];
  };
}
