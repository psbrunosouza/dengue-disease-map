import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { MoreHorizontal } from 'angular-feather/icons';

const icons = {
  MoreHorizontal,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
