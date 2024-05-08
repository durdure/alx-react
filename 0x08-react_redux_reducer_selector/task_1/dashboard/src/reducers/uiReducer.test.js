import { Map } from 'immutable';
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
    expect(uiReducer(undefined, {})).toEqual(
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map(),
      })
    );
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(
        Map({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: false,
          user: Map(),
        }),
        { type: DISPLAY_NOTIFICATION_DRAWER }
      )
    ).toEqual(
      Map({
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: Map(),
      })
    );
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    expect(
      uiReducer(
        Map({
          isNotificationDrawerVisible: true,
          isUserLoggedIn: false,
          user: Map(),
        }),
        { type: HIDE_NOTIFICATION_DRAWER }
      )
    ).toEqual(
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map(),
      })
    );
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      uiReducer(
        Map({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: false,
          user: Map(),
        }),
        { type: LOGIN_SUCCESS }
      )
    ).toEqual(
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: true,
        user: Map(),
      })
    );
  });

  it('should handle LOGIN_FAILURE and LOGOUT', () => {
    expect(
      uiReducer(
        Map({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: true,
          user: Map(),
        }),
        { type: LOGIN_FAILURE }
      )
    ).toEqual(
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map(),
      })
    );

    expect(
      uiReducer(
        Map({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: true,
          user: Map(),
        }),
        { type: LOGOUT }
      )
    ).toEqual(
      Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map(),
      })
    );
  });
});
