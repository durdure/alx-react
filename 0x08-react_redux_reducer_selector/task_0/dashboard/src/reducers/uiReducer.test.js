import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(
        { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} },
        { type: DISPLAY_NOTIFICATION_DRAWER }
      )
    ).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(
        { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} },
        { type: HIDE_NOTIFICATION_DRAWER }
      )
    ).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      uiReducer(
        { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} },
        { type: LOGIN_SUCCESS }
      )
    ).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    });
  });

  it('should handle LOGIN_FAILURE and LOGOUT', () => {
    expect(
      uiReducer(
        { isNotificationDrawerVisible: false, isUserLoggedIn: true, user: {} },
        { type: LOGIN_FAILURE }
      )
    ).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });

    expect(
      uiReducer(
        { isNotificationDrawerVisible: false, isUserLoggedIn: true, user: {} },
        { type: LOGOUT }
      )
    ).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
