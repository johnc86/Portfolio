<script context="module">
    export async function load({ fetch, params }) {
        const id = params.id;
        const res = await fetch(`/posts/${id}.json`);
        const { post } = await res.json();
        if (res.ok) {
            return {
                props: {
                    post,
                },
            };
        }
        return {
            status: 301,
            // error: new Error('Could not fetch that post')
            redirect: "/",
        };
    }
</script>

<script>
    export let post;
</script>

<div class="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
</div>

<style>
    .post {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>
