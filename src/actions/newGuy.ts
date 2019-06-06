import { GuyId } from '~redux/types';
import existy from '~logic/existy';

export const type = 'NEW_GUY';
export type Type = typeof type;
export type Payload = GuyId;
export type NewGuyAction = { type: Type; payload: Payload };

export default (id: GuyId | undefined): NewGuyAction => {
    const finalId = existy(id) ? id : new Date().toISOString();

    return {
        type,
        payload: finalId,
    };
};
