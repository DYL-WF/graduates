import { Test } from '@nestjs/testing';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiNotificationsService } from './api-notifications-service-feature.service';

describe('ApiNotificationsService', () => {
  let service: ApiNotificationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiNotificationsService, QueryBus, CommandBus],
    }).compile();
    
    service = module.get(ApiNotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
