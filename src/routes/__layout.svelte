<script>
    import Title from "$lib/title.svelte";
    import "../style/global.scss";
</script>

<header>
    <Title />
</header>

<main> 
    <slot />
</main>

<footer>
    <!-- <p>. . .</p> -->
</footer>

<style type="scss">
    main {
        @include container;
    }
</style>
