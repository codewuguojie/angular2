
/*脚本执行的入口点*/


import { enableProdMode } from '@angular/core';/*关闭angular的开发者模式*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';/*告诉angular使用哪个模块来启动应用*/

import { AppModule } from './app/app.module';/*主模块*/
import { environment } from './environments/environment';/*导入环境配置*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
