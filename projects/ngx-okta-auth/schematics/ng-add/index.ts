import { chain, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';

import { Schema } from './schema';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '~8.2.8', name: '@angular/elements' },
      { type: NodeDependencyType.Default, version: '~1.7.2', name: 'document-register-element' },
      { type: NodeDependencyType.Default, version: '^1.2.2', name: '@okta/okta-angular' },
      { type: NodeDependencyType.Default, version: '^3.3.0', name: '@okta/okta-signin-widget' },
      { type: NodeDependencyType.Default, version: '^0.0.9', name: 'ngx-okta-auth' }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);

    return host;
  };
}

function addModuleToImports(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(
      workspace,
      // Takes the first project in case it's not provided by CLI
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    const modules = [
      {moduleName: 'NgxOktaAuthModule', packageName: 'ngx-okta-auth'}, 
      {moduleName: 'LoginModule', packageName: 'ngx-okta-auth'}
    ];

    for (let module of modules) {
      addModuleImportToRootModule(host, module.moduleName, module.packageName, project);
      context.logger.log('info', `✅️ "${module.moduleName}" imported`);
    }

    return host;
  };
}

function addPolyfillToScripts(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    const polyfillName = 'custom-elements';
    const polyfillPath = 'node_modules/document-register-element/build/document-register-element.js';

    try {
      const angularJsonFile = host.read('angular.json');

      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(angularJsonFile.toString('utf-8'));
        const project = options.project ? options.project : Object.keys(angularJsonFileObject['projects'])[0];
        const projectObject = angularJsonFileObject.projects[project];
        const targets = projectObject.targets ? projectObject.targets : projectObject.architect;
        const scripts = targets.build.options.scripts;

        scripts.push({
          input: polyfillPath
        });
        host.overwrite('angular.json', JSON.stringify(angularJsonFileObject, null, 2));
      }
    } catch (e) {
      context.logger.log('error', `🚫 Failed to add the polyfill "${polyfillName}" to scripts`);
    }

    context.logger.log('info', `✅️ Added "${polyfillName}" polyfill to scripts`);

    return host;
  };
}

export default function(options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options),
    options && options.skipPolyfill ? noop() : addPolyfillToScripts(options)
  ]);
}