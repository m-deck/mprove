import { createSelector } from '@ngrx/store';
import { getSelectedMconfig } from '@app/store-selectors/get-selected-mconfig/get-selected-mconfig';
import * as api from '@app/api/_index';

export const getSelectedMconfigCharts = createSelector(
  getSelectedMconfig,
  (mconfig: api.Mconfig) => (mconfig ? mconfig.charts : undefined)
);
