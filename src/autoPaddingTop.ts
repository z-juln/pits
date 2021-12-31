import bridge from '@/bridge';
import { getUserInfo } from '@/store';

const userInfo = getUserInfo();
const ua = window.navigator.userAgent || '';
export const isWechat = /MicroMessenger/i.test(ua);
export const isHupuApp = ~ua.indexOf('kanqiu');
export const isIOS = /iPhone|iPad|iPod/i.test(ua);

export const isIPhoneX = (): boolean => {
  if (typeof window !== 'undefined' && window) {
    return (
      /iphone/gi.test(
        window.navigator.userAgent
      ) && window.screen.height >= 812
    );
  }
  return false;
};

const paddingTop = (): string => {
  if (!userInfo) {
    return 'none';
  }
  const clientH = userInfo
    ?.client_height;
  const statusH = userInfo
    ?.statusbar_hight;
  return isHupuApp
    ? isIOS
      ? statusH
        ? `${statusH * 2}`
        : 'none'
      : clientH
        ? `${userInfo?.titlebar_hight}`
        : 'none'
    : 'none';
};

export const getPadddingTop = () => {
  // return 40;
  const paddingTopHeight = paddingTop();
  if (isIOS) {
    if (isIPhoneX()) {
      return +paddingTopHeight + 8 - 50;
    }
    return 78 - 50;
  }
  return +paddingTopHeight + 22 - 50;
};
