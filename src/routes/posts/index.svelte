<script context="module">
    export async function load({ fetch }) {
        const res = await fetch("/posts.json");
        const { posts } = await res.json();
        // console.log(posts);
        if (res.ok) {
            return {
                props: {
                    posts,
                },
            };
        }
        return {
            status: res.status,
            error: new Error("Could not fetch the posts"),
        };
    }
</script>

<script>
    export let posts;
</script>

<div class="posts">
    <ul>
        {#each posts as post}
            <li>
                <a sveltekit:prefetch href={`/posts/${post.id}`}>{post.title}</a
                >
            </li>
        {/each}
    </ul>
</div>

<style>
    .posts {
        margin-top: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>
