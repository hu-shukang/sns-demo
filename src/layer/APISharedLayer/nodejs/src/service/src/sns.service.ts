import { SNS } from 'aws-sdk';
import { BaseService } from './base.service';

export class SnsService extends BaseService {
  public async publish(subject: string, message: string) {
    const endPointParams: SNS.CreatePlatformEndpointInput = {
      PlatformApplicationArn: '',
      Token: '',
    };
    const response = await this.sns.createPlatformEndpoint(endPointParams).promise();
    const endPointArn = response.EndpointArn;
    const params: SNS.PublishInput = {
      TargetArn: endPointArn,
      Subject: 'title',
      Message: 'message',
    };
    const data = await this.sns.publish(params).promise();
    console.log(data.MessageId);
  }
}
