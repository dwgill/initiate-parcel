import { GuyId } from '~redux/types';

const newGuyId = (): GuyId => new Date().toISOString();

export default newGuyId;
