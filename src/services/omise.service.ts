// omise.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as Omise from 'omise';

@Injectable()
export class OmiseService {
  omise: any;
  constructor(private readonly httpService: HttpService) {
    this.omise = Omise({
      publicKey: process.env.OMISE_PUBLIC_KEY,
      secretKey: process.env.OMISE_SECRET_KEY,
    });
  }

  async createCharge(amount: number, tokenID: string): Promise<any> {
    try {
      const chargeRes = await this.omise.charges.create({
        description: 'Charge for order ID: 888',
        amount: amount * 100,
        currency: 'THB',
        capture: true,
        card: tokenID,
      });

      return chargeRes;
    } catch (err) {
      console.log(err);
      throw new Error('Failed to create charge');
    }
  }
}
