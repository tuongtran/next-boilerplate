import { IAction, IHomePage } from '@Interfaces';
import { ActionConsts } from '@Definations';

import { HomeReducer } from './home';

describe('home reducer', () => {

    it('should return the initial state', () => {
        expect(HomeReducer(undefined, {} as IAction<IHomePage.IDispatchProps>)).toEqual(
            {
                home: {
                    version: 1
                }
            }
        );
    });

    it('should handle SetReducer', () => {
        expect(
            HomeReducer([], {
                type: ActionConsts.Home.SetReducer,
                payload: {
                    version: 2
                }
            })
        ).toEqual(
            {
                version: 2
            }
        )
    });

    it('should handle ResetReducer', () => {
        expect(
            HomeReducer([], {
                type: ActionConsts.Home.ResetReducer
            })
        ).toEqual(
            {
                home: {
                    version: 1
                }
            }
        )
    });

});