import { BaseService } from './base.service';

export class SnsService extends BaseService {
  public async publish(subject: string, message: string) {
    const params = {
      Subject: subject,
      Message: message,
      TopicArn: `arn:aws:sns:ap-southeast-1:146114061358:example-sns-topic`,
    };
    const data = await this.sns.publish(params).promise();
    console.log(data.MessageId);
  }
}
