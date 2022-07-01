import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { Func } from 'model';
import { lambdaHandler } from 'utils';

const func: Func<string> = async (_event: APIGatewayProxyEvent, _context: Context): Promise<string> => {
  console.log('I was called from SNS');
  return 'OK';
};

export const handler = lambdaHandler(func);
