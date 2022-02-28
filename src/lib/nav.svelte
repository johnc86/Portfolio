<!-- NO LONGER USED -->

<script>
    export let hero;
    let showMobMenu = false
    let scrolly
    console.log(scrolly)
</script>

<svelte:window bind:scrollY={scrolly}/>

<nav>
    <div class="nav__content">
        
        {#if !hero}
        <button class="nav__button" on:click={() => showMobMenu = !showMobMenu}
            style="background: hsla(0,0%,0%,{0.3 - (scrolly / 500)}); transform: translateY(max(-7em,{- (scrolly / 20)}em));">
            <svg version="1.1" class="nav__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 122.879 103.609" enable-background="new 0 0 122.879 103.609" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"/></g></svg>
            <span class="nav__button-label" style="opacity: {1 - (scrolly / 200)}">
                Menu
            </span>
        </button>
        {/if}
        <ul class="nav__links" class:showMobMenu >
            <li>Blog</li>
            <li>Work</li>
            <li>History</li>
            <li>Contact</li>
        </ul>
    </div>
</nav>



<style type="scss">
    nav {
        position: fixed;
        // top: clamp(5em, $growthrate + 2em, 7em);
        top: 6em;
        width: 100%;
        display: flex;
        height: 2rem;
    }

    .nav {
        &__content {
            @include container;
            margin: 0 auto;
        }

        &__icon {
            width: 1.5rem;
            height: 1.5rem;
            fill: $col-white;
        }

        &__button {
            border: none;
            border-radius: 0.5rem;
            color: $col-white;
            padding: 0.5rem 0 0.5rem 1rem;

            display: flex;
            @media only screen and (min-width: $breaktab) {
                display: none;
            }

            &-label {
                margin: auto 1rem;
            }
        }

        &__links {
            // background: $col-bg;
            display: none;
            @media only screen and (min-width: $breaktab) {
                display: flex;
            }
        }
    }

    .showMobMenu {
        display: flex;
    }
</style>
