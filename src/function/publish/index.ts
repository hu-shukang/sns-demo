import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { Func } from 'model';
import { snsService } from 'service';
import { lambdaHandler } from 'utils';

const func: Func<string> = async (event: APIGatewayProxyEvent, _context: Context): Promise<string> => {
  if (!event.body) {
    return 'FAIL';
  }
  const { subject, message } = JSON.parse(event.body);
  await snsService.publish(subject, message);
  return 'OK';
};

export const handler = lambdaHandler(func);
