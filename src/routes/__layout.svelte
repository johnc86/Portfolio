<script>
    import Header from "$lib/header.svelte";
    import Nav from "$lib/nav.svelte";
    import "../style/global.scss";
    // import {setContext} from 'svelte';
</script>


<Header />

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
