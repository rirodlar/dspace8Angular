import { Component } from '@angular/core';

import { SearchConfigurationService } from '../../core/shared/search/search-configuration.service';
import { SEARCH_CONFIG_SERVICE } from '../../my-dspace-page/my-dspace-configuration.service';
import { ThemedSearchComponent } from '../../shared/search/themed-search.component';

@Component({
  selector: 'ds-researcher-profiles-search',
  templateUrl: './researcher-profiles-search.component.html',
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService,
    },
  ],
  standalone: true,
  imports: [ThemedSearchComponent],
})
/**
 * Página de "Personal de Investigación": reusa el mismo componente de
 * búsqueda con resultados+filtros inline (ds-search) que usan las
 * colecciones, en vez del formulario de búsqueda avanzada genérico de
 * las páginas "explore".
 */
export class ResearcherProfilesSearchComponent {
  configuration = 'person';
}
