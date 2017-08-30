import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Decision } from 'app/shared/decision';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const decisions = [
      {
        id: 1,
        title: 'Decision 1',
        decisionArray: [
          {
            id: 1,
            name: 'Alternative 1',
            finalRate: 1,
            criteriaArray: [
              {
                id: 1,
                name: 'Criteria 1',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 2,
                name: 'Criteria 2',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 3,
                name: 'Criteria 3',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 4,
                name: 'Criteria 4',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Decision 2',
        decisionArray: [
          {
            id: 1,
            name: 'Alternative 1',
            finalRate: 1,
            criteriaArray: [
              {
                id: 1,
                name: 'Criteria 1',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 2,
                name: 'Criteria 2',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 3,
                name: 'Criteria 3',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 4,
                name: 'Criteria 4',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              }
            ]
          },
          {
            id: 2,
            name: 'Alternative 2',
            finalRate: 1,
            criteriaArray: [
              {
                id: 1,
                name: 'Criteria 1',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 2,
                name: 'Criteria 2',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 3,
                name: 'Criteria 3',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 4,
                name: 'Criteria 4',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              }
            ]
          },
          {
            id: 3,
            name: 'Alternative 3',
            finalRate: 1,
            criteriaArray: [
              {
                id: 1,
                name: 'Criteria 1',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 2,
                name: 'Criteria 2',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 3,
                name: 'Criteria 3',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 4,
                name: 'Criteria 4',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              }
            ]
          },
          {
            id: 4,
            name: 'Alternative 4',
            finalRate: 1,
            criteriaArray: [
              {
                id: 1,
                name: 'Criteria 1',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 2,
                name: 'Criteria 2',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 3,
                name: 'Criteria 3',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              },
              {
                id: 4,
                name: 'Criteria 4',
                rate: 1,
                value: '1',
                valueRate: 1,
                criterionPriority: 1,
                valuePriority: 1
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Decision 3',
        decisionArray: [{}]
      },
    ];

    return { decisions };
  }
}
