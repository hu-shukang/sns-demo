import { SNS } from 'aws-sdk';
import { Const } from 'utils';

export class BaseService {
  protected sns: SNS;

  constructor() {
    this.sns = new SNS({
      region: Const.REGION,
    });
  }
}
