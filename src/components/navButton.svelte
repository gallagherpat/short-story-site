<script lang="ts">
    import { navigating } from "$app/stores";
    export let name: string;
    export let navClick: (event: MouseEvent) => void;
    let clicked: boolean = false;
    let aClass = 'w-11/12 capitalize py-2 mx-auto rounded-lg'

    $: if($navigating) {
        clicked = false;
        setTimeout(() => {aClass = 'w-11/12 capitalize py-2 mx-auto rounded-lg'}, 300)
    }

    //@ts-ignore
    const navigatedTo: (mouse: MouseEvent) => void = function(cliked: Boolean){
        clicked = !clicked;
        if(cliked){
            aClass = 'w-11/12 capitalize bg-orange-200 text-orange-600 py-2 mx-auto rounded-lg'
        }
    }
</script>

{#if name === 'home'}
<li>
    <a on:click={navClick} on:click={navigatedTo} href='/'>
    <div class={aClass}>{name}</div>
    </a>
</li> 
{:else if name === 'newest'}
<li>
    <a on:click={navClick} on:click={navigatedTo} href={`/${name}/1`}>
    <div class={aClass}>{name}</div>
    </a>
</li> 
{:else}
<li>
    <a on:click={navClick} on:click={navigatedTo} href={`/${name}`}>
    <div class={aClass}>{name}</div>
    </a>
</li> 
{/if}

