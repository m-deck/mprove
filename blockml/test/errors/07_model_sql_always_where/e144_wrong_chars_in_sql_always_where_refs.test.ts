import { AmError } from '../../../src/barrels/am-error';
import { ApStruct } from '../../../src/barrels/ap-struct';
import { api } from '../../../src/barrels/api';
import { interfaces } from '../../../src/barrels/interfaces';

//

// yarn jest test/errors/07_model_sql_always_where/e144_wrong_chars_in_sql_always_where_refs.test.ts
jest.setTimeout(30000);
test('testName', () => {
  expect.assertions(3);

  return ApStruct.rebuildStruct({
    dir: 'test/errors/07_model_sql_always_where/e144',
    weekStart: api.ProjectWeekStartEnum.Monday,
    connection: api.ProjectConnectionEnum.BigQuery,
    bqProject: 'flow-1202',
    projectId: 'unkProjectId',
    structId: 'unkStructId'
  }).then((struct: interfaces.Struct) => {
    const desiredError0Lines: interfaces.ErrorLine[] = [
      { line: 2, name: 'e144m.model', path: 'e144m.model' }
    ];

    expect(struct.errors[0].lines).toEqual(
      expect.arrayContaining(desiredError0Lines)
    );
    expect(struct.errors[0].title).toEqual(
      `wrong chars in sql_always_where refs`
    );
    expect(struct.errors[0].message).toEqual(
      `characters "!,  , @, $, %, ^, &, *, (, ), -, +, =" can not be used inside \$\{\} of model`
    );
  });
});
