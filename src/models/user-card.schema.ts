import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserCardInfoDocument = UserCardInfo & Document;

@Schema()
export class UserCardInfo {
  @Prop({ required: true })
  fullname: string;
  @Prop({ required: true })
  cardNumber: string;
  @Prop({ required: true })
  expireDate: string;
  @Prop({ required: true })
  cvv: string;
}
export const UserCardInfoSchema = SchemaFactory.createForClass(UserCardInfo);
