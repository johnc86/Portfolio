<script>
    import Title from "$lib/title.svelte";
    import "../styles/global.css";
</script>

<header>
    <Title title="John Callaghan" />
</header>

<main> 
    <slot />
</main>

<footer>
    <p>. . .</p>
</footer>

<style>
</style>
