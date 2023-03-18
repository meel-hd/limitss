import axios from "axios";

export class PublicServices {
  async sendToSlack(message: string): Promise<boolean> {
    const newletter_channel_id = process.env.NEWSLETTER_CHANNEL_ID;
    const slackToken = process.env.SLACK_TOKEN;

    try {
      // await prisma.newsletter.create({
      //     data: {
      //         email: email,
      //     },
      // });
      axios
        .post(
          "https://slack.com/api/chat.postMessage",
          {
            channel: newletter_channel_id,
            text: message,
          },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${slackToken}`,
            },
          }
        )
        
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
