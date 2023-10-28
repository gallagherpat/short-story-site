<script lang="ts">
    import type {PageData} from './$types'
    import { marked } from 'marked';
    export let data: PageData;

    const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.")
    console.log(data);
</script>
    <h1>Read {data.slug}</h1>
    {@html html}
