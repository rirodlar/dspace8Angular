import {
  AsyncPipe,
  isPlatformServer,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  BehaviorSubject,
  Observable,
  of,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { InternalLinkService } from 'src/app/core/services/internal-link.service';

import { SearchManager } from '../../../../core/browse/search-manager';
import { SectionComponent } from '../../../../core/layout/models/section.model';
import { DSpaceObject } from '../../../../core/shared/dspace-object.model';
import { getFirstSucceededRemoteDataPayload } from '../../../../core/shared/operators';
import { ThemedLoadingComponent } from '../../../loading/themed-loading.component';
import { PaginationComponentOptions } from '../../../pagination/pagination-component-options.model';
import { PaginatedSearchOptions } from '../../../search/models/paginated-search-options.model';
import { SearchObjects } from '../../../search/models/search-objects.model';

@Component({
  selector: 'ds-base-counters-section',
  styleUrls: ['./counters-section.component.scss'],
  templateUrl: './counters-section.component.html',
  standalone: true,
  imports: [
    NgClass,
    ThemedLoadingComponent,
    NgIf,
    NgTemplateOutlet,
    TranslateModule,
    AsyncPipe,
    RouterLink,
    NgForOf,
  ],
})
export class CountersSectionComponent implements OnInit {

  @Input()
    sectionId: string;

  @Input()
    countersSection: CountersSection;

  counterData: CounterData[] = [];
  counterData$: Observable<CounterData[]>;
  counterData2$: Observable<CounterData[]>;
  isLoading$ = new BehaviorSubject(true);

  pagination: PaginationComponentOptions;


  constructor(
              public internalLinkService: InternalLinkService,
              private searchService: SearchManager,
              @Inject(PLATFORM_ID) private platformId: any,
  ) {

  }

  ngOnInit() {
    this.counterData$ = of([
      {
        count: '0',
        label: 'rprofiles',
        icon: 'fas fa-users fa-3x',
        link: '/search?configuration=person',
      },
      {
        count: '0',
        label: 'project_funding',
        icon: 'fas fa-cog fa-3x',
        link: '/search?configuration=project_funding',
      },
      {
        count: '0',
        label: 'publications',
        icon: 'fas fa-university fa-3x',
        link: '/search?configuration=researchoutputs',
      },
    ]);

    this.counterData2$ = of([
      {
        count: '0',
        label: 'publications-alt',
        icon: 'fas fa-file-alt fa-3x',
        link: '/handle/123456789/8',
      },
      {
        count: '0',
        label: 'research-data',
        icon: 'fas fa-database fa-3x',
        link: '/handle/123456789/66',
      },
      {
        count: '0',
        label: 'scientific-outreach',
        icon: 'fas fa-bullhorn fa-3x',
        link: '/handle/123456789/51',
      },
    ]);
    this.isLoading$.next(false);
  }
}



export interface CountersSection extends SectionComponent {
  componentType: 'counters';
  counterSettingsList: CountersSettings[];
}

export interface CountersSettings {
  discoveryConfigurationName: string;
  entityName: string;
  icon: string;
  link: string;
}

export interface CounterData {
  label: string;
  count: string;
  icon: string;
  link: string;
}
