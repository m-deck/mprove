import { api } from '../../barrels/api';
import { entities } from '../../barrels/entities';
import { enums } from '../../barrels/enums';
import { helper } from '../../barrels/helper';

// tslint:disable-next-line:variable-name
const BigQuery = require('@google-cloud/bigquery');

export async function runQueryWithoutDeps(item: {
  credentials_file_path: string;
  user_id: string;
  query: entities.QueryEntity;
  refresh: boolean;
  new_last_run_ts: string;
}) {
  let query = item.query;

  let bigquery = new BigQuery({
    keyFilename: item.credentials_file_path
  });

  let sqlArray: string[] = JSON.parse(query.sql);
  let sqlText = sqlArray.join('\n');

  // get dataset

  let datasetName = `mprove_${query.project_id}`;

  let projectDataset = bigquery.dataset(datasetName);

  let destinationTable;

  if (query.is_pdt === enums.bEnum.TRUE) {
    destinationTable = bigquery
      .dataset(`mprove_${query.project_id}`)
      .table(`${query.pdt_id}_${query.query_id}`);
  }

  let createQueryJobItem = <any>await bigquery
    .createQueryJob({
      destination:
        query.is_pdt === enums.bEnum.TRUE ? destinationTable : undefined,
      dryRun: false,
      useLegacySql: false,
      query: sqlText
    })
    .catch((e: any) => {
      let newLastErrorTs = helper.makeTs();

      query.status = api.QueryStatusEnum.Error;
      query.refresh = null;
      query.last_error_message = e.message;
      query.last_error_ts = newLastErrorTs;
      query.last_run_by = item.user_id;
      query.last_run_ts = item.new_last_run_ts;
    });

  if (createQueryJobItem) {
    let queryJob = createQueryJobItem[0];
    let createQueryJobApiResponse = createQueryJobItem[1];

    query.status = api.QueryStatusEnum.Running;
    query.refresh = null;
    query.bigquery_query_job_id = queryJob.id;
    query.last_run_by = item.user_id;
    query.last_run_ts = item.new_last_run_ts;
  }

  return query;
}
