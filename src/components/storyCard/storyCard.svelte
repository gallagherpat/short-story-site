<script lang="ts">
    type Story = {
        id: number,
        title: string,
        synopsis: string,
        readTime: string,
        url: string,
        createdAt: string
    }
    export let story: Story;
</script>
<a href="/read/{story.id}">
<div class="flex w-11/12 mx-auto my-8">
    <img class="rounded-xl" src={story.url} height="128px" width="128px" alt="">
    <div class="flex flex-col gap-2 my-auto ml-4">
            <h2 class="font-bold text-xl">{story.title}</h2>
            <p>{story.synopsis}</p>
            <div class="text-sm font-thin"><span>{story.createdAt}</span> - <span>{story.readTime} min read</span></div>
    </div>
</div>
</a>
