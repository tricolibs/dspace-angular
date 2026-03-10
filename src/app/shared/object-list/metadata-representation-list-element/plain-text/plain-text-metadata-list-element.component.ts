<<<<<<< HEAD
import {
  MetadataRepresentationType
} from '../../../../core/shared/metadata-representation/metadata-representation.model';
import {Component} from '@angular/core';
import {MetadataRepresentationListElementComponent} from '../metadata-representation-list-element.component';
import {metadataRepresentationComponent} from '../../../metadata-representation/metadata-representation.decorator';
import {VALUE_LIST_BROWSE_DEFINITION} from '../../../../core/shared/value-list-browse-definition.resource-type';
=======
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { VALUE_LIST_BROWSE_DEFINITION } from '../../../../core/shared/value-list-browse-definition.resource-type';
import { MetadataRepresentationListElementComponent } from '../metadata-representation-list-element.component';
>>>>>>> dspace-8.3

@Component({
  selector: 'ds-plain-text-metadata-list-element',
  templateUrl: './plain-text-metadata-list-element.component.html',
  standalone: true,
  imports: [NgIf, RouterLink],
})
/**
 * A component for displaying MetadataRepresentation objects in the form of plain text
 * It will simply use the value retrieved from MetadataRepresentation.getValue() to display as plain text
 */
export class PlainTextMetadataListElementComponent extends MetadataRepresentationListElementComponent {
  /**
   * Get the appropriate query parameters for this browse link, depending on whether the browse definition
   * expects 'startsWith' (eg browse by date) or 'value' (eg browse by title)
   */
  getQueryParams() {
    const queryParams = { startsWith: this.mdRepresentation.getValue() };
    // Trico mod - for things that aren't dates we still want to link the value, even if in a list
    if (this.mdRepresentation.browseDefinition.getRenderType() === VALUE_LIST_BROWSE_DEFINITION.value ||
      this.mdRepresentation.browseDefinition.getRenderType() !== 'date') {
      return {value: this.mdRepresentation.getValue()};
    }
    return queryParams;
  }
}
