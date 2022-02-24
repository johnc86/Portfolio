<script context="module">
    export function load({ error }) {
        return {
            props: {
                message: error.message,
            },
        };
    }
</script>

<script>
    export let message;
</script>

<div class="error">
    <h2>Sorry...</h2>
    <p>{message}</p>
    <a href="/">Return to homepage</a>
</div>

<style>
    .error {
        text-align: center;
        margin-bottom: 10rem;
    }
</style>
