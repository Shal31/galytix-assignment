import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material-module.module';

describe('MyOwnCustomMaterialModuleModule', () => {
  let myOwnCustomMaterialModuleModule: MyOwnCustomMaterialModuleModule;

  beforeEach(() => {
    myOwnCustomMaterialModuleModule = new MyOwnCustomMaterialModuleModule();
  });

  it('should create an instance', () => {
    expect(myOwnCustomMaterialModuleModule).toBeTruthy();
  });
});
