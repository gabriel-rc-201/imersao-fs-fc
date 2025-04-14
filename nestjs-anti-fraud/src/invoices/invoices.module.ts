import { Module } from '@nestjs/common';
import { FraudService } from './fraud/fraud.service';
import { FrequentHighValueSpecification } from './fraud/specifications/frequent-high-value.specification';
import { SuspiciousAccountSpecification } from './fraud/specifications/suspicious-account.specification';
import { UnusualAmountSpecification } from './fraud/specifications/unusual-amount.specification';
import { FraudAggregateSpecification } from './fraud/specifications/fraud-aggregate.specification';

@Module({
  providers: [
    FraudService,
    FrequentHighValueSpecification,
    SuspiciousAccountSpecification,
    UnusualAmountSpecification,
    FraudAggregateSpecification,
    {
      provide: 'FRAUD_SPECIFICATIONS',
      useFactory: (
        frequentHighValueSpecification: FrequentHighValueSpecification,
        suspiciousAccountSpecification: SuspiciousAccountSpecification,
        unusualAmountSpecification: UnusualAmountSpecification,
      ) => {
        return [
          frequentHighValueSpecification,
          suspiciousAccountSpecification,
          unusualAmountSpecification,
        ];
      },
      inject: [
        FrequentHighValueSpecification,
        SuspiciousAccountSpecification,
        UnusualAmountSpecification,
      ],
    },
  ],
})
export class InvoicesModule {}
