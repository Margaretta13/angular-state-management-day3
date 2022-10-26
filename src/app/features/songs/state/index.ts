import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { SongListModel } from '../models';

import * as fromSongList from './reducers/song-list.reducer';
export const FEATURE_NAME = 'songsFeature';

export interface SongsState {
  list: fromSongList.SongListState;
}

export const reducers: ActionReducerMap<SongsState> = {
  list: fromSongList.reducer,
};

// feature selector
const selectFeature = createFeatureSelector<SongsState>(FEATURE_NAME);

//

export const selectSongListModel = createSelector(() => {
  const model: SongListModel = {
    songs: [
      { id: '1', title: 'Song #1', artist: 'Fugazi' },
      {
        id: '2',
        title: 'National Anthem',
        artist: 'Radio Head',
        album: 'Kid A',
      },
    ],
  };
  return model;
});
