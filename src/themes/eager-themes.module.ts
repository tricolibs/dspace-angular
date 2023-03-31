import { NgModule } from '@angular/core';
//import { EagerThemeModule as DSpaceEagerThemeModule } from './dspace/eager-theme.module';
// import { EagerThemeModule as CustomEagerThemeModule } from './custom/eager-theme.module';
import { EagerThemeModule as TricoEagerThemeModule } from './trico/eager-theme.module';
import { EagerThemeModule as FmstEagerThemeModule } from './fmst/eager-theme.module';
import { EagerThemeModule as WnrEagerThemeModule } from './wnr/eager-theme.module';
import { EagerThemeModule as MusicEagerThemeModule } from './music/eager-theme.module';
import { EagerThemeModule as SnccEagerThemeModule } from './sncc/eager-theme.module';
import { EagerThemeModule as FolkMusicEagerThemeModule } from './folk-music/eager-theme.module';

/**
 * This module bundles the eager theme modules for all available themes.
 * Eager modules contain components that are present on every page (to speed up initial loading)
 * and entry components (to ensure their decorators get picked up).
 *
 * Themes that aren't in use should not be imported here so they don't take up unnecessary space in the main bundle.
 */
@NgModule({
  imports: [
    //DSpaceEagerThemeModule,
    // CustomEagerThemeModule,
    TricoEagerThemeModule,
    FmstEagerThemeModule,
    WnrEagerThemeModule,
    MusicEagerThemeModule,
    SnccEagerThemeModule,
    FolkMusicEagerThemeModule,
  ],
})
export class EagerThemesModule {
}
