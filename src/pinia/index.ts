import { viewsModule } from './modules/views';

export interface IAppStore {
    viewsModule: ReturnType<typeof viewsModule>;
}

const appStore: IAppStore = {} as IAppStore;

export const registerStore = () => {
    appStore.viewsModule = viewsModule();
};

export default appStore;