// omise.controller.ts
import { Controller, Post, Body, Req, Res, HttpStatus } from '@nestjs/common';
import { OmiseService } from 'src/services/omise.service';

@Controller('omise')
export class OmiseController {
  constructor(private omiseService: OmiseService) {}

  @Post('charges')
  async createCharge(
    @Body('amount') amount: number,
    @Body('tokenID') tokenID: string,
    @Req() req,
    @Res() res,
  ) {
    try {
      const response = await this.omiseService.createCharge(amount, tokenID);
      console.log(response);
      res.status(HttpStatus.OK).json(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
      throw new Error('Failed to create charge');
    }
  }
}
