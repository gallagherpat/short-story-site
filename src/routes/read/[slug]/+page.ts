import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({params}) => {
    if(params.slug){
        return{
            slug: params.slug
        }
    }
    throw error(404, "Not Foound")
}