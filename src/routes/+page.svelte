<script lang="ts">
    import StoryCard from "../components/storyCard/storyCard.svelte";
    let storys = {data: [
    {
        id: 1,
        title: 'This is a title',
        synopsis: 'This is a short synopsis of the story',
        readTime: '12',
        url: '/placeholder.png',
        createdAt: 'Sept 5'
    },
    {
        id: 2,
        title: 'Scary',
        synopsis: 'This is a short synopsis of the story',
        readTime: '14',
        url: '/placeholder.png',
        createdAt: 'Sept 2'
    },
    {
        id: 3,
        title: 'Spooky',
        synopsis: 'This is a short synopsis of the story',
        readTime: '5',
        url: '/placeholder.png',
        createdAt: 'Aug 3'
    },
    {
        id: 4,
        title: 'Fright',
        synopsis: 'This is a short synopsis of the story',
        readTime: '19',
        url: '/placeholder.png',
        createdAt: 'Aug 1'
    }
    ]}
</script>
    <section class="relative bg-orange-500 h-[42vh] z-10">
            <div class="absolute inset-y-12 ml-4 w-11/12">
                <h1 class="text-3xl font-bold" >Welcome to My Short Story</h1>
                <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
                <button class="bg-black text-white w-36 h-12 rounded-full mt-4">Start Reading</button>
            </div>
    </section>
    
{#each storys.data as story}
    <StoryCard story={story}/>
{/each}


